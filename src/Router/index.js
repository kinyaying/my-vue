import VueRouter from 'vue-router';
import Home from '../Containers/Home.vue';
import List from '../Containers/List.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/list', component: List}
];

const router = new VueRouter({routes});
export default router;
