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
} from '../mutation-types';

import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },

  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },

  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },

  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  },

  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  },

  [INCREMENT_FOOD_COUNT](state,{ food }){
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT]( state, { food }){
    if(food.count){
      food.count--
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART](state){
    state.cartFoods.forEach(food => food.count = 0)

    state.cartFoods = []
  },

  [RECEIVE_SEARCH_SHOPS](state,{ searchShops }){
    state.searchShops = searchShops
  }
};