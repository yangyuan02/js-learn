/*
 * @Author: yangyuan
 * @Date: 2019-12-20 13:26:47
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-20 13:31:42
 * @Description:
 */
let sum = 0;
let wite;
for (let i = 1; i < 10; i++) {
  let div = $('<div class="class' + i + '"></div>');
  $('body').append(div);
  for (let j = i; j > 0; j--) {
    sum = j * i;
    wite = j + 'x' + i + '=' + sum;
    div.prepend($('<span style="padding-right:10ox">' + wite + '</span>'));
  }
}
