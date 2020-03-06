export default {
    namespaced: true,
    state: {
        loggedInSnackbar: false,
        loginLoading: false,
        registerLoading: false,
        token: null,
        user: null
    },
    mutations: {
        openSnackbar(state) {
            state.loggedInSnackbar = true
        },
        closeSnackbar(state) {
            state.loggedInSnackbar = false
        },
        set_token(state, token) {
            state.token = token;
        },
        set_user(state, data) {
            state.user = data
        },
        set_log_load(state) {
            state.loginLoading = true;
        },
        deset_log_load(state) {
            state.loginLoading = false;
        }
    },
    actions: {
        setLoginLoading({ commit }) {
            commit('set_log_load');
        },
        signIn({ dispatch }, credentials) {
            axios.post("api/auth/signin", credentials).then(response => dispatch('attempt', response.data.token))
        },
        attempt({ commit }, token) {
            commit('set_token', token);

            axios.get('api/auth/me', {
                headers: {
                    'Authorization': 'Bearer' + token
                }
            }).then(response => {
                commit('set_user', response.data)
                commit('deset_log_load')
                commit("openSnackbar")

            })
                .catch(e => {
                    console.log(e)
                    commit('set_token', null)
                    commit('set_user', null)
                    commit('deset_log_load')
                })
        }
    },
    getters: {
        loggedInSnackbar(state) {
            return state.loggedInSnackbar
        },
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user;
        },
        loginLoading: state => {
            return state.loginLoading;
        },
        registerLoading: state => {
            return state.registerLoading;
        }
    }
}