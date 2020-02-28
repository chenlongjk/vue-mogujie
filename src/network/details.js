import {request} from "./request";
export function goodsDetails(param) {
  return request({
    url: '/api/Mall/MallProductInfo',
    data:param
  })
}