<template>
  <div>
    <input type="text" v-model="textValue" />
    <!-- v-model=textValue가 비어있는 경우는 버튼이 비활성화 된다. -->
    <button type="button" v-bind:disabled="textValue == ''">Click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textValue: ""
    };
  }
};
</script>
