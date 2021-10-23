<template>
  <div>
    <!-- 체크박스에서는 v-model이 체크박스의 value 속성이 아닌 checked 속성을 사용하기 때문에 -->
    <!-- value 속성에 데이터 바인딩을 하려면 v-model이 아닌 v-bind:value를 사용해야합니다 -->
    <label><input type="checkbox" value="서울" v-model="checked" /> 서울</label>
    <label><input type="checkbox" value="부산" v-model="checked" /> 부산</label>
    <label><input type="checkbox" value="제주" v-model="checked" /> 제주</label>
    <br />
    <span>체크한 지역: {{ checked }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 여러 개의 체크박스를 사용할 때는 배열을 이용해서 데이터를 바인딩해서 한 번에 처리할 수 있습니다.
      checked: []
    };
  }
};
</script>
