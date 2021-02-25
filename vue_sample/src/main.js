import Vue from 'vue'
import App from './App.vue'
import Section6 from './components/Section6.vue'
import 'animate.css'

Vue.config.productionTip = false
// コンポーネントをグローバル登録する。
Vue.component("Section6",Section6)
// Sevtion10.vueで使用されているカスタムディレクティブ(v-border)を登録する。基本的にbindとupdateを使用する。
// 下記はグローバル宣言。ローカル宣言はSection10.vueに記載する。
Vue.directive("border", function(el, binding) {
  // Section10.vueのカスタムディレクティブv-bindに指定したwidthとcolorの値を挿入する。
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  // Section10.vueのカスタムディレクティブv-bindに指定した引数solidを受取る。
  el.style.borderStyle = binding.arg
  // Section10.vueのカスタムディレクティブv-bindに指定した修飾子の有無によってスタイルを適用する。
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem"
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.25)"
  }
})
/* 下記はカスタムディレクティブを省略しない記載方法。
Vue.directive("border", {
  ディレクティブが初めて対象の要素に紐付いた時。1度しか実行されない。
  bind() {},
  親Nodeに挿入された時
  insrted() {},
  コンポーネントが更新される度。子コンポーネントが更新される時。
  update() {},
  コンポーネントが更新される度。子コンポーネントが更新された時。
  componentUpdated() {},
  ディレクティブが紐付いている要素から取り除かれた時。
  unbind() {}
})
*/
// 下記はグローバル宣言。Section11.vueから呼出される処理。引数で受取ったテキストを大文字にする。
Vue.filter("upperCase", function(value) {
  return value.toUpperCase()
})
// 全てのVueインスタンスに適用される。
Vue.mixin({
  created() {
    console.log("Global Mixin")
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
