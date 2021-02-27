export default {
    path: 'settings',
    component: () => import('@/views/Dashboard/Settings/Settings.vue'),
    children: [
        {
            path: '',
            name: 'settings',
            component: () => import('@/views/Dashboard/Settings/Settings.vue'),
            meta: {
                title: 'Settings'
            }
        }
    ]
}
