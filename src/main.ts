/**
 * Entire entery
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
const bootstrap = new Vue({
    render: h => h(App)
}).$mount('#app')
