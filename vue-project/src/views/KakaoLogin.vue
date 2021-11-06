<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
  </div>
</template>
<script>
/* eslint-disable camelcase */
export default {
  methods: {
    kakaoLogin() {
      // window.Kakao.Auth.login 함수를 호출함으로써, 카카오 계정으로 로그인 팝업을 호출 할 수 있다.
      window.Kakao.Auth.login({
        // scope가 동의 항목에서 활성화한 항목 id와 다를 경우 실행되지 않는다.
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: res => {
          const kakao_account = res.kakao_account;
          // 카카오 닉네임
          const nickname = kakao_account.profile.nickname;
          // 카카오 이메일
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);

          // 로그인 처리 구현
          alert("로그인 성공!");
        },
        fail: error => {
          console.log(error);
        }
      });
    },
    kakaoLogout() {
      window.Kakao.Auth.logout(response => {
        // 로그아웃
        console.log(response);
      });
    }
  }
};
</script>
