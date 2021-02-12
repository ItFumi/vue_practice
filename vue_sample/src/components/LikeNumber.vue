// templateタグの中身は同階層のタグがあってはいけない。
<template>
  <div>いいね({{number}})</div>
</template>

<script>

export default {
  data: function() {
    return {
      number: 57
    }
  }
}
</script>
<style scoped>
  div {
    border: 1px solid blue;
  }
</style> 