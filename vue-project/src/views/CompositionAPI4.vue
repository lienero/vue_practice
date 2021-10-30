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
// js에서 계산과 관련된 외부 컴포넌트 불러오기
import { plusCalculator } from "../common.js";
export default {
  name: "calculator",
  setup() {
    // 외부 fuction 사용
    const { num1, num2, result } = plusCalculator();
    // 기존의 reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용이 가능해짐
    return {
      num1,
      num2,
      result
    };
  }
};
</script>
