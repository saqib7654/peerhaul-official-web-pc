import type { Route } from "@/types/router"
import type { RouteRecordName } from "vue-router"

type MenuItem = {
    label: string
    title: string
    key: string
    icon?: string
    path: string
    isSub: boolean
    auth?: string[]
    children?: MenuItem[]
}

/**
 * 
 * @param routes 路由列表
 * @param level 转换层级
 * @param base 基础路径
 * @returns 
 */
const routesToMenu = (routes: Route[], level = Infinity, base = '') => {
    if (level < 0) return []

    const menu: MenuItem[] = []

    for (const { meta, path, children, name } of routes) {
        if (meta?.title) menu.push({
            label: meta.title,
            title: meta.title,
            key: name as string,
            icon: meta.icon,
            path: `${base}/${path}`,
            isSub: !!(children && !meta.isLeaf),
            auth: meta.auth,
            ...(children ? {
                children: routesToMenu(children, level - 1, `${base}/${path}`)
            } : {}),
        })
    }

    return menu
}

const findRouteByPath = (routes: Route[], path: string): Route | undefined => {
    for (const route of routes) {
        if (route.children) {
            const res = findRouteByPath(route.children, path)

            if (res) return res
        }

        if (route.path.toLowerCase() === path.toLowerCase()) return route
    }
}

const getRouteChildrenByName = (routes: Route[], name: string): Route[] | undefined => {
    for (const route of routes) {
        if (route.name === name) return route.children

        if (route.children) {
            const res = getRouteChildrenByName(route.children, name)

            if (res) return res
        }
    }
}

/**
 * 通过路由名称来获取到父路由的名称
 * @param routes 路由列表
 * @param name 路由名称
 * @returns 
 */
const getParentName = (routes: Route[], name: RouteRecordName, parentName: RouteRecordName = ''): RouteRecordName | undefined => {
    for (const route of routes) {
        if (route.name === name) return parentName

        if (route.children) {
            const res = getParentName(route.children, name, route.name || '')

            if (res !== undefined) return res
        }
    }
}

export { routesToMenu, findRouteByPath, getRouteChildrenByName, getParentName }