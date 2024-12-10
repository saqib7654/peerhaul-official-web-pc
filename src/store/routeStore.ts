import { defineStore } from 'pinia'
import asyncRoutes from '@/router/routes'
import { routesToMenu } from '@/utils/router'

import type { Route } from '@/types/router'

import userStore from "./userStore"


const generateRoutesByPermissions = (
  permissions: string,
  routesSource: Route[]
) => {
  if (!permissions) return []
  const DFS = (node: Route[]) => {
    const generateRoutes: Route[] = []

    for (const item of node) {
      if (!(!item.meta?.auth?.length || item.meta.auth.includes(permissions)))
        continue

      if (!item.children || item.children.length === 0 || item.meta?.isLeaf) {
        generateRoutes.push(item)
        continue
      }

      generateRoutes.push({
        ...item,
        children: DFS(item.children)
      })
    }

    return generateRoutes
  }

  return DFS(routesSource)
}

const useRouteStore = defineStore('route', {
  state: () => ({
    routes: <Route[]>[]
  }),
  getters: {
    menus: (state) => routesToMenu(state.routes)
  },
  actions: {
    setRoutes(routes: Route[]) {
      this.routes = routes
    },
    generateRoutes() {
      // const store = userStore()
      // const permissions = store.token ? 'login' : 'no-log'
      // const routes = generateRoutesByPermissions(permissions, asyncRoutes)
      // this.setRoutes(routes)
      // return routes
      this.setRoutes(asyncRoutes)
      return asyncRoutes
    }
  }
})

export default useRouteStore
