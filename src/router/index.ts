import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import other from './modules/other'

const router = createRouter({
    history: createWebHistory(
        (import.meta.env.VITE_APP_BASEURL as string) || '/'
    ),
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: () => import('@/layout/index.vue'),
            redirect: {
                name: 'Home'
            },
            children: routes
        },
        {
            path: '/account',
            name: 'Account',
            component: () => import('@/view/login/index.vue'),
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () =>
                        import('@/view/login/components/LoginForm.vue')
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: () =>
                        import('@/view/login/components/RegisterForm.vue')
                },
                {
                    path: 'forget',
                    name: 'Forget',
                    component: () =>
                        import('@/view/login/components/ForgetForm.vue')
                }
            ]
        },
        {
            path: '/bindSuccess',
            name: 'BindSuccess',
            component: () => import('@/view/bindSuccess.vue')
        },
        other,
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/view/notFound.vue')
        }
    ]
})

export default router
