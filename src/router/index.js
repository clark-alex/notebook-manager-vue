import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main.vue";
import Login from "../components/Login.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/dashboard", 
      name: "Main",
      component: Main
    },
    {
      path: "/",
      name: "Login",
      component: Login
    }
  ]
});