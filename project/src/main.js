import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import '@/assets/scss/base/default.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
