import '@/firebase/init';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.prototype.$moment = require('moment');

Vue.config.productionTip = false;

Vue.component('modal', () =>
  import('@/components/modal/modal.vue'));


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
