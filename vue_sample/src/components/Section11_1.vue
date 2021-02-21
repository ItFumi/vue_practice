<template>
	<div>
		<!-- 下記mixinsからSection11_Mixins.jsのdataおよびmethodsのtokyoIncrement関数の実行が有効になる。 -->
		<h3>Section11_1 No.{{tokyoNumber}}</h3>
		<button @click="tokyoIncrement">東京Noカウント</button>
	</div>
</template>
<script>
// 外部のミックスインファイルを読込む。「@」はsrcという意。
import { Section11_Mixins } from "@/Section11_Mixins"
export default {
	// ミックスインを有効にする。
	mixins: [Section11_Mixins],
	// 下記ライフサイクルフックは、ミックスインファイルのライフサイクルフック(created())を実行後に実行される。
	created() {
    console.log("created in Component Section11_1")
  }
}
</script>
