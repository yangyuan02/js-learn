/*
 * @Author: yangyuan
 * @Date: 2019-10-11 20:22:33
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-11 20:22:33
 * @Description: 
 */
function traversal(node) {
  if (node && node.nodeType === 1) {
    console.log(node.tagName);
  }
  var i = 0,
    childNodes = node.childNodes,
    item;
  for (; i < childNodes.length; i++) {
    item = childNodes[i];
    if (item.nodeType === 1) {
      traversal(item);
    }
  }
}
