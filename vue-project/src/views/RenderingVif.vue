<template>
  <div>
    <!-- v-if의 경우 조건을 만족하면 그 순간에 html 블로이 생성되고, 아닐 경우 삭제된다. -->
    <!-- 하지만 v-show의 경우는 조건 만족 여부에 상관없이 무조건 html 블록이 생성되며, 조건을 만족하면 css의 display를 통해서 화면에 보이게 된다. -->
    <!-- 토글일 경우는 v-show를 권장 -->
    <h1 v-show="type == 'A'">A</h1>
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "A"
    };
  }
};
</script>
