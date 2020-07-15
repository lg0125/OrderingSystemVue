import request from '../utils/request'

const BASE_URL = 'http://localhost:8010'

export function reqAddress(latitude,longitude){
  return request({
    baseURL: BASE_URL,
    url: `/front/account/address/${latitude}/${longitude}`,
    method: 'get'
  })
}

export function reqShops(latitude,longitude){
  return request({
    baseURL: BASE_URL,
    url: `/front/product/shops/${latitude}/${longitude}`,
    method: 'get'
  })
}

export function reqSearchShops(flavor){
  return request({
    baseURL: BASE_URL,
    url: '/front/product/shops/flavor',
    method: 'get',
    params: flavor
  })
}

export function reqPwdLogin(user_id,user_password){
  return request({
    baseURL: BASE_URL,
    url: `/front/account/user/login/${user_id}/${user_password}`,
    method: 'get'
  })
}

export function reqUserInfo(user_id){
  return request({
    baseURL: BASE_URL,
    url: `/front/account/user/info/${user_id}`,
    method: 'get'
  })
}

export function reqShopInfo(shop_id){
  return request({
    baseURL: BASE_URL,
    url: `/front/product/info/${shop_id}`,
    method: 'get'
  })
}

export function reqShopGoods(shop_id){
  return request({
    baseURL: BASE_URL,
    url: `/front/product/goods/${shop_id}`,
    method: 'get'
  })
}

//支付 订单
export function saveOrder(user_id,shop_id,items){
  return request({
    baseURL: BASE_URL,
    url: `/front/order/save/${user_id}/${shop_id}`,
    method: 'post',
    data: items
  })
}

export function savePay(payto){
  return request({
    baseURL: BASE_URL,
    url: '/front/pay/pay',
    method: 'post',
    data: payto
  })
}

