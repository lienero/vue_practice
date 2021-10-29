<template>
  <div></div>
</template>
<script>
export default {
  // 부모 컴포넌트로부터 전달받고자 하는 데이터와 동일한 속성 이르믕로 inject에 문자열 배열로 정의합니다.
  // 아무리 계층 구조가 복잡해도 원하는 자식 컴포넌트로 데이터를 한 번에 전달할 수 있으나
  // inject를 통해서 데이터를 전달받는 자식 컴포넌트는 어떤 부모 컴포넌트에서 전달되는 확인이 안되는 단점이 있다.
  inject: ["itemLength"],
  mounted() {
    console.log(this.itemLength);
  }
};
</script>
