module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        network: "@/network",
        common: "@/common",
        components: "@/components",
        views: "@/views",
        lib: "@/lib",
        data: "@/data",
      },
    },
  },
};
