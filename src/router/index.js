import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/informacao',
        name: 'Informacao',
        component: () => import(/* webpackChunkName: "about" */ '../views/Informacao.vue')
    },
    {
        path: '/contato',
        name: 'Contato',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contato.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router