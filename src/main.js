import Vue from 'vue';
import 'firebase/auth';
import axios from 'axios';
import VueMeta from 'vue-meta';
import VueMapbox from 'vue-mapbox';
import Mapbox from 'mapbox-gl';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.scss';

Vue.use(VueMapbox, { mapboxgl: Mapbox });

Vue.config.productionTip = false;
Vue.use(VueMeta);

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
