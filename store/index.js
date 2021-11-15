export const state = () => ({
  customer: {},
  company: {},
  profile: "customer",
  requerimients: [],
  loading: true
});

export const mutations = {
  SET_COMPANY_INFO(state, data) {
    state.company = data;
  },
  SET_PROFILE(state, data) {
    state.profile = data;
  },
  SET_REQUERIMIENTS(state, data) {
    state.requerimients = data;
  },
  SET_LOADING(state,value) {
    state.loading = value;
  },
  setPersonalInfo: (state, customer) => {
    state.customer = customer;
  },
  resetStore: state => {
    state.customer = {};
    state.company = {};
    state.profile = "customer";
  },
};

export const actions = {
  setLoading({commit},value) {
    commit('SET_LOADING',value);
  },
  setPersonalInfo: ({ commit }, data) => {
    commit("setPersonalInfo", data);
  },
  setCompanyInfo({ commit }, data) {
    commit("SET_COMPANY_INFO", data);
  },
  setProfile({ commit }, data) {
    commit("SET_PROFILE", data);
  },
  setRequerimients({ commit }, data) {
    commit("SET_REQUERIMIENTS", data);
  },
  resetStore: ({ commit }) => {
    commit("resetStore");
  },
  async logout(vuexContext) {
    try {
      await this.$services.customer.logOut();
      vuexContext.commit("resetStore");
      this.$router.push({
        path: "/login"
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  customer(state) {
    return state.customer || {};
  },
  firstName(state) {
    const customer = state.customer;
    const fullName = customer.fullName || '';
    return fullName.split(/\s+/)[0];
  }
};
