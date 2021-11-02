<template>
  <div></div>
</template>

<script>
import ApiMixin from "../api.js";
export default {
  // 사용할 믹스인 파일을 배열로 등록
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    // 믹스인은 메소드를 정의해서 컴포넌트,에서 사용할 수 있게 합니다.
    this.productList = await this.$callAPI(
      "https://ce2db858-998e-48d7-8e4e-55c57ecd94d4.mock.pstmn.io/list",
      "get"
    );
    console.log(this.productList);
  }
};
</script>
