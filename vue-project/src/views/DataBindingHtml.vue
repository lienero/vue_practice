<template>
  <div>
    <div>{{ htmlString }}</div>
    <!-- vue에서 사용하는 디렉티브는 v-로 접두사로 사용함 -->
    <!-- 실제 html로 출력되기 위해서는 v-html 디렉티브를 사용해야 한다. -->
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red">This is a red String</p>'
    };
  }
};
</script>
