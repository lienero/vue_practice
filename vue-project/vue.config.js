module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch"); //prefetch 삭제
  },
  devServer: {
    // CORS 위배 에러 회피
    proxy: {
      "/oauth2.0": {
        target: "https://nid.naver.com"
      }
    }
  }
};
