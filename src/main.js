import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as echarts from "echarts";
import { store } from "./store"
import VueResource from "vue-resource"

import { API_KEY } from "./config/env"

Vue.use(VueResource)
Vue.prototype.$echarts = echarts;

Vue.http.interceptors.push((request) => {
  request.headers.set('Authorization', 'Bearer ' + API_KEY)
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
