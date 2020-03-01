var APP = {
    "name": "{{env('APP_NAME')}}",
    "url": "{{env('APP_URL')}}"
 }

let state = {
    SPA_Title: process.env.MIX_APP_NAME
    // blogs: [],
    // categories: []
}

export default state
