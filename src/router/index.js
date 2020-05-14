import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import DetailsTvShow from '../views/DetailsTvShow.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/DetailsTvShow/:TvShowId',
        name: 'DetailsTvShow',
        component: DetailsTvShow,
		props: true
    }
]

const router = new VueRouter({
    routes
})

export default router
