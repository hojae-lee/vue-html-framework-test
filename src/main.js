import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store";
import LoadScript from "vue-plugin-load-script";

const BASE_URL = "js/";

Vue.use(LoadScript);
Vue.config.productionTip = false;

// 외부 스크립트 로드
async function externalLoadScript() {
  await Vue.loadScript(`${BASE_URL}jquery.min.js`);
  await Vue.loadScript(`${BASE_URL}browser.min.js`);
  await Vue.loadScript(`${BASE_URL}breakpoints.min.js`);
  await Vue.loadScript(`${BASE_URL}main.js`);
}

externalLoadScript();

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
