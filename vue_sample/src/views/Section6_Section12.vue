<template>
  <!-- templateタグの中身はルート要素のみ配置する。 -->
  <div>
    <!-- 大文字で始まるパスカルケースで記載。 -->
    <div class="section">
      <Section6_1></Section6_1>
      <Section6></Section6>
    </div>
    <div class="section">
      <p>{{number}}</p>
      <!-- :属性名を挿入する事で、Section7.vueにnumberの値を送る。 -->
      <!-- ケバブケースで記載する事を推奨。totalNumberといったキャメルケースでの記載も可能。 -->
      <!-- 子コンポーネントのSection7.vueのincrement関数内にある$emitの第一引数名のイベントが実行される。 -->
      <Section7 :total-number="number" @my-click="number = $event"></Section7>
      <Section7 :total-number="number" @my-click="number = $event"></Section7>
      <!-- 下記、子コンポーネントのSection7.vueのincrement関数の$emit実行後、下記methodsのincrementNumber関数を実行する。 -->
      <!-- <Section7 :total-number="number" @my-click="incrementNumber"></Section7> -->
      <!-- 下記、複数のデータ送信用。Section7.vueにnumberとtestの値を送る。 -->
      <!-- <Section7 :total-number="number" :test-props="test"></Section7> -->
    </div>
    <div class="section">
      <!-- Section8.vueへテキスト「トータルのいいね数」を送る。 -->
      <Section8 headerText="トータルのいいね数"></Section8>
      <!-- Section8.vueへhtmlタグも含めたテキスト「トータルのいいね数」を送る。 -->
      <!-- 下記、templateタグで囲っていない内容のものは、最終的に自動生成されたv-solot:default属性のあるtemplateタグにまとめられる。 -->
      <Section8>
        <h4>トータルのいいね数</h4>
        <p>あ</p>
        <h3>{{number}}</h3>
        <!-- Section8.vueで同名のname属性を持つslot内にテキスト「こんにちは」を送る。 -->
        <!-- Section8.vueの同名のname属性に、v-bindで送られたデータを表示する。 -->
        <template v-slot:title="aaa">
          <h2>こんにちは</h2>
          <h2>{{aaa}}</h2>
        </template>
        <p>い</p>
        <p>う</p>
        <!-- Section8.vueで同名のname属性を持つslot内にnumberの値を送る。 -->
        <template v-slot:number>
          <p>{{number}}</p>
        </template>
        <p>え</p>
        <!-- 下記dataのtitleをv-slot[title]に挿入し、Section8.vueへhtmlタグも含めたテキストを送る。 -->
        <template v-slot:[title]>
          <p>犬</p>
          <p>猫</p>
        </template>
      </Section8>
      <!-- タグ内に何も挿入していない為、Section8_1.vueのslotタグ内のテキストを表示する。 -->
      <Section8_1></Section8_1>
      <!-- Section8_2.vueからv-bindで送られたデータを表示する。Section8_2コンポーネントタグ内にtemplateタグが1つだけの場合、templateタグ省略できる。 -->
      <!-- v-slot:default="movie_name"でも可能。 -->
      <Section8_2 v-slot="movie_name">
        <h2>{{movie_name}}</h2>
      </Section8_2>
      <!-- 下記dataのcurrentComponentの値を切替える事でSection8_3とSection8_4の内容の表示を制御する。 -->
      <button @click="currentComponent = 'Section8_3'">Section8_3</button>
      <button @click="currentComponent = 'Section8_4'">Section8_4</button>
      <Section8_3 v-if="currentComponent === 'Section8_3'"></Section8_3>
      <Section8_4 v-if="currentComponent === 'Section8_4'"></Section8_4>
      <!-- 下記componentタグは、上記2つのコンポーネントタグと同じ意味。 -->
      <!-- keep-aliveタグによって、タブの切替え処理等で再描画する事がなくなる。 -->
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
    <div class="section">
      <h3>イベントのフォーム</h3>
      <p>
        <!-- .lazyなしの場合、リアルタイムで入力値が変更される。 -->
        <label for="title">タイトル(.lazyなし)</label>
        <input id="title" type="text" v-model="eventData.title">
        {{eventData.title}}
      </p>
      <p>
        <!-- .lazyありの場合、Enterキーで確定時に入力値が変更される。 -->
        <label for="title2">タイトル2(.lazyあり)</label>
        <input id="title2" type="text" v-model.lazy="eventData.title2">
        {{eventData.title2}}
      </p>
      <p>
        <!-- コンポーネントに記載する方法。初期値の0を除き、値を変更するとString型に変更されるのを防ぐ為に.numberを使用する。 -->
        <!-- 下記v-modelは:value="eventData.maxNumber"に変換できる。 -->
        <Section9 v-model.number="eventData.maxNumber"></Section9>
      </p>
      <p>
        <!-- .trimで入力値の前後の空白を削除する。 -->
        <label for="host">主催者</label>
        <input id="host" type="text" v-model.trim="eventData.host">
        {{eventData.host}}
      </p>
      <p>
        <label for="detail">イベントの内容</label>
        <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
        {{eventData.detail}}
      </p>
      <p>
        <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
        <label for="isPrivate">非公開</label>
        {{eventData.isPrivate}}
      </p>
      <p>
        <!-- 下記のv-modelにdataの共通のプロパティ名を指定すると関連づけられる。 -->
        <input type="checkbox" id="10" value="10代" v-model="eventData.target">
        <label for="10">10代</label>
        <input type="checkbox" id="20" value="20代" v-model="eventData.target">
        <label for="20">20代</label>
        <input type="checkbox" id="30" value="30代" v-model="eventData.target">
        <label for="30">30代</label>
        {{eventData.target}}
      </p>
      <p>
        <span>参加費</span>
        <!-- 下記のv-modelにdataの共通のプロパティ名を指定すると関連づけられる。 -->
        <input type="radio" id="free" value="無料" v-model="eventData.price"><label for="free">無料</label>
        <input type="radio" id="paid" value="有料" v-model="eventData.price"><label for="paid">有料</label>
      </p>
      <p>
        <!-- 複数選択の場合、下記selectタグにmultipleを挿入し、dataのlocationを[]に変更する。 -->
        <select v-model="eventData.location">
          <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        {{eventData.location}}
      </p>
    </div>
    <div class="section">
      <Section10></Section10>
    </div>
    <div class="section">
      <Section11></Section11>
      <Section11_1></Section11_1>
    </div>
    <div class="section">
      <Section12></Section12>
    </div>
  </div>
</template>
<script>
// コンポーネントをローカル登録する。App.vueのみ使用可能。
import Section6_1 from '../components/Section6_1.vue'
import Section7 from '../components/Section7.vue'
import Section8 from '../components/Section8.vue'
import Section8_1 from '../components/Section8_1.vue'
import Section8_2 from '../components/Section8_2.vue'
import Section8_3 from '../components/Section8_3.vue'
import Section8_4 from '../components/Section8_4.vue'
import Section9 from '../components/Section9.vue'
import Section10 from '../components/Section10.vue'
import Section11 from '../components/Section11.vue'
import Section11_1 from '../components/Section11_1.vue'
import Section12 from '../components/Section12.vue'
export default {
  data() {
    return {
      number: 10,
      title: "animal",
      currentComponent: 'Section8_3',
      locations: ["東京","大阪"],
      eventData: {
        title: "タイトル",
        title2: "タイトル2",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      }
    }
  },
  components: {
    Section6_1,
    Section7,
    Section8,
    Section8_1,
    Section8_2,
    Section8_3,
    Section8_4,
    Section9,
    Section10,
    Section11,
    Section11_1,
    Section12
  },
  methods: {
    // 子コンポーネントのSection7.vueのincrement関数内にある$emitの第二引数のデータがvalueに挿入される。
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>
/* scopedを指定する事によって、このvueファイルのみスタイルを適用する。 */
<style scoped>
.section {
  border: 1px solid #000;
}
</style>
