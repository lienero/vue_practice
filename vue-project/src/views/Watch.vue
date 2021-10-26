<template>
  <h1>Full Name : {{ fullName }}</h1>
  <button type="button" @click="changeName">변경</button>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Gyeongmin",
      lastName: "Go",
      fullName: ""
    };
  },
  // watch는 초기에 할당된 값에서 변경이 일어나야 watch에 정의한 함수를 실행한다.(최초 실행 x)
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    }
  },
  methods: {
    changeName() {
      this.firstName = "Eunsol";
    }
  }
};
</script>
