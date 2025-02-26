module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Mohalnady/" : "/",
};
