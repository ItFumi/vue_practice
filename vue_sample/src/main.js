import Vue from 'vue'
import App from './App.vue'
import Section6 from './components/Section6.vue'
import Section7 from './components/Section7.vue'
import Section8 from './components/Section8.vue'

Vue.config.productionTip = false
// コンポーネントをグローバル登録する。
Vue.component("Section6",Section6)
Vue.component("Section7",Section7)
Vue.component("Section8",Section8)

new Vue({
  render: h => h(App),
}).$mount('#app')
