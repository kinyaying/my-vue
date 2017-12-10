import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './Router/index.js'
import App from './app.vue';
import { Button, Select, Container, Header, Dropdown, DropdownMenu, DropdownItem, Col, Main, MessageBox } from 'element-ui';
import './Assets/index.css';
import store from './Store';

Vue.use(VueRouter);

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Header);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Col);
Vue.use(Main);

var vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store
})
