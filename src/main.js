import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Local development
// axios.defaults.baseURL = 'http://127.0.0.1:8000/'

// Production development
axios.defaults.baseURL = 'https://inner-beauty-api.herokuapp.com/'

createApp(App).use(store).use(router, axios).mount('#app')
