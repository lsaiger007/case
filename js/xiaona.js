//以面向对象的思维，进行功能

(function getSum(win) {



  var xiaona = {


    flag: true, //用来结束循环

    //笑话歇后语
    xH: function (a) {
      var xh = ['炎热的下午，有一根火柴头痒痒，挠啊挠啊，然后着火了。于是他去医院包扎，出来之后变成了棉签',
        '狼、老虎和狮子谁玩游戏一定会被淘汰？狼，因为：桃太郎（淘汰狼）',
        '从前有一个棉花糖去打了球打了很长时间，他说："好累啊，我觉得我整个人都软下来了',
        '有个人长的`像洋葱，走着走着就哭了',
        '三分熟的牛排为什么不和七分熟的打招呼？因为他们不熟啊',
        '从前有个包子走在路上觉得饿了就把自己吃了',
        '一天，公司办公室要盖章，小王却找不到印泥，便问同事：“你知道印泥在哪吗？”同事：“东南亚',
        '谈判时，外商打了个喷嚏，刚好翻译也打了个喷嚏，经理满脸不高兴地说：“不用你翻译，这个我懂',
        '“你知道一个玻璃从二十楼掉了下来代表它想要跟你说什么？”它跟你说晚安。因为，它碎了',
        '有一次我去同学家借宿，他问我要不要被子。我就说能盖住肚脐眼的就行。没想到他从眼镜盒里拿了块眼镜布递给了我。']
      var xhy = ['八仙过海——各显神通',
        '泥菩萨过江——自身难保	',
        '蚕豆开花——黑心	',
        '孔夫子搬家——净是书(输)	',
        '打破砂锅——问到底	',
        ' 和尚打伞——无法(发)无天',
        '虎落平阳——被犬欺	',
        '画蛇添足——多此一举	',
        '箭在弦上——不得不发',
        '井底青蛙——目光短浅	']

      if (a === 3) {//判断输入进来a为xh还是xhy
        return xh[Math.floor(Math.random() * xh.length)]
        //获取一个0~1随机数 * 数组长度 然后向下取整取消小数
      } else if (a === 4) {
        return xhy[Math.floor(Math.random() * xh.length)]
      }
    },

    //选项
    str: '您好，我是您的工作助手小娜~~~~~~\n' +
      '输入"编号"或"关键词"选择功能，当输入"q"或"退出"则退出聊天.\n' +
      '功能如下：比如可以输入数字1--5或关键字"笑话"\n' +
      '1.输入数字计算《求和》\n' +
      '2.获取当前时间《时间》\n' +
      '3.来一个小《笑话》\n' +
      '4.来一个《歇后语》\n' +
      '5.来一个16进制的《颜色》',

    //初始化
    init: function () {
      while (this.flag) {//当前对象的属性 flag
        var type = prompt(this.str)//弹出当前对象的str 固定文本属性

        switch (type) {
          //匹配成功执行case后面代码 遇到break跳出当前结构
          case '求和':
          case '1':
            var numStr = prompt('请输入要求和的数据，比如: 10,20,30')
            //此时输入字符是以字符串格式保存
            //'10,20,30'

            this.sigma(numStr)
            //当前对象的属性里函数计算结果

            break //跳出循环


          case '时间':
          case '2':
            this.getDateString()
            //当前对象的属性里函数计算结果
            break


          case '笑话':
          case '3':

            alert(this.xH(3))
            //当前对象的属性里函数计算结果
            break

          case '歇后语':
          case '4':
            alert(this.xH(4))
            //当前对象的属性里函数计算结果
            break

          case '颜色':
          case '5':
            alert(this.color())
            //当前对象的属性里函数计算结果
            break



          case '退出':
          case 'q':
            this.flag = false //修改死循环结果
            //当前对象的flag属性
            break

          default: alert('小娜还不懂那么多,请重新输入')
          //除了以上的其他输入 都提示 继续下次循环
        }

      }
    },

    //求和模块
    sigma: function (aa) {
      var newAa = aa.split(',')//以，为分割切割成数组
      var sum = 0
      for (var i = 0; i < newAa.length; i++) {
        //循环遍历数组 把每一项都转为数字再相加
        sum += +newAa[i]//+转换为数字
      }
      //输出固定格式返回值
      return alert('你刚才输入的 ' + aa + ' 这些数字之和为:' + sum)
    },

    //颜色模块
    color: function () {
      var sum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
      var newSum = '#'
      for (var i = 0; i < 6; i++) {
        newSum += sum[Math.floor(Math.random() * 16)]
      }
      //获取一个0~1随机数 * 16个数字长度 然后向下取整取消小数
      return newSum
    },

    //时间模块
    getDateString: function () {

      var date = new Date()          //获取时间
      var year = date.getFullYear()  //年
      var month = date.getMonth() + 1//月,并修正月从0开始
      var day = date.getDate()       //日
      var hour = date.getHours()     //小时
      var min = date.getMinutes()    //分钟
      var sec = date.getSeconds()    //秒
      var day01 = date.getDay()        //星期

      //修正时间个位数时没有0
      month = this.patchFormatDate(month)//月
      day = this.patchFormatDate(day)    //日
      hour = this.patchFormatDate(hour)  //小时
      min = this.patchFormatDate(min)    //分钟
      sec = this.patchFormatDate(sec)    //秒
      return alert(year + '-' + month + '-' + day + '  ' + hour + ':' + min + ':' + sec + '  ' + '星期' + day01)
    },

    //时间修正
    patchFormatDate: function (num) {
      return num < 10 ? '0' + num : num
    }

  }

  win.xiaona = xiaona
})(window)
// window对象是浏览器中的顶级对象,在任何作用域中都可以随时来访问
// 对象的属性只会在对应作用域找其他属性



