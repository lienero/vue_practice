<template>
  <!-- props에 정의된 키는 Vue 인스턴스의 데이터 값으로 사용되기 때문에 h2에서 이중 중괄호를 사용해서 -->
  <!-- 문자열에 대한 데이터 바인딩 처리를 할 수 있습니다. -->
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  // props에는 부모 컴포넌트로 전달받은 데이터가 저장이 됩니다.
  // props 키는 저장될 데이터의 타입과 부모 컴포넌트로부터 데이터가 전달되지 않았을 때의 default 값을 정의합니다.
  props: {
    title: {
      type: String,
      default: "페이지 제목입니다."
    }
  }
};
</script>
