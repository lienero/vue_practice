import { createStore } from "vuex";

const store = createStore({
  // state는 프로젝트 전체에서 공통으로 사용할 변수를 정의하는 곳입니다.
  // state에 변수를 정의함으로써, 모든 컴포넌트에서 사용가능합니다.
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A"
        }
      ]
    };
  },
  // state로 변수를 관리하고 있다면 장바구니에 담긴 제품 수, 특정 카테고리 제품 리스트 등을 getters를 정의하여 쉽게 가져올 수 있다.
  getters: {
    cartCount: state => {
      return state.cart.length;
    }
  },
  // mutations은 비동기 처리가 아니라 동기 처리를 통해 state에 정의된 변수의 변경 사항을 추적할 수 있게 해줍니다.
  // mutations에 정의된 함수를 commit를 통해서 호출하는 것으로 저장소의 state에 정의된 변수의 값을 변경할 수 있습니다.
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export default store;
