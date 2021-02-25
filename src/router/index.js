import { createRouter, createWebHistory } from 'vue-router'

/* ROUTES */
import plugins from '@/router/modules/plugins'
import rankings from '@/router/modules/rankings'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/',
        name: 'logout',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: 'Logout'
        }
    },
    {
        path: '/dashboard',
        component: () => import('@/views/Router.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/Home.vue')
            },
            plugins,
            rankings
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to?.meta?.title
        ? `NaM Bot- ${to.meta.title}`
        : 'NaM - Dashboard'
    next()
})

export default router
