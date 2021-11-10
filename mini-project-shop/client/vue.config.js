const target = 'http://127.0.0.1:3000';

// 클라이언트와 서버의 포트가 다른 경우에는 http 통신을 위해서 프록시 서버를 추가해줘야 CORS 문제를 해결할 수 있다.
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      },
    },
  },
};
