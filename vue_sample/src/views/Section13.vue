<template>
  <div>
    <h4>Home</h4>
    <div style="height:700px;"></div>
    <!-- 下記methodsのtoSection13_1関数を実行し、toSection13_1ページを表示する。 -->
    <button @click="toSection13_1">Section13_1へ</button>
    <!-- 下記methodsのtoSection13_1_p2関数を実行し、router.jsで指定したnameと紐付く。さらに、対象のrouter.jsのpath｢/section13_1/:id｣の｢:id｣の値を送る為、paramsを付ける。 -->
    <button @click="toSection13_1_p2">Section13_1へ part2</button>
    <div style="height:300px;"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toSection13_1() {
      this.$router.push({path:"section13_1/1"})
    },
    toSection13_1_p2() {
      this.$router.push({name:'users-id-profile',params:{id:1}})
    }
  }
}
</script>
