const mutations = {
  //添加购物车
  addCart(state,goods){
    let isGoods = null
    for (let item of state.cartList) {
      if (item.id===goods.id){
        isGoods = item
      }
    }
    if (isGoods){
      isGoods.count +=1
    }else {
      goods.count = 1
      state.cartList.push(goods)
    }
  }
}
export default mutations