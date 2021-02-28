import { createRouter, createWebHistory } from 'vue-router'

/* ROUTES */
import plugins from '@/router/modules/plugins'
import roles from '@/router/modules/roles'
import rankings from '@/router/modules/rankings'
import settings from '@/router/modules/settings'
import customize from '@/router/modules/customize'
import premium from '@/router/modules/premium'

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
            roles,
            rankings,
            settings,
            customize,
            premium
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to?.meta?.title
        ? `Cofi - ${to.meta.title}`
        : 'Cofi - Dashboard'
    next()
})

export default router
