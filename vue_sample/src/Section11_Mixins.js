export const Section11_Mixins = {
  data() {
    return {
      tokyoNumber: 0,
      // ミックスインの使用先に同名のプロパティがある場合はそちらが優先される。
      title: "welcome to Tokyo Section11_Mixins.js"
    }
  },
  methods:{
    tokyoIncrement:function() {
      this.tokyoNumber++;
    }
  },
  // 下記ライフサイクルフックは、コンポーネントファイルのライフサイクルフック(created())実行前に実行される。
  created() {
    console.log("created in Mixins")
  }
}
