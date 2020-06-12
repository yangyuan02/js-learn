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

export default {
    state,
    getters,
    mutations,
};
