<template>
	<div>
		<!-- 下記dataのuserをApp.vueに送る。 -->
		<slot :movie_name="movie"></slot>
	</div>
</template>
<script>
export default {
	// App.vueにデータを送る。
	data() {
		return {
			movie: {
				like: "Leon",
				dislike: "StarWars"
			}
		}
	}
}
</script>
