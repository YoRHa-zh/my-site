import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Home from './views/Home'
import showMessage from '@/util/showMessage';
Vue.prototype.$showMessage = showMessage;
import './mock'
import './api/banner'
import "./styles/global.less";
import './eventBus' //事件总线实例
//自定义指令
import vLoading from '@/directives/loading';
Vue.directive('loading',vLoading)
import vLazy from '@/directives/lazy';
Vue.directive('lazy',vLazy);

import store from './store'
store.dispatch("setting/fetchSetting")

// 解决点两次同一个路由的报错问题
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



// import eventBus from './eventBus';
// function handler1(data) {
//   console.log('handler1',data)
// }
// function handler2(data) {
//   console.log('handler2',data)
// }
// eventBus.$on('event1',handler1)
// eventBus.$on('event1',handler2)
// eventBus.$on('event2',handler1)
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;

// import {getSetting} from "./api/setting";
// getSetting().then(resp=>{
//   console.log(resp)
// })

