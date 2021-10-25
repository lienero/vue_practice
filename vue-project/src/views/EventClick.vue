<template>
  <div>
    <!-- 클릭 이벤트는 v-on:click="메소드명" 또는 @click="메소드명"을 사용해서 추가할 수 있다. -->
    <button type="button" @click="increaseCounter">Add 1</button>
    <!-- 다음과 같이 함수에 파라미터를 전달 할 수 있다. -->
    <button type="button" @click="setCount(7)">Set 7</button>
    <!-- 여러개의 함수를 호출하고 싶다면 다음과 같이 작성하면 된다. -->
    <button type="button" @click="one(), two()">Click</button>
    <p>The counter is : {{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCount(counter) {
      this.counter = counter;
    },
    one() {
      alert("One");
    },
    two() {
      alert("Two");
    }
  }
};
</script>
