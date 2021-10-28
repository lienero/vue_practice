<template>
  <!-- 자식 컴포넌트에 버튼 객체에 ref="btn"로 접근할 수 있드록 작성되었습니다. -->
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>
<script>
export default {
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    }
  }
};
</script>
