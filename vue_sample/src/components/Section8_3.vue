<template>
	<div>Section8_3.vueの内容</div>
</template>
<script>
export default {
  // 親コンポーネントにkeep-aliveタグを使用した為、activatedとdeactivatedイベントが追加された。
  activated(){
    // Section8_3.vueコンポーネントが有効になった時に発火。
    console.log("activated");
  },
  deactivated() {
    // Section8_3.vueコンポーネントが無効になった時に発火。
    console.log("deactivated");
  }
};
</script>
