<template>
	<div>
		<!-- 下記のpropsのheaderTextで受取ったテキストを表示する。 -->
		<div>{{headerText}}</div>
		<!-- App.vueのhtmlタグを含めたテキストにslotの数分置きかわり表示する。 -->
		<slot></slot>
		<slot></slot>
		<slot></slot>
		<!-- App.vueの同じ属性値のv-slot属性の中身を表示する。 -->
		<!-- 下記dataのuserをApp.vueに送る。 -->
		<slot name="title" :myname="user"></slot>
		<slot name="number"></slot>
		<slot name="animal"></slot>
	</div>
</template>
<script>
export default {
	// App.vueの同一の属性名のテキストを受取る。
	props: ["headerText"],
	// App.vueにデータを送る。
	data() {
		return {
			user: {
				firstName: "Ito",
				lastName: "Fumitaka"
			}
		}
	}
}
</script>
