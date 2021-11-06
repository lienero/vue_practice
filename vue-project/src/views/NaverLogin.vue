<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">로그아웃</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      naverLogin: null
    };
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      // 개발자센터에 등록한 ClientID
      clientId: "v5pgcMdgR5X9qYWPnzoK",
      // 개발자센터에 등록한 callback Url
      callbackUrl: "http://localhost:8080/naverlogin",
      // 팝업을 통한 연동처리 여부
      isPopup: false,
      // 로그인 버튼의 타입을 지정
      loginButton: { color: "green", type: 3, height: 60 }
    });
    // 설정정보를 초기화하고 연동을 준비
    this.naverLogin.init();
    this.naverLogin.getLoginStatus(status => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);
        // 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크
        var email = this.naverLogin.user.getEmail();
        if (email === undefined || email === null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          // 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함
          this.naverLogin.reprompt();
        }
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = `/oauth2.0/token?grant_type=delete&client_id=v5pgcMdgR5X9qYWPnzoK&client_secret=vWZ9ZjNCv6&access_token=${accessToken}&service_provider=NAVER`;
      axios.get(url).then(res => {
        console.log(res.data);
      });
      // https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=zFcLWPMTcDQTNTB6iIOy&client_secret=bUW7FZMpS9&access_token=AAAAOOCeX4fAa_NxKPAmJW8C1UeLxGT3nM0wRV33irhyHyRua1JJrfrp0jZwfbOD0r502Id9mbhb0YiA9_NvCXGAwws&service_provider=NAVER
    }
  }
};
</script>
