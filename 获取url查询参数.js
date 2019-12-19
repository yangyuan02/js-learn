/*
 * @Author: yangyuan
 * @Date: 2019-12-19 14:29:30
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-19 14:34:12
 * @Description:
 */
function getUrlParam() {
  const href = window.location.href;
  const args = href.split('?');
  if (args[0] === href) {
    return '';
  }
  const arr = args[1].split('&');
  const obj = {};
  for (const i = 0; i < arr.length; i++) {
    const arg = arr[i].split('=');
    obj[arg[0]] = arg[1];
  }
  return obj;
}
