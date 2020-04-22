/*
 * @Author: yangyuan
 * @Date: 2020-04-17 11:27:19
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-22 14:17:27
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
    // 所有路由进入,出去都会触发此钩子函数
    // to and from are both route objects. must call `next`.
});

afterEach((to, from) => {
    // 跳转后,我们可以做一些操作
});

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
        组件name命令路由传递参数需要使用params来传递,这里一定要注意使用params不是query,目标页面接受传递参数时使用params
            跳转:this.$router.push({name:'news',params:{id:123}})
            接受:this.$route.params.id
        

*/
