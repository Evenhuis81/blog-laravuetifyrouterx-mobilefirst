let mutations = {
    CREATE_BLOG(state, blog) {
        state.blogs.unshift(blog)
    },
    FETCH_BLOGS(state, blogs) {
        return state.blogs = blogs
    },
    FETCH_CATEGORIES(state, categories) {
        return state.categories = categories
    },
    DELETE_BLOG(state, blog) {
        let index = state.blogs.findIndex(item => item.id === blog.id)
        state.blogs.splice(index, 1)
    }

}
export default mutations
