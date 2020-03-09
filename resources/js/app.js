// bootstrap = lodash, axios and csrf-token
require('./plugins/bootstrap');

// let Vue = require('vue');
import Vue from 'vue'
Vue.config.productionTip = false
import App from "./App.vue"
import vuetify from "./plugins/vuetify.js"
import router from './plugins/router.js'
import store from './store'
import Vuex from "vuex";
Vue.use(Vuex);

require("./store/subscriber");

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        store,
        router,
        vuetify,
        el: '#root',
        components: { App }
    });
})

// import * as moment from 'moment';
// Vue.prototype.$moment = moment;
// window.moment = require('moment');


