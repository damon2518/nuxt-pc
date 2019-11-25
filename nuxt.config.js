import pkg from "./package";
const config = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name || process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: pkg.description || process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css", //插件的默认样式
    "@/assets/common.scss" //引入assets下的reset.css全局标签重置样式
    // "@/assets/resources.scss" //引入全局的
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", "@/plugins/echarts"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "@nuxtjs/style-resources"],
  // styleResources: {
  //   sass: "~assets/resources.scss"
  // },
  axios: {
    proxy: true
  },
  proxy: {
    "/casualGame": {
      target: "http://www.win4000.com/meitu.html",
      pathRewrite: {
        "/casualGame": "/casualGame"
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
function delproxy() {
  if (process.env.NODE_ENV === "production") {
    delete config.proxy;
  }
  return config;
}

delproxy(config);

export default config;
