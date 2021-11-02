import axios from "axios";
// axios를 사용하는 공통함수를 작성
export default {
  methods: {
    // 일반적으로 컴포넌트에 정의되는 메소드명에는 $와 같은 prefix를 사용하지 않기 때문에
    // 믹스인 파일의 메소드명을 이렇게 작성하면 컴포넌트의 메소드명과 구분할 수 있다.
    async $callAPI(url, method, data) {
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
