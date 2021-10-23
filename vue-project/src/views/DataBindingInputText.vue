<template>
  <div>
    <!-- input type=text에서 v-model은 내부적으로 value 속성을 사용하게 된다. -->
    <!-- data()에 정의된 데이터 키명을 v-model에 넣어주면 모델인 data와 뷰인 input type=text의 value 속성이 서로 양방향으로 데이터 바인딩 설정됩니다. -->
    <input type="text" v-model="valueModel" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueModel: "South Korea"
    };
  }
};
</script>
