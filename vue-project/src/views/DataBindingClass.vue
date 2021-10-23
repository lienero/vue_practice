<template>
  <!-- 반드시 적용해야할 클래스는 기존 html에서 사용하던 방식처럼 class 속성에 클래스명을 입력하면 되고 -->
  <!-- 조건에 따라 바인딩할 클래스의 경우는 v-vind:class를 이용해서 추가적으로 정의해서 사용할 수 있다는 것입니다. -->
  <div
    class="container"
    v-bind:class="{
      active: isActive,
      'text-red': hasError
    }"
  >
    Class Binding
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false
    };
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
