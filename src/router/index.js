import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import DetailsTvShow from '../views/DetailsTvShow.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import EpisodeList from '../views/EpisodeList.vue'
import DetailsEpisode from '../views/DetailsEpisode'
import Profile from '../views/Profile'
import Favorite from '../views/Favorite'

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
    },
    {
        path: '/EpisodeList/:SeasonId',
        name: 'EpisodeList',
        component: EpisodeList,
        props: true
    },
    {
        path: '/DetailsEpisode/:EpisodeId',
        name: 'DetailsEpisode',
        component: DetailsEpisode,
        props: true
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/Favorite',
        name: 'Favorite',
        component: Favorite
    },
]

const router = new VueRouter({
    routes
})

export default router
