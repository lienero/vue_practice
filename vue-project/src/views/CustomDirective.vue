<template>
  <input type="text" v-focus />
</template>
<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        // v-focus 디렉티브가 정의된 html 객체에 마우스 포커스가 위치하게 됩니다.
        el.focus();
      }
    }
  }
};
</script>
