let actions = {
    createBlog({ commit }, blog) {
        axios.post('/api/blogs', blog)
            .then(res => {
                commit('CREATE_BLOG', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    fetchBlogs({ commit }) {
        axios.get('/api/blogs')
            .then(res => {
                commit('FETCH_BLOGS', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    fetchCategories({ commit }) {
        axios.get('api/categories')
            .then(res => {
                commit('FETCH_CATEGORIES', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    deleteBlog({ commit }, blog) {
        axios.delete(`/api/blogs/${blog.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_BLOG', blog)
            }).catch(err => {
                console.log(err)
            })
    }
}

export default actions
