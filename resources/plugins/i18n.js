import en from '../js/i18n/en.json'
import ur from '../js/i18n/ur.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        en: en,
        ur: ur
    }
})
