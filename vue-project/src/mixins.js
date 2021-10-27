import axios from "axios";

// vue.js에서는 Mixins를 통해 공통 함수를 구현해서 사용할 수 있습니다.
// 데이터에 대한 조회/수정/삭제/생성은 프로젝트 전반에 걸쳐서 컴포넌트에서 사용하게 되는
// 공통 함수 이므로 mixins에 등록해서 사용해야한다.
export default {
  methods: {
    async $api(url, method, data) {
      return (
        await axios({
          method: method,
          url,
          data
        }).catch(e => {
          console.log(e);
        })
      ).data;
    }
  }
};
