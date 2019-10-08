import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')