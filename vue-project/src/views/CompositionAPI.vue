<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumvers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumvers" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>
<script>
// reactive 추가
import { reactive } from "vue";
export default {
  name: "calculator",
  // setup은 컴포지션 api를 구현하는 곳이다.
  setup() {
    // reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    });
    function plusNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }
    // 기존의 reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용이 가능해짐
    return {
      state,
      plusNumbers
    };
  }
};
</script>
