/*
 * @Author: yangyuan
 * @Date: 2019-10-11 20:04:00
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-11 20:16:29
 * @Description:
 */
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = { ...params, callback };
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
  });
}

//客户端
function show(data) {
  console.log(data);
}

jsonp({
  url: 'http:xxxx/show',
  params: {},
  callback: 'show'
}).then(data => {
  console.log(data);
});

// 服务端
let express = require('express');
app.get('/show', (req, res) => {
  let { callback } = req.query;
  res.send(`${callback}('hello')`);
});
