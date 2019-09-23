/*
 * @Author: yangyuan
 * @Date: 2019-09-19 13:59:29
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-19 14:04:50
 * @Description:
 */

// 个性化时间提示
function fromNow(date) {
  var dur = new Date() - new date();
  return (dur < 10 * 1000 && '刚刚') || (dur < 60 * 1000 && '不到一分钟');
}
fromNow('2019-09-11:12:12:12');
