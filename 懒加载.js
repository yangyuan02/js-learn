/*
 * @Author: yangyuan
 * @Date: 2019-10-14 14:15:56
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-14 14:25:02
 * @Description:
 */
{
  /* <ul>
  <li><img src="./imgs/default.png" data="./imgs/1.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/2.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/3.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/4.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/5.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/6.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/7.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/8.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/9.png" alt=""></li>
  <li><img src="./imgs/default.png" data="./imgs/10.png" alt=""></li>
</ul> */
}

let imgs = document.querySelectorAll('img');
// 可视区高度
let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function LazyLoad() {
  // 滚动卷去的高度
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < imgs.length; i++) {
    // 图片在可视区冒出的高度
    let x = clientHeight + scrollTop - imgs[i].offsetTop;
    if (x > 0 && x < clientHeight + imgs[i].height) {
      imgs[i].src = imgs[i].getAttribute('data');
    }
  }
}

addEventListener('scroll', LazyLoad);
