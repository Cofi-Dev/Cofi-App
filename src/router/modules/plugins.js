export default {
    path: 'plugins',
    component: () => import('@/views/Dashboard/Plugins.vue'),
    children: [
        {
            path: '',
            name: 'plugins',
            component: () => import('@/views/Dashboard/Plugins.vue'),
            meta: {
                title: 'Plugins'
            }
        }
    ]
}
