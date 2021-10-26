<template>
  <h1>Full Name : {{ fullName }}</h1>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Gyeongmin",
      lastName: "Go"
    };
  },
  // computed는 Vue 인스턴스 내에 정의된 데이터 값과 연관된 또 하나의 데이터를 정의해서 사용할 수 있도록 해줍니다.
  // 정의된 값 중 하나라도 변경이 일어나면 fullName 함수가 자동으로 실행되고, fullName 값이 갱신됩니다.
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>
