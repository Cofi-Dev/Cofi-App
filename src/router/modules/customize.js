export default {
    path: 'customize',
    component: () => import('@/views/Dashboard/Customize/Customize.vue'),
    children: [
        {
            path: '',
            name: 'customize',
            component: () => import('@/views/Dashboard/Customize/Customize.vue'),
            meta: {
                title: 'Customize'
            }
        }
    ]
}
