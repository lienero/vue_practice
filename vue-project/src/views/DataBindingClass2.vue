<template>
  <!-- 반드시 적용해야할 클래스는 기존 html에서 사용하던 방식처럼 class 속성에 클래스명을 입력하면 되고 -->
  <!-- 조건에 따라 바인딩할 클래스의 경우는 v-vind:class를 이용해서 추가적으로 정의해서 사용할 수 있다는 것입니다. -->
  <!-- 다음과 같이 배열을 사용해서 클래스를 바인딩 할 수도 있습니다. -->
  <div class="container" v-bind:class="[activeClass, errorClass]">
    Class Binding
  </div>
</template>
<script>
// 단 배열을 사용하는 경우 특정 조건에 따른 클래스 바인딩 처리를 true/false로 할 수 없습니다.
export default {
  data() {
    return {
      activeClass: "active",
      errorClass: "text-red"
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
