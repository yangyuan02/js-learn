// eventBus.js
import Vue from "vue";

// 中央事件总线，用于非父子组件之间通信
export const bus = new Vue();

/** 用法提要
 * 在2个要通信的组件分别引入 import { bus } from "./bus";
 * 触发 bus.$emit('eventName', data)
 * 监听并响应 bus.$on('eventName',data=>{})
 */
// a.js
bus.$on("audio-palyer", (val) => {
    console.log(val);
});

// b.js
bus.$emit("audio-palyer", { age: 1, name: 2 });
