import App from "./App.vue";
import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'
import router from "./router";
import store from './store'

Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://api.edamam.com'
axios.defaults.params = {
  app_key: process.env.VUE_APP_API_KEY,
  app_id: process.env.VUE_APP_API_ID
  // dishType: 'Dessert'
}

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
