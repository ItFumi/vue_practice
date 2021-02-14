<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>
<script>
export default {
  // 親コンポーネントにkeep-aliveタグを使用した為、activatedとdeactivatedイベントが追加された。
  activated(){
    // About.vueコンポーネントが有効になった時に発火。
    console.log("activated");
  },
  deactivated() {
    // About.vueコンポーネントが無効になった時に発火。
    console.log("deactivated");
  }
};
</script>
