// localStorage.setItem('token', 'blabla')

require('./plugins/bootstrap');
// require('./plugins/interceptors');

import Vue from 'vue'
Vue.config.productionTip = false
import App from "./App.vue"
import vuetify from "./plugins/vuetify.js"
import router from './plugins/router.js'
import store from './store'
import Vuex from "vuex";
// const { something } = require('../js/components/asd.sj')

Vue.use(Vuex);

// require("./store/subscriber");

// let token = localStorage.getItem('token')
// if (token) {
//     store.commit('auth/set_initial_token')
//     store.dispatch('auth/attempt', token)
// }
// store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
new Vue({
    store,
    router,
    vuetify,
    el: '#root',
    components: { App }
});

// setTimeout(() => {
//     store.dispatch('auth/setFakeUser');
// }, 1500)
// store.dispatch('auth/attempt', localStorage.getItem('token'))
// })

// import * as moment from 'moment';
// Vue.prototype.$moment = moment;
// window.moment = require('moment');
