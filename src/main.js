import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import appRoutes from './app-routes.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
  routes: appRoutes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
