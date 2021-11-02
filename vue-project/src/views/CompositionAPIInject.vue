<template>
  <h1>{{ title }}</h1>
</template>
<script>
// inject 추가
import { inject } from "vue";
// js에서 계산과 관련된 외부 컴포넌트 불러오기
export default {
  setup() {
    // 자식 컴포넌트에서는 inject를 이용해서 부모 컴포넌트에서 정의한 provide 키로 데이터를 가져올 수 있습니다.
    const title = inject("title");
    return { title };
  }
};
</script>
