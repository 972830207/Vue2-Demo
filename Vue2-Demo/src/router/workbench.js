const BASENAME = ''
const routes = [{
        path: '/',
        redirect: '/Business',
    },
    {
        path: `${BASENAME}/Login`,
        name: 'Login',
        meta: { title: '登录' },
        component: () => import('@/views/Login/Login.vue')
    },
    {
        path: `${BASENAME}/NoData`,
        name: 'NoData',
        component: () => import('@/components/NoData.vue'),
    },
    {
        path: `${BASENAME}/Business`,
        name: 'Business',
        meta: { title: '商机池' },
        component: () => import('@/views/Home.vue'),
        children:[
            {
                path: `${BASENAME}BusinessDetails`,
                name: 'BusinessDetails',
                meta: { title: '详情' },
                component: () => import('@/views/Business/BusinessDetails.vue'),
            },
        ]
    },
]

export default routes