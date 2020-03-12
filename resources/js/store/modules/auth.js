export default {
    namespaced: true,
    state: {
        signedInDialog: false,
        loggedInSnackbar: false,
        loginLoading: false,
        registerLoading: false,
        // initialToken: false,
        token: localStorage.getItem('token'),
        user: null
    },
    mutations: {
        set_fake_user(state) {
            state.token = undefined
        },
        // set_initial_token(state) {
        //     state.initialToken = !state.initialToken
        // },
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
            localStorage.setItem('token', token)
            state.token = token
            // localStorage.setItem('token', token)
        },
        // set_token_out(state) {
        //     state.token = 'out'
        // },
        remove_token() {
            localStorage.removeItem('token');
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
        setFakeUser({ commit }) {
            commit('set_fake_user')
        },
        closeSignedInDialog({ commit }) {
            commit("close_signedin_dialog")
        },
        openSignedInDialog({ commit }) {
            commit("open_signedin_dialog");
        },
        setLoginLoading({ commit }) {
            commit('set_log_load');
        },
        login({ dispatch }, credentials) {
            axios.post("api/auth/login", credentials).then(response => dispatch('verifyToken', response.data.access_token))
        },
        // async attempt({ commit, state }, token) {
        verifyToken({ commit }, token) {
            // console.log(token);
            commit('set_token', token);
            // console.log(token)
            // // return;
            // // set token in localstorage?
            // axios.post('api/auth/me', {}, {
            axios.get('api/auth/me', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                // console.log(response)
                commit('set_user', response.data)
            }).catch(e => {
                console.log(e)
                // commit('remove_token')
                // commit('set_user', null)
            })
            // if (!state.token) {
            //     commit('set_initialToken')
            // commit('set_token', null)
            // commit('set_user', null)
            // return;
            // }

            // try {
            //     let response = axios.post('api/auth/me')
            //     commit('set_user', response.data)
            // } catch (e) {
            //     commit('set_token', null)
            //     commit('set_user', null)
            // }
            // axios.get('api/auth/me')
            //     .then(response => {
            //         commit('set_user', response.data)
            //         // commit('deset_log_load')
            //         // only show dialog when firstly signed in
            //         // commit("open_signedin_dialog")
            //         // console.log(response)
            //     })
            //     .catch(e => {
            //         console.log(e)
            //         commit('set_token', null)
            //         commit('set_user', null)
            //         // commit('deset_log_load')
            //     })
        },
        signOut({ commit }) {
            return axios.post('api/auth/signout').then(() => {
                commit('set_token', null)
                commit('set_user', null)
            })
        }
    },
    getters: {
        unverifiedToken(state) {
            return (state.token && !state.user) ? state.token : false
        },
        signedInDialog(state) {
            return state.signedInDialog;
        },
        loggedInSnackbar(state) {
            return state.loggedInSnackbar
        },
        authenticated(state) {
            // if (state.token === 'unset' && state.user === 'unset') { return 'unset' }
            // else if (!state.token && !state.user) { return 'out' }
            // else return 'in'
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