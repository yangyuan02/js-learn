/*
 * @Author: yangyuan
 * @Date: 2020-04-17 11:27:19
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-15 13:38:56
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

vue.use(Router);

// 全局钩子函数、单个路由钩子函数、组件内钩子函数
export default new Router({
    mode: "hash" | "history" | "Abstract",
    routes: [
        {
            path: "/home", // 访问路径
            name: "home", // 命名路由
            redirect: "/", // 重定向
            meta: "", // 元信息可以保持一些基本附载信息
            component: "", // 应用组件
            beforeEnter(to, from, next) {}, // 单个路由钩子函数
        },
    ],
});

// 全局钩子函数
beforeEach((to, from, next) => {
    // to:router即将进入的路由对象
    // from:当前导航即将离开的路由
    // nexf:function进行管道中的一个钩子,
    // 所有路由进入,出去都会触发此钩子函数
    // to and from are both route objects. must call `next`.
});

afterEach((to, from) => {
    // 跳转后,我们可以做一些操作
});
/**
 * 一般用法
 * router.beforeEach((to, from, next) => {
  if (to.name == 'hdInsuranceLogin' && window.localStorage.getItem('moblie')) {
    //解决登陆后 用户输入登录地址重定向到首页
    next({ path: '/activity/hd/insurance/serverNianJian' });
  }

  if (to.meta.requireLogin) {
    // 页面是否需要登录
    if (window.localStorage.getItem('moblie')) {
      // token是否存在
      next();
    } else {
      next({ path: '/activity' });
    }
  } else {
    // 不需要登录的直接next()
    next();
  }
});

router.afterEach(to => {
  document.title = to.meta.title;
  const bgColor = to.meta.bgColor;
  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
  }
});

 */
// 组件内钩子函数
// beforeRouteEnter+beforeRouteUpdate+beforeRouteLeave ----> to/from/next都有这三个参数

// beforeRouteEnter 进入这个组件路由之前
// beforeRouteLeave 离开这个组件路由
// beforeRouteUpdate 再本路由的下级路由才会切换出发beforeRouteUpdate

// 动态路由、嵌套路由、未完待续

/* vue-router 传参
    字符串
        this.$router.push("home") // home 指的是组件name属性,方式很简单,但无法传递参数
    对象
        想要传递参数主要就是以对象来写,分为两种方式:命名路由,查询参数,下面说下注意实现
        {
            path:'/news',
            name:'news',
            component:News
        }
        组件name命令路由:传递参数需要使用params来传递,这里一定要注意使用params不是query,目标页面接受传递参数时使用params
            跳转:this.$router.push({name:'news',params:{id:123}})
            接受:this.$route.params.id
        
        查询参数:传递参数使用query而且必须配合path来传递而不能使用name,目标页面接受传递参数使用query
            跳转:this.$router.push({path:'/news,query:{id}})
            接受:this.$route.query.id
*/

// 什么是前端路由

// - hash模式
// 这里的 hash 就是指 url 后的 # 号以及后面的字符。比如说 "www.baidu.com/#hashhash" ，其中 "#hashhash" 就是我们期望的 hash 值。
// 由于 hash 值的变化不会导致浏览器像服务器发送请求，而且 hash 的改变会触发 hashchange 事件，浏览器的前进后退也能对其进行控制，所以在
// H5 的 history 模式出现之前，基本都是使用 hash 模式来实现前端路由。

// - history模式
// history 新增了以下几个 API:
// - history.pushState(); // 添加新的状态到历史状态栈
// - history.replaceState(); // 用新的状态代替当前状态
// - history.state // 返回当前状态对象

// history.pushState() 和 history.replaceState() 均接收三个参数（state, title, url）
// - state：合法的 Javascript 对象，可以用在 popstate 事件中
// - title：现在大多浏览器忽略这个参数，可以直接用 null 代替

// Vue Router路由守卫完整的导航解析流程
/*
        1.导航被触发
        2.在失活的组件里调用离开守卫
        3.调用全局的beforeEach守卫
        4.在重用的组件里调用beforeRouteUpdate守卫
        5.在路由配置里调用beforeEnter
        6.解析异步组件
        7.在被激活的组件里调用beforeRouterEnter
        8.调用全局的beforeResolve守卫
        9.导航被确认
        10.调用全局的afterEach钩子
        11.触发dom更新
        12.用创建好的实例调用beforeRouteEnter守卫中传给next的回调函数

*
*/
