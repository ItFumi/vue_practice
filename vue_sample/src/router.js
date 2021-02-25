import Vue from 'vue'
import Router from 'vue-router'
import Section6_Section12 from './views/Section6_Section12.vue'
import Section13 from './views/Section13.vue'
import Section13_1 from './views/Section13_1.vue'

// Routerを使用可能にする。
Vue.use(Router)

// RouterをVue.jsに適用させる。
export default new Router({
  routes: [{path: '/', component:Section6_Section12},{path: '/section13', component:Section13},{path: '/section13_1', component:Section13_1}]
})
