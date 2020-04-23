/*
 * @Author: yangyuan
 * @Date: 2020-04-23 10:33:47
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-23 10:48:39
 * @Description:
 */
/***********************************1..stop修饰符/************************************/
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
