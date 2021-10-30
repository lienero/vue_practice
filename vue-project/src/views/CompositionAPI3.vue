<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
// toRefs 추가
import { reactive, computed, toRefs } from "vue";
function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    // computed()를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더한 값을 반환
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  // 반응현으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서는 toRefs를 사용해야한다.
  return toRefs(state);
}
export default {
  name: "calculator",
  setup() {
    // 외부 fuction 사용
    let { num1, num2, result } = plusCalculator();
    // 기존의 reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용이 가능해짐
    return {
      num1,
      num2,
      result
    };
  }
};
</script>
