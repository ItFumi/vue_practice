<template>
  <div>
    <h4>User</h4>
    <router-link to="/section13_1/1">ユーザー1</router-link>
    <router-link to="/section13_1/2">ユーザー2</router-link>
    <hr>
    <!-- URLの｢/｣以降の値を表示する。script内に記入する場合は、this.$router〜で取得する。 -->
    <h4>User No. {{$route.params.id}}</h4>
    <h4>{{id}}</h4>
    <!-- リンクを押下した際に、下記propsのidの値が増加する。 -->
    <router-link :to="'/section13_1/'+(Number(id)+1)+'/Section13_2?lang=ja&page=2'">次のユーザーNoへ</router-link>
    <!-- 上記のリンクと同じ動作を行う。router.jsで指定したnameと紐付く。さらに、対象のrouter.jsのpath｢/section13_1/:id｣の｢:id｣の値を送る為、paramsを付ける。 -->
    <!-- queryによりリンク先に値を送る。 -->
    <router-link :to="{name:'users-id-profile',params:{id:Number(id)+1},query:{lang:'ja',page:'2'}}">次のユーザーNoへ</router-link>
    <router-view></router-view>
    <div style="height:700px;"></div>
    <router-link id="next-user" :to="{name:'users-id-profile',params:{id:Number(id)+1},query:{lang:'ja',page:'2'}}">次のユーザーNoへ</router-link>
  </div>
</template>
<script>
export default {
  props:["id"],
  watch: {
    $route(to, from) {
      // toに現在表示のページ。fromに前回表示したページ。
      console.log(to)
      console.log(from)
    }
  },
  // thisが使用可能になる前に実行される。
  beforeRouteEnter(to, from, next) {
    next(function(vm){
      // thisでアクセス可能となる際に、非同期で実行される。
      console.log(vm.id)
    })
  },
  // URLが変更されつつも、ページの内容が変更されていない時(beforeRouteEnterやbeforeRouteLeaveが実行されていない時)に実行される。
  beforeRouteUpdate(to, from, next) {
    next()
  },
  // 別のページに遷移する際に実行される。
  beforeRouteLeave(to, from, next) {
    var isLevel = window.confirm("ページを出ますか？")
    if(isLevel) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
