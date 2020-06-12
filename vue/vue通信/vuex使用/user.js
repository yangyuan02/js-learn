const state = {
    name: "",
};

const getters = {
    getUserNmae: (state) => state.name,
};

const mutations = {
    SET_USER(state, plylaod) {
        state.name = plylaod.name;
    },
};

const actions = {
    setUser({ commit }, data) {
        commit("SET_USER", data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
