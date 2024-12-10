import { Route } from '@/types/router'
const other: Route = {
    path: '/other',
    name: 'Other',
    component: () => import('@/layout/index.vue'),
    redirect: '/other/support',
    children: [
        {
            name: 'Support',
            path: 'support',
            component: () => import('@/view/other/support/index.vue'),
            meta: {
                title: 'Support & Legal'
            }
        },
        {
            name: 'Terms',
            path: 'terms',
            component: () => import('@/view/other/terms/index.vue'),
            meta: {
                title: 'Terms & Conditions of Service'
            }
        },
        {
            name: 'Privacy',
            path: 'privacy',
            component: () => import('@/view/other/privacy/index.vue'),
            meta: {
                title: 'Privacy Policy'
            }
        },
        {
            name: 'Faq',
            path: 'faq',
            component: () => import('@/view/other/faq/index.vue'),
            meta: {
                title: 'FAQ & Contact Us'
            }
        },
        {
            name: 'Conditions',
            path: 'conditions',
            component: () => import('@/view/other/terms/conditions.vue'),
            meta: {
                title: 'Terms And Conditions'
            }
        },
        {
            name: 'PackagingGuidance',
            path: 'packagingGuidance',
            component: () => import('@/view/other/packagingGuidance/index.vue'),
            meta: {
                title: 'Packaging Guidance'
            }
        },
        {
            name: 'LiabilityInsurance',
            path: 'liabilityInsurance',
            component: () => import('@/view/other/insurance/index.vue'),
            meta: {
                title: 'Liability Insurance'
            }
        }
    ]
}
export default other
