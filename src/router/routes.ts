import { Route } from '@/types/router'

const routes: Route[] = [
    {
        name: 'Home',
        path: 'home',
        component: () => import('@/view/home/index.vue'),
        meta: {
            title: 'HOME',
            isLeaf: true,
            auth: ['no-log']
        },
        children: []
    },
    {
        name: 'MyListings',
        path: 'my-listings',
        component: () => import('@/view/myListings/index.vue'),
        meta: {
            title: 'MY LISTINGS',
            isLeaf: true,
            auth: ['login']
        },
        children: []
    },
    {
        name: 'JobMarket',
        path: 'job-market',
        redirect: '/job-market/index',
        // component: () => import('@/view/jobMarket/index.vue'),
        meta: {
            title: 'JOB MARKET',
            isLeaf: true,
            auth: ['login', 'no-log']
        },
        children: [
            {
                name: 'JobMarketIndex',
                path: 'index',
                component: () => import('@/view/jobMarket/index.vue'),
                meta: {
                    title: 'JOB MARKET'
                }
            },
            {
                name: 'JobMarketDetail',
                path: 'detail',
                component: () => import('@/view/jobMarket/detail/index.vue'),
                meta: {
                    title: 'Job Details'
                }
            },
            {
                name: 'DriverProfile',
                path: 'driver-profile',
                component: () => import('@/view/jobMarket/driverProfile.vue'),
                meta: {
                    title: 'Driver Profile'
                }
            },
            {
                name: 'NewListing',
                path: 'new',
                component: () =>
                    import('@/view/jobMarket/newListing/index.vue'),
                meta: {
                    title: 'New Listing'
                }
            },
            {
                name: 'JobSearch',
                path: 'job-search',
                component: () => import('@/view/jobMarket/jobSearch/index.vue'),
                meta: {
                    title: 'Job Search'
                }
            },
            {
                name: 'MyProfile',
                path: 'my-profile',
                component: () => import('@/view/myInfos/myProfile/index.vue'),
                meta: {
                    title: 'My Profile'
                }
            },
            {
                name: 'Payment',
                path: 'payment',
                component: () => import('@/view/myInfos/payment/index.vue'),
                meta: {
                    title: 'Payment'
                }
            },
            {
                name: 'MyTransaction',
                path: 'my-transaction',
                component: () => import('@/view/myInfos/transaction/index.vue'),
                meta: {
                    title: 'My Transactions'
                }
            }
        ]
    },
    {
        name: 'Message',
        path: 'message',
        component: () => import('@/view/chats/index.vue')
    }
]

/** 菜单中不需要选中的内容，重定向到其父叶节点 */
export const redirectNameMap = {
    JobMarketIndex: 'JobMarket'
} as Record<string, string>

export default routes
