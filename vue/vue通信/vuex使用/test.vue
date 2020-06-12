<template>
    <div></div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

// mapMutations 并没有看明白有什么卵用
export default {
    data() {
        return {};
    },
    computed: {
        // name() { // 一.直接使用$store进行绑定到computed上
        //     return this.$store.state.UserStore.name; // vuex具有响应式所以一般放在computed中
        // },
        // ...mapState({
        //     // 二.mapState返回的是对象所以用扩展符号 // UserStore用不用取决于 store.js ==> modules 是否模块化
        //     name: (state) => state.UserStore.name,
        //     age: (state) => state.UserStore.age,
        // }),

        ...mapGetters(["getUserNmae"]), // 模板中{{getUserNmae}}  // user.js ===> getters ===> getUserNmae
        ...mapGetters({
            aliasGetUserNmae: "getUserNmae", // 新的别名 mapGetters 没有受到 store.js ===> modules的影响可以不加UserStore能够方法的到
        }),
    },
    mounted() {
        console.log(this.$store.state.UserStore.name, "state"); // state上面访问  // store.js ===> modules ==> UserStore key访问
        console.log(this.$store.getters.getUserNmae, "getter"); // getters方法访问 //user.js ===> getters ===> getUserNmae
    },
    method: {
        toVuexMutations() {
            this.$store.commit("SET_USER", { name: "yangyuan" }); // SET_USER ===> user.js ===> mutations.SET_USER

            this.$store.commit({
                type: "SET_USER",
                name: "yangyuan",
            }); // 对象的方式提交 // user.js ===> mutations.SET_USER 接受参数方式依然不变
        },
        toVuexActions() {
            this.$store.dispatch("setUser", { name: "yangyuan" });
        },
    },
};
</script>
