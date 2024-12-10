import type { RouteRecordRaw } from 'vue-router'

type Route = RouteRecordRaw & {
    meta?: {
        title?: string
        icon?: string
        isLeaf?: boolean
        auth?: string[]
    },
    children?: Route[]
}

export type { Route }