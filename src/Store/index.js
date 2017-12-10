import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  home: {
    hello: '欢迎来到你的Vue应用',
    content: '添加点什么吧~',
  },
  detail: {
    list: [
      '写点什么呢？',
      'vue',
      'vue-router',
      'vuex',
      'webpack',
      'element-ui',
      '脚手架搭完啦！'
    ]
  }
}
var store = new Vuex.Store({
  state
});

export default store;
