import Vue from 'vue'
import App from './App.vue'
import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import echarts from "echarts";
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.prototype.$axios = axios
Vue.use(VueResource);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
    render: h => h(App),
}).$mount('#app')
