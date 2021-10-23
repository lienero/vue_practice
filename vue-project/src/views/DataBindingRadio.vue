<template>
  <div>
    <!-- 라디오에서는 v-model이 라디오의 value 속성이 아닌 checked 속성을 사용하기 때문에 -->
    <!-- value 속성에 데이터 바인딩을 하려면 v-model이 아닌 v-bind:value를 사용해야합니다 -->
    <label>
      <input type="radio" v-bind:value="radioValue1" v-model="picked" />서울
    </label>
    <label>
      <input type="radio" v-bind:value="radioValue2" v-model="picked" />부산
    </label>
    <label>
      <input type="radio" v-bind:value="radioValue3" v-model="picked" />제주
    </label>
    <br />
    <span>선택한 지역: {{ picked }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: "",
      radioValue1: "서울",
      radioValue2: "부산",
      radioValue3: "제주"
    };
  }
};
</script>
