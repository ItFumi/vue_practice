<template>
  <div>
    <!-- 大文字で始まるパスカルケースで記載。like-headerというケバブケースでも記載可 -->
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>
<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue"
export default {
  components: {
    LikeHeader: LikeHeader
  }
}
</script>
// scopedを入れる事により他のvueファイルへのスタイル適用を防ぐ。
<style scoped>
  div {
    border: 1px solid red;
  }
</style> 