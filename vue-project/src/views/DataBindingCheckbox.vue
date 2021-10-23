<template>
  <div>
    <!-- 체크박스에서는 v-model이 체크박스의 value 속성이 아닌 checked 속성을 사용하기 때문에 -->
    <!-- value 속성에 데이터 바인딩을 하려면 v-model이 아닌 v-bind:value를 사용해야합니다 -->
    <label><input type="checkbox" v-model="checked" />{{ checked }}</label>
    <!-- 다음과 같이 체크/해제 되었을 때의 기본값을 변경할 수 있다. -->
    <label>
      <input
        type="checkbox"
        v-model="checked"
        true-value="yes"
        false-value="no"
      />{{ checked }}
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
