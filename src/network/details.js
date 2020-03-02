import {request} from "./request";

export function goodsDetails(param) {
  return request({
    url: '/api/Mall/MallProductInfo',
    data: param
  })
}

export function GoodsInfo(goods) {
  this.ProductName = goods.ProductName;
  this.MaxPrice = goods.MaxPrice;
  this.ShipAddress = goods.ShipAddress;
  this.InfoImgList = goods.InfoImgList;

}
