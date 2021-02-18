<template>
	<!-- templateタグの中身はルート要素のみ配置する。 -->
	<div>
		<div>
			<p>いいね</p>
			<p>({{totalNumber/2}}) : ({{halfNumber}})</p>
			<button @click="increment">+1</button>
		</div>
	</div>
</template>
<script>
export default {
	/* App.vueの同一の:属性名の値を受取る。キャメルケースで記載する事を推奨。
	props: ["totalNumber"],
	*/
	/* 1. バリデーション用。上記と同意。
	props: {
		totalNumber: Number
	},
	*/
	// 2. バリデーション用。上記と同意。
	props: {
		totalNumber: {
			type: Number,
			// required: true, // 必須入力かどうか。
			default: 4 // App.vueの:属性名が入力していない場合の値。required: trueとの併記は不可。
		},
		// 複数のデータ受信用。
		testProps: {
			type: String
		}
	},
	/* 複数のpropsは上記のオブジェクト形式の他に、下記の様に配列でも可能。
	props: ["totalNumber","testProps"],
	*/
	computed: {
		halfNumber() {
			return this.totalNumber / 2;
		}
	},
	methods: {
		increment() {
			// 第一引数は属性名(何でも良い)、第二引数に受け渡すデータ。
			// $emitは子から任意のタイミングでイベントを発火するものであり、第一引数のみ指定でも可能。
			this.$emit("my-click",this.totalNumber+1);
		}
	}
}
</script>
