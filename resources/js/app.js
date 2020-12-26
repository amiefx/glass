require('./bootstrap');
window.Vue = require('vue');

import Vuetify from '../plugins/vuetify'

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
        router,
        vuetify: Vuetify,
        store,
        components: {
            'App': App,
        }
    }).$mount('#app')
})

