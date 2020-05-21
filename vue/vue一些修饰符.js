/*
 * @Author: yangyuan
 * @Date: 2020-04-23 10:33:47
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-21 16:35:00
 * @Description:
 */
/** 
 * 事件修饰符
 *      .stop
        .prevent
        .capture
        .self
        .once
        .passive
    按键修饰符
        :keyup
 * */

/***********************************1.stop修饰符/************************************/
/*
<template>
    <div class="about">
    <div @click="test1">
        <div @click="test2">
        测试
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        methods:{
            test1(){
                    console.log('test1')
                },
            test2(){
                    console.log('test2')
                }
        }
    }
</script>
解释
    每个div都绑定着事件,如果我们点击div,默认是按照冒泡方式触发的,简单的来说是由内而外,
    也就是先打印出test2,然后在test1

<template>
    <div class="about">
    <div @click="test1">
        <div @click.stop="test2">
        测试
        </div>
    </div>
    </div>
</template>
.stop作用
    用stop修饰符,此时打印出test2,由这个结果我们可以看到,这个修饰符的作用就是阻止事件冒泡,
    不让他向外去执行函数，到此为止
*/

/***********************************2.prevent修饰符/************************************/
/* 这个时候我们再来说一下.prevent修饰符，其作用就是阻止组件本来应该发生的事件，转而去执行自己定义的事件
    <template>
        <div class="about">
            <a href="https://www.cnblogs.com/Jacob98/" @click="test2">跳转</a>
        </div>
    </template>

    <script>
        export default {
            methods:{
                test2(){
                console.log('test2')
                }
            }
        }
    </script>
    没有添加.prevent修饰符,点击之后会跳转到网址中的链接中
    <template>
        <div class="about">
            <a href="https://www.cnblogs.com/Jacob98/" @click.prevent="test2">跳转</a>
        </div>
    </template>
    添加了.prevent修饰符,不会跳转到相应的网址中,而是去执行我写的函数
*/

/***********************************3.capture修饰符/************************************/
/*
    .capture修饰符和.stop修饰符相反,.capture修饰符一定要写在外层才能生效,加了.capture修饰符网页会按照
    捕获方式触发,也就是从外向内执行
*/

/***********************************4.once修饰符/************************************/
/**
 * 这个理解起来就更加简单了，加上此修饰符之后相应的函数只能触发一次，无论你点击多少下，函数就只触发一次。
 * 这个有一个用途就是防止用户多次点击造成应用数据错误。比如说用户点击支付按钮，由于客户机器比较卡顿，点击
 * 一下之后没有立即反应就又点了一下，这个时候有可能就会造成多次扣费，降低用户体验。
 */

/***********************************5.self修饰符/************************************/
/**
 * 当前元素自身时触发处理函数时才会触发函数，原理：是根据event.target确定是否当前元素本身，来决定是否触
 * 发的事件/函数
 */

/***********************************6.按键修饰符/************************************/
/**
 * <input v-on:keyup.enter="submit"> 效按键名转换为 kebab-case 来作为修饰符
 * <input v-on:keyup.13="submit">
 */

/***********************************6.async修饰符/************************************/

// 原生的阻止冒泡，阻止默认事件,改变事件流方式
/**
 * 原生阻止冒泡:
 *      w3c:e.stopPropagation()
 *      ie: e.cancelBubble = true
 *
 * 阻止默认事件
 *      w3c:e.preventDefault()
 *      ie:e.returnValue = false
 * 改变事件流方式
 *      dom.addEventLister('click',function(){},false)
 *      当第三个参数设置为true就在捕获过程中执行，反之就在冒泡过程中执行处理函数。
 *
 *      passive Passive Event Listeners是Chrome提出的一个新的浏览器特性：Web开发者通过一个新的属性passive来告诉浏览器，
 *      当前页面内注册的事件监听器内部是否会调用preventDefault函数来阻止事件的默认行为。控制丝滑滑动
 */
