const state = {
    name: "",
    todo: [],
};

const getters = {
    // getters一般是用于 store 中的 state 中派生出一些状态 例如doneTodos
    getUserNmae: (state) => state.name, // this.$store.getters.getUserNmae ==> getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
    doneTodos: (state) => state.todo.filter((item) => item.done),
    getTodoById: (state) => (id) => {
        // 通过返回一个方法进行传参获取数据/ 在computed使用 ==> this.$store.getters.getTodoById(2)
        return state.todos.find((todo) => todo.id === id);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    },
};

const mutations = {
    // 1必须同步函数 2用mutations改变state一般需要提前在state定义好属性名,不然就得使用使用 Vue.set(obj, 'newProp', 123)或者state.obj = { ...state.obj, newProp: 123 }
    SET_USER(state, plylaod) {
        state.name = plylaod.name;
    },
};

const actions = {
    // Action 可以包含任意异步操作 Action 提交的是 mutation，而不是直接变更状态
    setUser({ commit }, data) {
        commit("SET_USER", data);
    },
    increment(context) {
        // context 中有commit / context.state /context.getters
        context.commit("increment");
    },
    checkout({ commit, state }, products) {
        // 请求后台接口
        // 把当前购物车的物品备份起来
        const savedCartItems = [...state.cart.added];
        // 发出结账请求，然后乐观地清空购物车
        commit(types.CHECKOUT_REQUEST);
        // 购物 API 接受一个成功回调和一个失败回调
        shop.buyProducts(
            products,
            // 成功操作
            () => commit(types.CHECKOUT_SUCCESS),
            // 失败操作
            () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        );
    },
    // Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程
    async actionA({ commit }) {
        commit("gotData", await getData());
    },
    async actionB({ dispatch, commit }) {
        await dispatch("actionA"); // 等待 actionA 完成
        commit("gotOtherData", await getOtherData());
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
