<template>
  <ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild";
export default {
  components: { ProvideInjectChild },
  data() {
    return {
      items: ["A", "B"]
    };
  },
  provide() {
    return {
      // Povide 함수를 통해서 배열 items의 length를 반환합니다.
      // 자식 컴포넌트로 전달하고자 하는 데이터를 provide에 정의합니다.
      itemLength: this.items.length
    };
  }
};
</script>
