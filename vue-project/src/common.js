import { reactive, computed, toRefs } from "vue";
const plusCalculator = () => {
  const state = reactive({
    num1: 0,
    num2: 0,
    // computed()를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더한 값을 반환
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  // 반응현으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서는 toRefs를 사용해야한다.
  return toRefs(state);
};
// 정의된 코드를 다른 컴포넌트에서 사용할 수 있도록 컴포넌트를 내보냄
export { plusCalculator };
