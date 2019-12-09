/*
 * @Author: yangyuan
 * @Date: 2019-12-09 14:59:31
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-12-09 15:37:28
 * @Description:
 */

// https://www.cnblogs.com/xiaosongJiang/p/10854467.html

// 在NodeJS中，中间件主要是指封装所有Http请求细节处理的方法。
// 一次Http请求通常包含很多工作，如记录日志、ip过滤、查询字符串、
// 请求体解析、Cookie处理、权限验证、参数验证、异常处理等，但对于
// Web应用而言，并不希望接触到这么多细节性的处理，因此引入中间件来
// 简化和隔离这些基础设施与业务逻辑之间的细节，让开发者能够关注在业务的开发上，以达到提升开发效率的目的。

// 中间件核心机制实现
// 中间件是从Http请求发起到响应结束过程中的处理方法，
// 通常需要对请求和响应进行处理，因此一个基本的中间件的形式如下：

const middleware = (req, res, next) => {
  // TODO
  next();
};

const middleware1 = (req, res, next) => {
  console.log('middleware1 start');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('middleware2 start');
  next();
};

const middleware3 = (req, res, next) => {
  console.log('middleware3 start');
  next();
};

const midddlwares = [middleware1, middleware2, middleware3];

function run(req, res) {
  const next = () => {
    const middleware = midddlwares.shift();
    if (middleware) {
      middleware(req, res, next);
    }
  };
  next();
}

run();
// 'middleware1 start
// 'middleware2 start
// 'middleware3 start

// 如果中间件中有异步操作，需要在异步操作的流程结束后再调
// 用next()方法，否则中间件不能按顺序执行。改写middleware2中间件：
const middleware2 = (req, res, next) => {
  console.log('middleware2 start');
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  }).then(() => {
    next();
  });
};
// 执行结果与之前一致，不过middleware3会在middleware2异步完成后执行。

// 有些中间件不止需要在业务处理前执行，还需要在业务处理后执行，比如统计时间的日志中间件。
// 在方式一情况下，无法在next()为异步操作时再将当前中间件的其他代码作为回调执行。因此可
// 以将next()方法的后续操作封装成一个Promise对象，中间件内部就可以使用next
// .then()形式完成业务处理结束后的回调。改写run()方法如下
function run(req, res) {
  const next = () => {
    const middleware = midddlwares.shift();
    if (middleware) {
      return Promise.resolve(middleware(req, res, next));
    }
  };
  next();
}

// 中间件的调用方式需改写为
const middleware1 = (req, res, next) => {
  console.log('middleware1 start');
  // 所有的中间件都应返回一个Promise对象
  // Promise.resolve()方法接收中间件返回的Promise对象，供下层中间件异步控制
  return next().then(res => {
    console.log('1', res);
    return 'middleware1 end';
  });
};

const middleware2 = (req, res, next) => {
  console.log('middleware2 start');
  // 所有的中间件都应返回一个Promise对象
  // Promise.resolve()方法接收中间件返回的Promise对象，供下层中间件异步控制
  // console.log("next()",next())
  return next().then(res => {
    console.log('2', res);
    return 'middleware2 end';
  });
};
const middleware3 = (req, res, next) => {
  console.log('middleware3 start');
  return next().then(res => {
    console.log('3', res);
    return 'middleware3 end';
  });
};

const middlewares = [middleware1, middleware2, middleware3];

function run(req, res) {
  const next = () => {
    const middleware = middlewares.shift();
    if (middleware) {
      //   console.log("next",next)
      // 将middleware(req, res, next)包装为Promise对象
      return Promise.resolve(middleware(req, res, next));
    } else {
      return Promise.resolve('结束');
    }
  };
  next();
}
run(); // 模拟一次请求发起

// 'middleware1 start
// 'middleware2 start
// 'middleware3 start
// 3 结束
// 2middleware3 end
// 1middleware2 end

// async await 实现
const middleware1 = async (req, res, next) => {
  console.log('middleware1 start');
  let result = await next();
  console.log('1', result);
};

const middleware2 = async (req, res, next) => {
  console.log('middleware2 start');
  let result = await next();
  console.log('2', result);
  return 'middleware2 end';
};
const middleware3 = async (req, res, next) => {
  console.log('middleware3 start');
  let result = await next();
  console.log('3', result);
  return 'middleware3 end';
};

const middlewares = [middleware1, middleware2, middleware3];

function run(req, res) {
  const next = () => {
    const middleware = middlewares.shift();
    if (middleware) {
      //   console.log("next",next)
      // 将middleware(req, res, next)包装为Promise对象
      return Promise.resolve(middleware(req, res, next));
    } else {
      return Promise.resolve('结束');
    }
  };
  next();
}
run(); // 模拟一次请求发起
