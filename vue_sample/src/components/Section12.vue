<template>
	<div>
		<!-- クリックする度にトランジションのアニメーションが発火する。 -->
		<button @click="show = !show">切替え</button>
		<!-- 下記styleの.fade〜始まるトランジションが発火する。 -->
		<transition name="fade">
			<div v-if="show">フェード表示</div>
		</transition>
		<!-- 下記styleの.slide〜始まるトランジションが発火する。また、appear属性によりページ表示時に1度トランジションが発火する。 -->
		<transition name="slide" appear>
			<div v-if="show">スライド表示</div>
		</transition>
		<!-- 下記styleの.fadeslide〜始まるトランジションが発火する。 -->
		<!-- type="animation"によってDOM削除の時間を下記styleのanimationの時間にする。 -->
		<transition name="fadeslide" type="animation">
			<div v-if="show">フェードしながらスライド表示</div>
		</transition>
		<!-- main.jsでimportしたanimate.cssを使用したイベントを使用する。 -->
		<transition enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__flash" appear>
			<div v-if="show">Animate.cssを適用して表示</div>
		</transition>
		<!-- トランジションの中に同じタグが複数ある場合、タグ内の中身のみ変更される。それを防ぐ為にkey属性を付与する。 -->
		<!-- mode属性にout-inを指定する事により、一方のタグが完全に消えてから、もう一方のタグが表示される。 -->
		<transition name="fade" mode="out-in">
			<div v-if="show" key="bye">さようなら</div>
			<div v-if="!show" key="hello">こんにちは</div>
		</transition>
		<p>
			<span>動作変更 : </span>
			<!-- myAnimationにfadeかslideを挿入し、アニメーションの動作を変更する。 -->
			<button @click="myAnimation = 'fade'">フェード</button>
			<button @click="myAnimation = 'slide'">スライド</button>
		</p>
		<transition :name="myAnimation">
			<div v-if="show">動的表示</div>
		</transition>
		<p>
			<span>表示コンポーネント変更 : </span>
			<!-- myComponentsにSection12_1かSection12_2を挿入し、コンポーネントを変更する。 -->
			<button @click="myComponents = 'Section12_1'">セクション1</button>
			<button @click="myComponents = 'Section12_2'">セクション2</button>
		</p>
		<!-- コンポーネントの表示にアニメーションを加える為にトランジションで囲う。 -->
		<transition name="fade" mode="out-in">
			<components :is="myComponents"></components>
		</transition>
		<button @click="add">追加</button>
		<!-- transition-groupタグはデフォルトではspanタグに置き換えられるが、tag属性で任意のタグ -->
		<transition-group name="fade" tag="ul">
			<li v-for="(number, index) in numbers" :key="number" @click="remove(index)" style="cursor:pointer;">{{number}}</li>
		</transition-group>
		<!-- :css="false"によって、CSSのアニメーションを使用しない事を明示する。JavaScriptのアニメーションのみ使用する場合に必要。 -->
		<transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
			<div class="circle" v-if="show"></div>
		</transition>
	</div>
</template>
<script>
// コンポーネントをローカル登録する。App.vueのみ使用可能。
import Section12_1 from './Section12_1.vue'
import Section12_2 from './Section12_2.vue'
export default {
	data() {
		return {
			numbers: [0,1,2],
			nextNumber: 3,
			show: true,
			myAnimation: 'fade',
			myComponents: 'Section12_1'
		}
	},
	components: {
		Section12_1,
		Section12_2
	},
	methods: {
		// 配列の番地をランダムに返す。0以上1未満な数値に上記dataのnumbers配列の長さを掛けて、最終的に小数点を切り捨てて求める。
		randomIndex() {
			return Math.floor(Math.random() * this.numbers.length);
		},
		// 配列のどの番地に上記dataのnextNumberの値を挿入するか。
		// splice(どの番地, 削除する要素数, 挿入する値)
		add() {
			this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
			this.nextNumber += 1;
		},
		remove(index) {
			this.numbers.splice(index, 1);
		},
		// 現れる前
		beforeEnter(el) {
			el.style.transform = 'scale(0)';
		},
		// 現れる時
		// 下記done()はJavaScriptのアニメーションが終了した事をVue.JSに知らせる為の関数。
		enter(el, done) {
			let scale = 0;
			const interval = setInterval(function() {
				el.style.transform = `scale(${scale})`;
				scale += 0.1;
				if (scale > 1) {
					clearInterval(interval);
					done();
				}
			}, 200);
		},
		// 現れた後
		afterEnter() {
		},
		// 現れるアニメーションがキャンセルされた時
		enterCancelled() {
		},
		// 消える前
		beforeLeave() {
		},
		// 消える時
		// 下記done()はJavaScriptのアニメーションが終了した事をVue.JSに知らせる為の関数。
		leave(el, done) {
			let scale = 1;
			const interval = setInterval(function() {
				el.style.transform = `scale(${scale})`;
				scale -= 0.1;
				if (scale < 0) {
					clearInterval(interval);
					done();
				}
			}, 200);
		},
		// 消えた後
		afterLeave() {

		},
		// 消えるアニメーションがキャンセルされた時
		// v-showと一緒に使用する際のみ有効。
		leaveCancelled() {

		}
	}
}
</script>
<style scoped>
/* transition-groupタグのみに適用されるスタイル */
.fade-move {
	transition: transform 1s;
}
/* 現れる時の最初の状態 */
.fade-enter {
	opacity: 0;
}
/* 現れる時のトランジションの状態 */
.fade-enter-active {
	transition: opacity 1s;
}
/* 現れる時の最後の状態 */
.fade-enter-to {
	opacity: 1;
}
/* 消える時の最初の状態 */
.fade-leave {
	opacity: 1;
}
/* 消える時のトランジションの状態 */
/* positionでabsoluteを指定する事により、消える対象のタグを浮かせる。 */
.fade-leave-active {
	transition: opacity 1s;
	position: absolute;
}
/* 消える時の最後の状態 */
.fade-leave-to {
	opacity: 0;
}
/* 現れる時のトランジションの状態 */
.slide-enter-active {
	animation: slide-in 0.5s;
}
/* 消える時のトランジションの状態 */
.slide-leave-active {
	animation: slide-in 0.5s reverse;
}
/* 現れる時の最初と消える時の最後の状態 */
.fadeslide-enter,
.fadeslide-leave-to {
	opacity: 0;
}
/* 現れる時のトランジションの状態 */
/* 下記animationとtransitionの時間は長い方の時間がDOM削除の時間となる。よって下記の場合、opacityと同じ5sにDOM削除となる。 */
.fadeslide-enter-active {
	animation: slide-in 1s;
	transition: opacity 5s;
}
/* 消える時の最初と現れる時の最後の状態 */
.fadeslide-leave,
.fadeslide-enter-to {
	opacity: 1;
}
/* 消える時のトランジションの状態 */
/* 下記animationとtransitionの時間は長い方の時間がDOM削除の時間となる。よって下記の場合、opacityと同じ5sにDOM削除となる。 */
.fadeslide-leave-active {
	animation: slide-in 1s reverse;
	transition: opacity 5s;
}
@keyframes slide-in {
	from {
		transform: translateX(100px);
	}
	to {
		transform: translateX(0);
	}
}
.circle {
	background-color: pink;
	border-radius: 100px;
	height: 200px;
	width: 200px;
}
</style>
