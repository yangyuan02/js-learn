(function () {
    const _Vue = null;
    class Store {
        constructor(options) {
            let state = options.state;
            let actions = options.actions;
            let mutations = options.mutations;
            let getters = options.getters;
            this.state = {};
            this.actions = {};
            this.mutations = {};
            this.getters = {};
            // 1.将state 实现数据响应式
            // 借助vue实现数据响应式
            let vm = new _Vue({
                data: {
                    state,
                },
            });
            this.state = vm.state;
            // 2.实现actions
            Object.keys(actions).forEach((fnName) => {
                this.actions[fnName] = (parmas) => {
                    // TODO
                    actions[fnName](this, parmas);
                };
            });
            // 3.mutations
            Object.keys(mutations).forEach((fnName) => {
                this.mutations[fnName] = (parmas) => {
                    // TODO
                    mutations[fnName](this.state, parmas);
                };
            });
            // 4.getters
            Object.keys(getters).forEach((fnName) => {
                Object.defineProperty(this.getters, fnName, {
                    get: () => {
                        return getters[fnName](this.state);
                    },
                });
            });
        }
        // dispath
        dispath = (actionName, params) => {
            this.actions[actionName](params);
        };
        commit = (mutaionName, params) => {
            this.actions[mutaionName](params);
        };
    }
    // Vue.use(Vuex)
    // Vue.use = function(C,options) {b
    //   C.install && C.install(this,options)
    // }
    const install = (Vue, options) => {
        _Vue = Vue;
        init(options);
    };
    function init(options) {
        _Vue.mixin({
            beforeCreate() {
                let vm = this;
                if (vm.$options.store) {
                    vm.$store = vm.$options.store;
                } else {
                    vm.$store = vm.$parent && vm.$parent.$store;
                }
            },
        });
    }
    window.Vue = {
        Store,
        install,
    };
    if (typeof Vue !== "undefined") {
        Vue.use(Vuex);
    }
})();

/* 使用方式
 1.需要依赖vue.js
*/

let Store = Vuex.store;

let state = {
    msg: "good",
};

let actions = {
    updateMsg({ commit }, parmas) {
        commit("updateMsg", params);
    },
};

let mutations = {
    updateMsg(state, params) {
        state.msg = parmas;
    },
};

let getters = {
    randomMsg: (state) => state.msg + "-" + Math.floor(Math.round() * 100),
};

let store = new Store({
    state,
    actions,
    mutations,
    getters,
});

let vm = new Vue({
    el: "#app",
    computed: {
        msg() {
            // return this.$store.state.msg
        },
    },
    store,
});
