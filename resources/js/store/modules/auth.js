export default {
    namespaced: true,
    state: {
        signedInDialog: false,
        loggedInSnackbar: false,
        loginLoading: false,
        registerLoading: false,
        token: null,
        user: null
    },
    mutations: {
        open_signedin_dialog(state) {
            state.signedInDialog = true
        },
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
        },
        close_signedin_dialog(state) {
            state.signedInDialog = false;
        }

    },
    actions: {
        closeSignedInDialog({ commit }) {
            commit("close_signedin_dialog")
        },
        openSignedInDialog({ commit }) {
            commit("open_signedin_dialog");
        },
        setLoginLoading({ commit }) {
            commit('set_log_load');
        },
        signIn({ dispatch }, credentials) {
            axios.post("api/auth/signin", credentials).then(response => dispatch('attempt', response.data.token))
        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('set_token', token);
            }
            if (!state.token) {
                return;
            }

            try {
                // console.log('await')
                let response = await axios.get('api/auth/me')
                // console.log('await')
                commit('set_user', response.data)
            } catch (e) {
                commit('set_token', null)
                commit('set_user', null)
            }
            // axios.get('api/auth/me')
            //     .then(response => {
            //         commit('set_user', response.data)
            //         commit('deset_log_load')
            // only show dialog when firstly signed in
            // commit("open_signedin_dialog")
            // console.log(response)
            // })
            // .catch(e => {
            // console.log(e)
            //     commit('set_token', null)
            //     commit('set_user', null)
            //     commit('deset_log_load')
            // })
        },
        signOut({ commit }) {
            return axios.post('api/auth/signout').then(() => {
                commit('set_token', null)
                commit('set_user', null)
            })
        }
    },
    getters: {
        signedInDialog(state) {
            return state.signedInDialog;
        },
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