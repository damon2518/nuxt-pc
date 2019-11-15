import axios from "axios";
import qs from "qs";
// import { Message } from 'iview'

axios.defaults.timeout = 30000; // 响应时间
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8"; // 配置请求头
// axios.defaults.baseURL = 'userapi'; //配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    // console.error("config",config);
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => Promise.reject(error)
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    // 判断返回数据状态
    // console.log('router', )
    if (res.data.Tips === "token 有误") {
      window.$nuxt.$router.replace("/");
      // this.$Store.commit('changeAccountInfo', {
      //   isLogin: false
      // })
      window.$nuxt.$Message.info("登陆超时请重新登陆");
      return;
    }
    if (res.data.RetCode === 40000) {
      // 登录超时
      this.$Message.info(res.data.Tips);
      if (process.browser) {
        window.$nuxt.$store.commit("changeAccountInfo", { isLogin: false });
        window.localStorage.removeItem("accountInfo");
      }
      return Promise.resolve(res.data);
    } else if (res.data.RetCode !== 100000) {
      // 失败
      window.$nuxt.$Message.info(res.data.Tips);
      return Promise.resolve(res.data);
    } else if (res.data.RetCode === 100000) {
      // 成功
      // Toast(res.data.param)
      return Promise.resolve(res.data);
    }
    return res;
  },
  error => Promise.reject(error)
);

// 返回一个Promise(发送post请求)
function fetchPost(params) {
  const url = "/casualGame";
  // if (window.$nuxt.$store.state.accountInfo.isLogin) {
  //   params.uid = window.$nuxt.$store.state.accountInfo.uid
  //   params.token = window.$nuxt.$store.state.accountInfo.token
  // }
  // if (window.$nuxt.$store.state.isLogin) {
  if (process.browser) {
    let _user = window.localStorage.getItem("accountInfo");
    if (_user) {
      _user = JSON.parse(_user);
      params.Uid = _user.uid;
      params.Token = _user.token;
    }
  }
  // }

  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
function fetchGet(param = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get("/casualGame", {
        params: {
          ...param
        }
      })
      .then(
        response => {
          resolve(response.Data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
export { fetchPost, fetchGet };
