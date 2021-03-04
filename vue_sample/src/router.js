import Vue from 'vue'
import Router from 'vue-router'
//import Section6_Section12 from './views/Section6_Section12.vue'
//import Section13 from './views/Section13.vue'
//import Section13_1 from './views/Section13_1.vue'
//import Section13_2 from './views/Section13_2.vue'
//import Section13_3 from './views/Section13_3.vue'
//import Section13_4 from './views/Section13_4.vue'
//import Section13_5 from './views/Section13_5.vue'

// ページが大規模になった場合には下記の様に記載する。
// VueCLI3の場合、プリフェッチという機能(次に必要そうな機能を事前に取っておく。)により1度のページロードで全てロードされる。
// /* webpackChunkName: "Section6_Section12" */と指定する事で、ブラウザのNetworkタブのNameにSection6_Section12が表示される。
const Section6_Section12 = () => import(/* webpackChunkName: "Section6_Section12" */ "./views/Section6_Section12.vue")
const Section13 = () => import(/* webpackChunkName: "Section13" */ "./views/Section13.vue")
const Section13_1 = () => import(/* webpackChunkName: "Section13_1" */ "./views/Section13_1.vue")
const Section13_2 = () => import(/* webpackChunkName: "Section13_2" */ "./views/Section13_2.vue")
const Section13_3 = () => import(/* webpackChunkName: "Section13_3" */ "./views/Section13_3.vue")
const Section13_4 = () => import(/* webpackChunkName: "Section13_4" */ "./views/Section13_4.vue")
const Section13_5 = () => import(/* webpackChunkName: "Section13_5" */ "./views/Section13_5.vue")

// Routerを使用可能にする。
Vue.use(Router)

// RouterをVue.jsに適用させる。
export default new Router({
  // URLの｢#｣を削除する。デフォルトではhashとなっている。
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Section6_Section12,
        header: Section13_3
      },
      // pathに遷移する前に実行する。
      // beforeEnter(to,from,next) {
        // falseを指定すると遷移が無効になる。
        // console.log(next)
      // }
    },
    {
      path: '/section13',
      component: Section13
    },
    {
      path: '/section13_1/:id',
      components: {
        default: Section13_1,
        header: Section13_4
      },
      // props:trueにより、｢path:'/section13_1/:id'｣の｢:id｣の値をsection13_1ページでpropsとして受取れる。
      // 上記componentsがオブジェクト型の為、propsもオブジェクト型で記載し、各コンポーネンツにpropsとして受け渡すか指定する。
      props: {
        default: true,
        header: false
      },
      // childrenにより、App.vueのrouter-viewタグに表示されるSection13_1のrouter-viewタグに指定したコンポーネントを表示できる。
      children: [
        {
          path: 'Section13_2',
          component: Section13_2,
          name: 'users-id-profile'
        }
      ]
    },
    {
      path: '/section13_5',
      component: Section13_5
    },
    // 上記のpathのいずれにもマッチしない場合、redirectで指定したページに遷移する。
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to,from,savedPosition) {
    // 非同期の型を返す。
    return new Promise(resolve => {
      // this.appでmain.jsのVueインスタンスを示す。
      // $onceは1度実行すると消える。要は、App.jsで$emitしたtriggerScrollでない限り実行されない。
      this.app.$root.$once('triggerScroll', function () {
        var position = {x:0, y:0}
        // ある特定のページにあるリンクから別のページに遷移してから元のページに戻る際、位置情報を保持(特定のページにあるリンクの位置)しておく。
        if (savedPosition) {
          position = savedPosition
        }
        // 遷移元のURLにハッシュがあった場合、そのハッシュに遷移する。
        if (to.hash) {
          position = {
            selector: to.hash
          }
        }
        resolve(position)
      })
    })
  }
})
