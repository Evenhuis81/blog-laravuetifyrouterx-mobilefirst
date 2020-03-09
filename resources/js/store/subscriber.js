import store from './'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/set_token':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token', mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token', mutation.payload)
            }
            break;
    }
})
