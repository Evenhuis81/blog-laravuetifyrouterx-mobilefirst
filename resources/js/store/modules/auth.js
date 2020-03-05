export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data
        }
    },
    actions: {
        signIn({ dispatch }, credentials) {
            // let response = await axios.post("api/auth/signin", credentials);
            // dispatch('attempt', response.data.token);
            axios.post("api/auth/signin", credentials).then(response => dispatch('attempt', response.data.token))
        },
        attempt({ commit }, token) {
            commit('SET_TOKEN', token);

            axios.get('api/auth/me', {
                headers: {
                    'Authorization': 'Bearer' + token
                }
            }).then(response => commit('SET_USER', response.data))
                .catch(e => {
                    console.log(e)
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                })

            // try {
            //     let response = await axios.get('api/auth/me', {
            //         headers: {
            //             'Authorization': 'Bearer' + token
            //         }
            //     })
            //     commit('SET_USER', response.data)
            // } catch (e) {
            //     commit('SET_TOKEN', null)
            //     commit('SET_USER', null)
            // }
        }
    }
}