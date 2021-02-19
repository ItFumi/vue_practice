<template>
	<div>
		<p>
			<!-- 初期値の0を除き、値を変更するとString型に変更されるのを防ぐ為に.numberを使用する。 -->
			<label for="maxNumber">最大人数</label>
			<input id="maxNumber" type="number" :value="value" @input="$emit('input',$event.target.value)">
			{{value}} {{typeof value}}
		</p>
	</div>
</template>
<script>
export default {
	// App.vueの同一の属性名のテキストを受取る。
	props: ["value"]
}
</script>
