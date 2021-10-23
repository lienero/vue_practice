<template>
  <div>
    <!-- value를 제외한 html 객체의 속성에 데이터를 바인딩 하기 위해서 v-bind: 디렉티브를 사용합니다. -->
    <img v-bind:src="imgSrc" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: "https://kr.vuejs.org/images/logo.png"
    };
  }
};
</script>
