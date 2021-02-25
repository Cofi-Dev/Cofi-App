export default {
    path: 'plugins',
    component: () => import('@/views/Dashboard/Plugins/Plugins.vue'),
    children: [
        {
            path: '',
            name: 'plugins',
            component: () => import('@/views/Dashboard/Plugins/Plugins.vue'),
            meta: {
                title: 'Plugins'
            }
        }
    ]
}
