import Vue from "vue";
import Router from "vue-router";
import LandingPage3app from "./components/LandingPage3app";
import { landingPage3appData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: LandingPage3app,
      props: { ...landingPage3appData },
    },
  ],
});