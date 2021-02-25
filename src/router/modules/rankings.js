export default {
    path: 'rankings',
    component: () => import('@/views/Dashboard/Rankings/Rankings.vue'),
    children: [
        {
            path: '',
            name: 'rankings',
            component: () => import('@/views/Dashboard/Rankings/Rankings.vue'),
            meta: {
                title: 'Rankings'
            }
        }
    ]
}
