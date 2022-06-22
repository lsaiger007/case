// 05 对象写法 这种写法会丢失construtor，所以要手动加上



// 面向对象版本的tab栏切换
// 如果一个项目的某页面当中，有很多的Tab栏切换，比如163 
// 此时就会有多个tab栏，也就相当于是有多个实例对象
// 因此需要先创建一个构造函数
// 一个tab栏就可以看成是一个实例对象

//1. 定义构造函数 并存储相应的标签对象

//创建构造函数 形参为当前整个元素的选择器
function Tab(selector) {

  //1.1 获取传入选择器元素 并挂载实例对象的属性下
  //1.2 获取传入对象标签
  this.box = document.querySelector(selector)

  //1.3 获取 实例对象box的所有input
  this.buts = this.box.getElementsByTagName('input')

  //1.4 获取 实例对象box的所有div
  this.diVs = this.box.getElementsByTagName('div')

  // 在构造函数当中调用init方法
  this.init()
}


Tab.prototype = {
  //这种写法会丢失construtor，所以要手动加上
  construtor: Tab,
  init: function () {
    // init表示初始化
    // 在这个方法当中，一般是做一些初始化的工作 也就是说那上结一开始就要执行的函数，可以都统一放在这个函数当中
    this.change()
    this.autoPlay()
  },
  change: function () {
    //2.1 循环当前对象属性，给实例对象的每个按钮注册事件
    for (var i = 0; i < this.buts.length; i++) {
      //2.2 给实例对象每一项buts属性添加自定义属性
      this.buts[i].setAttribute('index', i)
      //2.3 存储实例对象this到_this变量中
      var _this = this

      //2.4 给实例对象的每一个按钮注册事件
      this.buts[i].onclick = function () {
        //由实例对象调用update
        //由于这里是事件内，这里this指代事件源
        _this.update(this)
      }
    }
  },
  update: function (btn) {
    //由于是当前对象下调用的方法 这里this指的是当前实例对象
    for (var j = 0; j < this.buts.length; j++) {
      //实例对象的每个按钮移除类
      this.buts[j].classList.remove('current')
      //实例对象的每个div隐藏
      this.diVs[j].style.display = 'none'
    }
    //调用传入进来的this(btn),获取当前被单击的按钮事件源索引
    //当前事件源添加类
    btn.classList.add('current')
    // 获取当前事件源的索引
    var index = btn.getAttribute('index')
    //让实例对象对应的索引显示
    this.diVs[index].style.display = 'block'
  },
  autoPlay: function () {
    //按钮索引
    var index = 0
    //存储实例对象this到_this变量中
    var _this = this

    //定时器的函数当中的this指向的是window对象
    var timeId = setInterval(function () {
      // 当前index小于实例对象buts
      if (index < _this.buts.length - 1) {
        index++

      } else {
        index = 0
      }
      //实例对象调用update(模拟当前对象第[index]个按钮单击)
      _this.update(_this.buts[index])
    }, 1000)
  }

}

