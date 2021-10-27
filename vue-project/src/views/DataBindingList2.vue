<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for="(item, index) in items" 형식으로 사용 -->
        <!-- 배열에 있는 데이터 수만큼 html 태그를 반복적으로 랜더링하게 됩니다. -->
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  // vue 라이프사이클 훅에 의해서 컴포넌트가 생성이 된 후 created 함수가 실행됩니다.
  // created 함수에서 methods내의 getList 함수를 호출합니다.
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await this.$api(
        "https://ce2db858-998e-48d7-8e4e-55c57ecd94d4.mock.pstmn.io/list",
        "get"
      );
    }
  }
};
</script>
<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
</style>
