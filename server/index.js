const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const host = process.env.HOST || "0.0.0.0";
// 端口号（这里换个端口号测试）
const port = process.env.PORT || 3006;

app.set("port", port);

// 导入并设置nuxt.js选项
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // 只在dev模式下构建
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express nuxt中间件
  app.use(nuxt.render);

  // 服务器
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
