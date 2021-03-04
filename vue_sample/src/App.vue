<template>
  <div>
    <nav>
      <!-- デフォルトではaタグに置き換えられるが、tag属性で任意のタグに変更できる。 -->
      <!-- active-class属性はto属性で指定した値がURLに含んでいる際に適用するスタイル。 -->
      <!-- Section13およびSection13_1のリンクは、｢/｣もURLに含む為、Section6_Section12もスタイル適用となる。それを防ぐのがexact属性。 -->
      <router-link to="/" active-class="link--active" exact class="link">Section6_Section12</router-link>
      <router-link to="/section13" active-class="link--active" exact class="link">Section13</router-link>
      <router-link to="/section13_1/1" active-class="link--active" exact class="link">Section13_1</router-link>
      <router-link to="/section13_5" active-class="link--active" exact class="link">Section13_5</router-link>
    </nav>
    <!-- name属性により、1つのURLで複数のrouter-viewを使用する事ができる。 -->
    <router-view name="header"></router-view>
    <!-- @before-enterによりDOMが描画された後に自動で実行してくれる。 -->
    <transition name="fade" mode="out-in" @before-enter>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    beforeEnter() {
      // thisはApp.vueを表す。$rootでmain.jsのVueインスタンスを表す。
      this.$root.$emit('triggerScroll')
    }
  }
}
</script>
<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
/* 現れる時の最初の状態 */
.fade-enter {
	opacity: 0;
}
/* 現れる時のトランジションの状態 */
.fade-enter-active {
	transition: opacity 1s;
}
/* 現れる時の最後の状態 */
.fade-enter-to {
	opacity: 1;
}
/* 消える時の最初の状態 */
.fade-leave {
	opacity: 1;
}
/* 消える時のトランジションの状態 */
.fade-leave-active {
	transition: opacity 1s;
}
/* 消える時の最後の状態 */
.fade-leave-to {
	opacity: 0;
}
</style>
