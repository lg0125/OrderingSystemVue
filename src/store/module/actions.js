import {
  RECEIVE_ADDRESS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from '../mutation-types'

import {
  reqAddress,
  reqSearchShops,
  reqShopGoods,
  reqShopInfo,
  reqShops,
  reqUserInfo,
} from '../../api/index'



export default {
  getAddress({ commit, state }) {
    const latitude = state.latitude
    const longitude = state.longitude
    reqAddress(latitude, longitude).then(response => {
      const address = response.address
      commit(RECEIVE_ADDRESS, { address })
    })
  },

  getShops({ commit, state }) {
    const { latitude, longitude } = state
    reqShops(latitude, longitude).then(response => {
      const shops = response.shops
      commit(RECEIVE_SHOPS, { shops })
    })
  },

  //同步记录用户信息
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },

  getUserInfo({ commit }, user_id) {
    reqUserInfo(user_id).then(response => {
      const userInfo = response.userInfo
      commit(RECEIVE_USER_INFO, { userInfo })
    })
  },

  loginOut({ commit }) {
    commit(RESET_USER_INFO)
  },

  getShopInfo({commit},shop_id){
    reqShopInfo(shop_id).then(response => {
      const info = response.info
      commit(RECEIVE_INFO,{info})
    })
  },

  getShopGoods({ commit }, shop_id ) {
    reqShopGoods(shop_id).then(response => {
      const goods = response.goods
      commit(RECEIVE_GOODS, { goods })
      // 数据更新了, 通知一下组件
      //callback && callback()
    })
  },

  // 同步更新food中的count值
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },

  // 同步清空购物车
  clearCart({ commit }) {
    commit(CLEAR_CART)
  },

  searchShops({ commit}, flavor) {
    reqSearchShops(flavor).then(response => {
      const searchShops = response.searchShops
      commit(RECEIVE_SEARCH_SHOPS, { searchShops })
    })
  }
};
