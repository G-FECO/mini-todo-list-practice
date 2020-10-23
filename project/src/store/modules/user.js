const state = {
  isLogin: false,
  userId: 1,
  userName: "wally"
};

const mutations = {
  login(state, payload) {
    const { id, user_name } = payload;
    state.isLogin = true;
    state.userId = id;
    state.userName = user_name;
  },
  logout(state) {
    state.isLogin = false;
    state.userId = 0;
    state.userName = null;
  }
};

export default { state, mutations };
