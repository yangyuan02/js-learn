/*
 * @Author: yangyuan
 * @Date: 2020-04-23 10:33:47
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-23 11:11:42
 * @Description:
 */
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
