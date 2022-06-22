var config = [
  {
      "width": 400,
      "top": 20,
      "left": 50,
      "opacity": 0.2,
      "zIndex": 2
  },//0
  {
      "width": 600,
      "top": 70,
      "left": 0,
      "opacity": 0.8,
      "zIndex": 3
  },//1
  {
      "width": 800,
      "top": 120,
      "left": 200,
      "opacity": 1,
      "zIndex": 4
  },//2
  {
      "width": 600,
      "top": 70,
      "left": 600,
      "opacity": 0.8,
      "zIndex": 3
  },//3
  {
      "width": 400,
      "top": 20,
      "left": 750,
      "opacity": 0.2,
      "zIndex": 2
  }//4
];

// 1. 获取页面中的标签对象
var wrap = document.getElementById('wrap')
var slide = document.getElementById('slide')
var lis = document.querySelectorAll('#slide ul li')
var arrow = document.getElementById('arrow')
var btnPrev = document.querySelector('#arrow .prev')
var btnNext = document.querySelector('#arrow .next')

// 2. 一打开页面，就让每个li标签拥有自己的样式
// animate(box, {
//   width: 300,
//   height: 500,
//   left: 600,
//   zIndex:10
// })

animate(lis[0],config[0])
