<template>
	<div>
		<!-- 下記computedのupperCaseTitle関数によって、下記dataのtitleのテキストを大文字に変換する。 -->
		<h3>1.{{upperCaseTitle}}</h3>
		<h3>2.{{upperCaseSubTitle}}</h3>
		<!-- main.jsのfilterで指定されている同名の関数の処理を実行する。 -->
		<h3>3.{{title2 | upperCase}}</h3>
		<h3>4.{{subTitle2 | upperCase}}</h3>
		<!-- 下記のfiltersで指定されている同名の関数の処理を実行する。 -->
		<h3>5.{{title2 | lowerCase}}</h3>
		<h3>6.{{subTitle2 | lowerCase}}</h3>
		<!-- 下記、filterの関数を複数指定する場合。左から順に実行される。 -->
		<!-- title2のテキストサイズを小さくしてから大きくする。 -->
		<h3>7.{{title2 | lowerCase | upperCase}}</h3>
		<!-- subTitle2のテキストサイズを大きくしてから小さくする。 -->
		<h3>8.{{subTitle2 | upperCase | lowerCase}}</h3>
		<!-- 下記mixinsからSection11_Mixins.jsのdataおよびmethodsのtokyoIncrement関数の実行が有効になる。 -->
		<h3>Section11 No.{{tokyoNumber}}</h3>
		<button @click="tokyoIncrement">東京Noカウント</button>
	</div>
</template>
<script>
// 外部のミックスインファイルを読込む。「@」はsrcという意。
import { Section11_Mixins } from "@/Section11_Mixins"
export default {
	// ミックスインを有効にする。
	mixins: [Section11_Mixins],
	data() {
		return {
			title: "welcome to Tokyo",
			subTitle: "Tokyo is a great city",
			title2: "welcome to Tokyo2",
			subTitle2: "Tokyo is a great city2"
		}
	},
	// 下記はローカル宣言。上記のtemplateから呼出される処理。引数で受取ったテキストを小文字にする。
	filters: {
		lowerCase: function(value) {
			return value.toLowerCase()
		}
	},
	computed: {
		// templateから同じ処理内容の関数を実行する場合、処理の数だけ関数を増やさなければならない。
		// 下記upperCaseSubTitle関数と中身が同じ。
		upperCaseTitle() {
			return this.title.toUpperCase();
		},
		// 上記upperCaseTitle関数と中身が同じ。
		upperCaseSubTitle() {
			return this.subTitle.toUpperCase();
		}
	},
	// 下記ライフサイクルフックは、ミックスインファイルのライフサイクルフック(created())を実行後に実行される。
	created() {
    console.log("created in Component Section11")
  }
}
</script>
