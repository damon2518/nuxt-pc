import Vue from "vue";
import Vuex from "vuex";
import { fetchPost } from "../server/http";

Vue.use(Vuex);

export const state = () => ({
  accountInfo: {
    uid: "",
    token: "",
    isLogin: false
  }
});
export const getters = {};
export const mutations = {
  changeAccountInfo(state, param) {
    Object.assign(state.accountInfo, param);
  },
  // 本地存储
  setUserInfo(state, accountInfo) {
    if (accountInfo && accountInfo.Uid) {
      if (process.browser) {
        window.localStorage.accountInfo = JSON.stringify({
          uid: accountInfo.Uid,
          token: accountInfo.Token,
          isLogin: true
        });
      }
      accountInfo.isLogin = true;
      accountInfo.logout = false;
      state.accountInfo = accountInfo;
    }
  }
  // 读取
  // fetchIDlist() {
  //   const user = window.localStorage.getItem('accountInfo')
  //   console.error('user读取', user)

  //   return JSON.parse(user || '{}')
  // }
};
export const actions = {
  // 登录
  async Login({ commit }, param) {
    const res = await fetchPost(param);
    if (res.RetCode * 1 === 100000) {
      commit("changeAccountInfo", {
        ...res.Data,
        isLogin: true
      });
      commit("setUserInfo", res.Data);
    }
    return res;
  },

  // 获取个人信息
  async requestAccountInfo({ commit }) {
    const res = await fetchPost({
      EventId: 8033803100102
    });
    commit("changeAccountInfo", res.Data);
    return res;
  },
  // 退出登录
  async userLogout({ commit }, param) {
    await fetchPost({
      EventId: 8033803100104
    });
    commit("changeAccountInfo", {
      isLogin: false
    });
    if (process.browser) {
      window.localStorage.removeItem("accountInfo");
      window.localStorage.removeItem("expire");
    }
    return true;
  }
};
