import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// const router = new VueRouter({
  // routes: [
    // {
      // path: '/pomodoro-timer',
      // component: App
    // },
    // {
      // path:'/',
      // redirect: '/pomodoro-timer'
    // }
  // ]
// });

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
