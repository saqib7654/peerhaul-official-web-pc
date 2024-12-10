import router from '@/router'
import userStore from './store/userStore'
import useRouteStore from './store/routeStore'
const whiteList = ['/login']

router.beforeEach(async (to, _, next) => {
    const user = userStore()
    if (user.isRouteGenerate) {
        next()
    } else {
        const routeStore = useRouteStore()
        const generateRoutes = routeStore.generateRoutes()
        generateRoutes.forEach(route => {
            router.addRoute('Layout', route)
        })
        router.addRoute({
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/view/notFound.vue')
        })
        user.isRouteGenerate = true
        next({ ...to }  )
    }
})
