<template>
  <div>
    <!-- textarea는 아래와 같은 형태로 사용한다. -->
    <textarea v-model="message"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "여러 줄을 입력할 수 있는 textarea 입니다."
    };
  }
};
</script>
