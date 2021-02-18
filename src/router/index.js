import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'NaM-Bot'
        }
    },
    {
        path: '/project',
        name: 'project-info',
        component: () => import('../views/Project.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
