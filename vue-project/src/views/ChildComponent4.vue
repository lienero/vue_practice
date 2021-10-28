<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  data() {
    return {
      msg: "자식 컴포넌트로부터 보내는 메시지"
    };
  },
  // 자식 컴포넌트가 mounted 되면 $emit을 통해 부모 컴포넌트의 send-message 이벤트를 호출합니다.
  mounted() {
    this.$emit("send-message", this.msg);
  }
};
</script>
