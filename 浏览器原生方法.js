/*
 * @Author: yangyuan
 * @Date: 2019-10-10 19:46:25
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-10 20:43:17
 * @Description:
 */
// 1.查找节点
document.getElementById('id');

document.getElementsByClassName('class'); // 返回class的对象集合

document.getElementsByTagName('标签名');

document.getElementsByName('name属性值');

document.querySelector('css选择器'); //返回第一个匹配的元素

document.querySelectorAll('css选择器'); //集合

document.documentElement; // 获取页面所有的html标签

document.body; // 获取body标签

// 2.创建节点

document.createElement('元素名'); // 创建新的元素节点

document.createAttribute('属性名'); // 创建新的属性节点

document.createTextNode('文本内容'); // 创建文本节点

document.createDocumentFragment(); // 创建文档片段

// 3.删除节点
parentNode.removeChild('节点'); //删除已有的子节点，返回删除节点

Element.removeAttribute('属性名'); // 删除具有指定的属性名称值

// 4.修改节点
parentNode.replaceChild(newChild, existingChind); // 用新的节点替换父节点中已有的子节点

Element.setAttribute(attributeName); // 设置属性可以修改

Element.setAttribute(attributeName, attributeValue); // 设置属性和值可以修改

// 5.插入节点
parent.appendChild('节点'); // 向父节点的最后一个子节点后追加新的节点

parent.insertBefore(newChild, existingChind); // 向父节点的某个特定的子节点前插入新节点

// 6.查找父级兄弟子节点
document.getElementById('id').childNodes; // 所有子节点集合

document.querySelector('id').parentNode; // 得到父节点

document.querySelector('id').nextSibling; // 下一个兄弟节点

document.querySelector('id').previousSibling; // 上一个兄弟节点

document.getElementById('id').firstChild; // 第一个子节点

document.getElementById('id').lastChild; // 最后一个子节点

document.getElementById('id').hasChildNodes(); // 是否有子节点

document.getElementById('id').textContent; // 获取所有文本

document.getElementById('id').innerText; // 获取所有文本

// 7.获取ele元素 兄弟和上面同样
document.getElementById('id').parentElement; // 元素

// 8.操作class

document.getElementById('id').classList.add('class1,class2'); // 添加class

document.getElementById('id').classList.remove('class'); // 删除class

document.getElementById('id').classList.toggle('class'); // 切换class

document.getElementById('id').classList.contains('class'); // 是否存在class

document.getElementById('id').classList.item(index); // 获取class的索引值

document.getElementById('id').setAttribute('set', 'value'); // 设置属性值

document.getElementById('head').getAttribute('set'); // 获取值

document.getElementById('id').style = 'font-size:14px;height:30px'; // 设置style

// 位置，宽高待完成
