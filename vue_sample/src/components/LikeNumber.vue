//templateタグの中身は同階層のタグがあってはいけない。
<template>
	<div>
		<div>いいね({{totalNumber/2}})</div>
		<div>いいね({{halfNumber}})</div>
		<button @click="increment">+1</button>
	</div>
</template>
<script>
export default {
	//下記は「props: ["totalNumber","testProps"],」といった配列でも記載可能
	props: {
		totalNumber: {
			totalNumber: Number, //「type: Number」でも可能
			//「required: true」で入力必須かどうか
			//「default: 10」で何も入力されなかった場合の値。requiredとは一緒に記載できない。
			/* オブジェクト型の場合
			default: function() {
				return {
					number: 10
				}
			}
			*/
		},
		testProps: {
			type: String
		}
	},
	computed: {
		halfNumber() {
			return this.totalNumber / 2;
		}
	},
	methods: {
		increment() {
			// $emitは子から任意のタイミングでイベントを発火するもの。第一引数のみでも可能。
			this.$emit("my-click",this.totalNumber + 1);
		}
	}
}
</script>
<style scoped>
div {
	border: 1px solid blue;
}
</style> 