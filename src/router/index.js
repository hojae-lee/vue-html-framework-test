import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

function getComponent(c) {
  // 여기 컴포넌트 공통 처리
}

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "*",
      name: "notFound",
      redirect: "/404",
    },
    {
      path: "/404",
      component: NotFound,
    },
  ],
});
