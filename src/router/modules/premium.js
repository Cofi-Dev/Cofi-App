export default {
    path: 'premium',
    component: () => import('@/views/Dashboard/Premium/Premium.vue'),
    children: [
        {
            path: '',
            name: 'premium',
            component: () => import('@/views/Dashboard/Premium/Premium.vue'),
            meta: {
                title: 'Premium'
            }
        }
    ]
}
