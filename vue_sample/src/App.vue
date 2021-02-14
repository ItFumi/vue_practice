<template>
  <div>
    <!-- 大文字で始まるパスカルケースで記載。like-headerというケバブケースでも記載可。 -->
    <!--
    <LikeHeader headerText="トータルのいいね数">
      <p>トータルのいいね数</p>
      <p>{{number}}</p>
    </LikeHeader>
    -->

    <!-- 子コンポーネントのLikeHeader.vueのslotタグより、name属性にこのv-slot属性に指定された属性値を指定する事で表示される。templateタグ以外は使用不可。 -->
    <!-- 「v-slot:title="slotProps"」で子コンポーネントのslotタグのデータを取得できる。 -->
    <!--
    <LikeHeader>
      <h3>子コンポーネントの空のslotタグに</h3>
      <template v-slot:title="slotProps">
        <p>トータルのいいね数</p>
        <p>{{ slotProps }}</p>
      </template>
      <p>記載される内容。</p>
      <template v-slot:number>
        <p>{{number}}</p>
      </template>
    </LikeHeader>
    -->

    <LikeHeader>
      <!-- 「v-slot:」は「#」に置き換え可能。 -->
      <template #[title]></template>
    </LikeHeader>

    <!-- コンポーネント内にtemplateタグが1つのみの場合、下記の様にコンポーネントにv-slotを記載できる。 -->
    <!-- 下記、省略形。 -->
    <!-- v-slot:default="slotProps"を省略。 -->
    <!--
    <LikeHeader v-slot="slotProps">
      <p>{{slotProps}}</p>
    </LikeHeader>
    -->

    <!-- HTML内では属性値をケバブケースで記載する事。 -->
    <!-- LikeNumber.vueのincrement()で発火。 -->
    <!--
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    -->

    <!-- @my-click内は関数でも可能。 -->
    <!--
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber>
    -->

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- keep-aliveタグによって、タブの切替え処理等で再描画する事がなくなる。-->
    <!-- 上記のcomponentタグは、下記2つと同じ処理を行う。 -->
    <!--
    <Home v-if="currentComponent === 'Home'"></Home>
    <About v-if="currentComponent === 'About'"></About>
    -->
  </div>
</template>
<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  data() {
    return {
      number: 10,
      title: "title",
      currentComponent: 'Home'
    }
  },
  components: {
    LikeHeader: LikeHeader,
    Home: Home,
    About: About
  },
  methods: {
    incrementNumber(val) {
      this.number = val;
    }
  }
}
</script>
/* scopedを入れる事により他のvueファイルへのスタイル適用を防ぐ。 */
<style scoped>
  div {
    border: 1px solid red;
  }
</style>
