<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        name() {
            return this.$store.state.UserStore.name; // vuex具有响应式所以一般放在computed中
        },
    },
    mounted() {
        console.log(this.$store.state.UserStore.name, "state"); // state上面访问  // store.js ===> modules ==> UserStore key访问
        console.log(this.$store.getters.getUserNmae, "getter"); // getters方法访问 //user.js ===>getUserNmae
    },
    method: {
        toVuexMutations() {
            this.$store.commit("SET_USER", { name: "yangyuan" }); // SET_USER ===> user.js ===> mutations.SET_USER
        },
    },
};
</script>
