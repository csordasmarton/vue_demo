import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    ...[...Array(11).keys()].map(id => ({
      path: `/example${id}`,
      name: `example${id}`,
      component: () => import(`@/views/${id}`)
    })),
  ]
});