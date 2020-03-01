//  防抖函数
function debounce(func, time) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, time)
  }
}

export {debounce}