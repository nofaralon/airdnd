import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index.js'
import "./style/style.scss";
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
 load: {
   key: 'AIzaSyCs-QKtNa_l3qyNxdpxi7YM7rRgpKvTJU8',
   libraries: 'places', 
 },
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')