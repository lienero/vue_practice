<template>
  <p>Count: {{ count }}</p>
  <p>CartCount: {{ cartCount }}</p>
  <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
  computed: {
    count() {
      // vue 컴포넌트에서는 this.$store로 접근이 가능합니다.
      // state에 정의된 변수는 vue 컴포넌트에서는 computed 속성을 이용해서 그 변경사항을 항상 추적할 수 있습니다.
      return this.$store.state.count;
    },
    cartCount() {
      // getters에 정의된 값에 접근
      return this.$store.getters.cartCount;
    }
  },
  methods: {
    increment() {
      // mutations에 정의된 함수를 commit를 통해서 호출하는 것으로 저장소의 state에 정의된 변수의 값을 변경할 수 있다.
      // 저장소의 state에 바로 접근해서 변경하는 것이 아니라, commit를 통해서만 변경 가능
      this.$store.commit("increment");
    }
  }
};
</script>
