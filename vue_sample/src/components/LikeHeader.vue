<template>
	<div>
		<slot name="title" :user="user" text="text">
			<p>あ</p>
		</slot>
		<!-- 親コンポーネントのApp.vueのtemplateより、v-slot属性に指定された属性値の中身が表示される。 -->
		<!--
		<slot name="title" :user="user" text="text">
			<h1>{{headerText}}</h1>
		</slot>
		-->

		<slot></slot>
		<slot></slot>

		<!--
		<slot name="number"></slot>
		-->

		<!-- 親コンポーネントのApp.vueのLinkHeaderタグ内の中身が表示される。 -->
		<!-- <slot>親コンポーネントのLinkHeaderタグ内に何も記載無しの場合</slot> -->
	</div>
</template>
<script>
export default {
	// props: ["headerText"]
	data(){
		return {
			user: {
				firstName: "Dack",
				lastName: "Donald"
			}
		}
	}
}
</script>
