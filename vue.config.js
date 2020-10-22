module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 원래 data 옵션으로 써야하지만
        // sass-loader가 7에서 8로 버전 업그레이드 하면서
        // data 옵션 이름이 prependData로 바뀜
        // https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.0
        prependData: `
          @import "@/assets/scss/style.scss";
        `
      }
    }
  }
};
