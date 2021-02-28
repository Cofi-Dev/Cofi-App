export default {
    path: 'roles',
    component: () => import('@/views/Dashboard/Roles/Roles.vue'),
    children: [
        {
            path: '',
            name: 'roles',
            component: () => import('@/views/Dashboard/Roles/Roles.vue'),
            meta: {
                title: 'Roles'
            }
        }
    ]
}
