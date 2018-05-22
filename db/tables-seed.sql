create table users(
    id serial primary key,
    userName varChar(20)
)


create table notes(
    id serial primary key,
    user-id integer references users(id),
    title varChar(100),
    hidden-note varChar(100),
    body-note varChar(1000),
    timestamp timestamp,
    header-color varChar(50)

)