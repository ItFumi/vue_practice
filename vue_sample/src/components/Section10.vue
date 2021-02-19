<template>
	<div>
		<!-- main.jsで作成したカスタムディレクティブを使用する。 -->
		<!-- 下記のwidthとcolorはmain.jsのカスタムディレクティブの引数のbindingに送られる。 -->
		<!-- :引数は1つ(下記ではsolid)、修飾子は複数(下記ではroundとshadow)をmain.jsに送られる。 -->
		<p v-border:solid.round.shadow="{width:'6px',color:'red'}">(グローバル)カスタムディレクティブを使用</p>
		<p v-border2:dotted="{width:'3px',color:'lime'}">(ローカル)カスタムディレクティブを使用</p>
	</div>
</template>
<script>
export default {
	directives: {
		border2: function(el, binding) {
			// Section10.vueのカスタムディレクティブv-bindに指定したwidthとcolorの値を挿入する。
			el.style.borderWidth = binding.value.width
			el.style.borderColor = binding.value.color
			// Section10.vueのカスタムディレクティブv-bindに指定した引数solidを受取る。
			el.style.borderStyle = binding.arg
		}
	}
}
</script>
