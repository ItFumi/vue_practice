import Vue from 'vue'
import App from './App.vue'
import Section6 from './components/Section6.vue'

Vue.config.productionTip = false
// コンポーネントをグローバル登録する。
Vue.component("Section6",Section6)

new Vue({
  render: h => h(App),
}).$mount('#app')
