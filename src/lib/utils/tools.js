//获取最接近当前显示区域的模块的下标和值
function findClose(num, nums) {
  const arr = [];
  nums.forEach((i, n) => arr.push([i, Math.abs(num - n)]));
  arr.sort((a, b) => a[1] - b[1]);
  return arr[0];
}
//获得指定范围的随机整数
function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

//获取当前窗口滑动的距离
function getScrollTop() {
  return document.scrollingElement.scrollTop;
}

//将窗口滑动到指定位置
function scrollTo(dest) {
  window.stop(); //停止上一个执行中的动画
  window.scrollTo({ top: dest, behavior: "smooth" });
}
//防抖函数（使用前先创建 timer 变量，并传入第二个参数）：仅响应最后一次请求
function debounce(delay, timer, callback) {
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, delay);
  return timer;
}
//节流函数（使用前先创建 timer 变量，并传入第二个参数）：多次请求仅响应一次
function throttle(delay, prev, callback) {
  //利用闭包原理使 prev 不会每次调用都是新的
  if (!prev) prev = Date.now();
  if (Date.now() - prev >= delay) {
    callback.apply(this, arguments);
    prev = false;
  }
  return prev;
}
// 获取当前元素滚动位置（默认元素为 window）
function getScrollPosition(el = window) {
  return {
    top: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    left: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
  };
}

//闭包版本（事件嵌套时可能失效）
// function throttle(delay, callback) {
//     //利用闭包原理使 prev 不会每次调用都是新的
//     let prev = Date.now();
//     return function () {
//         if (Date.now() - prev >= delay) {
//             callback.apply(this, arguments);
//             prev = Date.now();
//         }
//     };
// }

export {
  findClose,
  throttle,
  debounce,
  getScrollTop,
  scrollTo,
  random,
  getScrollPosition,
};
