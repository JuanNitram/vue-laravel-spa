require('./bootstrap');

import Vue from 'vue';
import App from './views/App'
import router from './router';
import store from './store'
import * as mutations from './store/types/mutationTypes';

store.commit(mutations.LOGGED_USER, window.user);

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
