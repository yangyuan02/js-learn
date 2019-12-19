/*
 * @Author: yangyuan
 * @Date: 2019-12-19 16:15:35
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-19 16:16:08
 * @Description:
 */
// const a:HTMLDivElement = document.createElement('div')
const box = document.getElementById('box');
function isIcon(target) {
  return target.className.includes('icon');
}

box.onclick = function(e) {
  e.stopPropagation();
  const target = e.target;
  if (isIcon(target)) {
    target.style.border = '1px solid red';
  }
};
const doc = document;
doc.onclick = function(e) {
  const children = box.children;
  for (const i = 0; i < children.length; i++) {
    if (isIcon(children[i])) {
      children[i].style.border = 'none';
    }
  }
};
