<template>
  <!-- 인 라인 스타일의 경우 데이터를 오브젝트로 선언해서 바인딩 할 수 있습니다. -->
  <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
</template>
<script>
export default {
  data() {
    return {
      baseStyle: "background-color:yellow;width:100%;height:200px;",
      addStyle: "color:red;font-weight:bold;"
    };
  }
};
</script>
