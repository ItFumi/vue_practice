<template>
	<!-- templateタグの中身はルート要素のみ配置する。 -->
	<div>
		<div>いいね({{number}})<button @click="increment">+1</button></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			number: 5
		}
	},
	methods: {
		increment() {
			this.number += 1;
		}
	}
}
</script>
