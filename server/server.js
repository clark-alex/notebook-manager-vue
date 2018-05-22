require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , ctrl = require('./ctrl')
    , path = require('path')

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    // CALLBACK_URL,
    // SUCCESSREDIRECT,
    // FAILUREREDIRECT
} = process.env

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})


app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then(users => {
        if (!users[0]) {
            db.create_user([profile.id, profile.displayName, profile.picture]).then(res => {
                done(null, res[0].id);
            })
        } else {
            done(null, users[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id)
})

passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0])
    })
})

// auth0 endpoints
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: SUCCESSREDIRECT,
    failureRedirect: FAILUREREDIRECT
}))
app.get('/auth/me', (req, res) => {    
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('NNNNNOPE!')
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(FAILUREREDIRECT)
})


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})
 
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))