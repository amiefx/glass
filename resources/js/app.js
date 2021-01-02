require('./bootstrap');
window.Vue = require('vue');

const lang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = lang;

import Vuetify from '../plugins/vuetify'
import i18n from '../plugins/i18n'

import router from './router/router';
import store from './store';

require('./store/subscriber')

import Default from './layouts/Default.vue'
import Admin from './layouts/Admin.vue'

Vue.component('default-layout', Default)
Vue.component('admin-layout', Admin)

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

// import VMdDateRangePicker from "v-md-date-range-picker";
// Vue.use(VMdDateRangePicker);

import App from './components/AppComponent';

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
     new Vue({
      //  el: '#app',
        i18n,
        router,
        vuetify: Vuetify,
        store,
        components: {
            'App': App,
        }
    }).$mount('#app')
})

