<template>
  <CompositionAPIInject />
</template>
<script>
// provide 추가
import { provide } from "vue";
// js에서 계산과 관련된 외부 컴포넌트 불러오기
import CompositionAPIInject from "./CompositionAPIInject";
export default {
  components: {
    CompositionAPIInject
  },
  setup() {
    // provide 함수를 통해서 전달할 키(key), 값(value) 설정
    provide("title", "Vue.js 프로젝트");
  }
};
</script>
