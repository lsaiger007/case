/**
 * 封装了一个实现缓动动画的函数
 * @param {element} demo
 * @param {object} obj
 * @param {function} fn
 */
function animate(demo, obj, fn) {
  if (demo && demo.timeId) {
    clearInterval(demo.timeId)
  }
  demo.timeId = setInterval(function () {
    var flag = true
    for (var key in obj) {
      // 循环遍历对象，获取对象属性名及目标值
      if (key === 'opacity') {
        // 先获取opacity原来的属性值
        var leader = parseInt(getStyle(demo, key) * 100) || 0 // 1
        var step = (obj[key] * 100 - leader) / 10 // 0.2
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        leader = (leader + step) / 100
        demo.style[key] = leader // 最终赋值的时候，要再除以100
      } else if (key === 'zIndex') {
        // 层级不需要缓动移动
        var leader = obj[key] // 获取此属性的目标值
        demo.style[key] = leader // 直接设置为目标值
      } else {
        var leader = parseInt(getStyle(demo, key)) // 转换成数字
        // var step = (target - leader) / 10
        var step = (obj[key] - leader) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        // console.log(step)
        // var current = leader + step
        leader = leader + step
        // demo.style[attr] = current + 'px'
        demo.style[key] = leader + 'px'
      }

      // if (obj[key] !== current) {
      if (obj[key] !== leader) {
        flag = false
      }
    }

    if (flag) {
      // 就证明所有的属性都到达了目标值，此时可以清除定时器
      clearInterval(demo.timeId)
      // 清除定时器之后，如果有回调函数，则执行回调函数中的代码
      if (typeof fn === 'function') {
        fn()
      }
    }
  }, 20)
}

// attr是attribute 属性的意思
/**
 * 封装了一个获取标签对象样式属性的兼容性的函数
 * @param {element} ele
 * @param {属性} attr
 * @returns
 */
function getStyle(ele, attr) {
  // 能力检测 就是要看当前的浏览器是否支持此标签对象的属性或是方法
  if (ele && ele.currentStyle) {
    return ele.currentStyle[attr]
  } else {
    return window.getComputedStyle(ele, null)[attr]
  }
}
