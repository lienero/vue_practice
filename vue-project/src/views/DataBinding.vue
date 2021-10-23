<template>
<!-- 이중 괄호를 이용하여 문자열을 데이터 바인딩 할 수 있다. -->
  <h1>Hello, {{title}}!</h1>
</template>
<script>
  export default {
  data() {
    return {
      title: 'World'
    };
  }
  }
</script>
