import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let initalState = {
    access_token: null,
    isConnected: false
};

new Vue({
    router,
    render: function (h) { return h(App); }
}).$mount('#app')
