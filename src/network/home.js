import {request} from '@/network/request'
export function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}
// 获取首页推荐商品
export function getHomeGoods(params){
  return request({
    url: '/api/Mall/MallProductRecommendList',
    data:params
  })
}