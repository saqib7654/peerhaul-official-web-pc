import { defineStore } from 'pinia'
import type { MemberMemberLoginResponse as LoginRes } from '@/api/index'

import type { Route } from '@/types/router'
import routeStore from './routeStore'

import { getCurrentMemberInfoApi } from '@/api/user'
import type { MemberMemberGetCurrentMemberInfoResponse as UserInfoRes } from '@/api/index'

const userStore = defineStore('user_info', {
    state: () => {
        return {
            token: '',
            userInfo: <UserInfoRes>{},
            isRouteGenerate: false,
            menuList: <Route[]>[]
        }
    },
    getters: {
        permissions: state => state.menuList || []
    },
    actions: {
        setToken(info: LoginRes) {
            const store = routeStore()
            this.token = info.token || ''
            this.isRouteGenerate = false
            this.menuList = store.generateRoutes()
        },
        async getUserInfo() {
            return new Promise((resole, reject) => {
                getCurrentMemberInfoApi({})
                    .then(([err, res]) => {
                        if (err === null && res.code === 200) {
                            this.userInfo = res.data
                            resole(res)
                        } else {
                            reject()
                        }
                    })
                    .catch(e => {
                        reject(e)
                    })
            })
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: ['token', 'userInfo', 'menuList']
            }
        ]
    }
})

export default userStore
