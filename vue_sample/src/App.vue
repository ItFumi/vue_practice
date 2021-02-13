<template>
  <div>
    <!-- 大文字で始まるパスカルケースで記載。like-headerというケバブケースでも記載可 -->
    <LikeHeader></LikeHeader>
    <p>{{number}}</p>
    
    <!-- HTML内では属性値をケバブケースで記載する事 -->
    <!-- LikeNumber.vueのincrement()で発火 -->
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>

    <!-- @my-click内は関数でも可能 -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

    <LikeNumber :total-number="number" test-props="test"></LikeNumber>
  </div>
</template>
<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data(){
    return {
      number: 10
    }
  },
  components: {
    LikeHeader: LikeHeader
  },
  methods: {
    incrementNumber(val) {
      this.number = val;
    }
  }
}
</script>
// scopedを入れる事により他のvueファイルへのスタイル適用を防ぐ。
<style scoped>
  div {
    border: 1px solid red;
  }
</style> 