<template>
    <Menu
        mode="horizontal"
        :selected-keys="selectedMenuKeys"
        :open-keys="openKeys"
        class="menu-container"
    >
        <!-- triggerSubMenuAction="click" -->
        <!-- <template v-for="sub in routeStore.menus">
            <template v-if="!sub.auth || sub.auth?.includes(permissions)">
                <SubMenu
                    v-if="sub.isSub"
                    :key="`sub-${sub.key}`"
                    :title="sub.title"
                >
                    <template #icon v-if="sub.icon">
                        <SvgIcon :icon-class="sub.icon" />
                    </template>
                    <MenuItem class="Menu_item">{{ sub.title }}</MenuItem>
                    <MenuItem
                        v-if="sub.children"
                        v-for="item in sub.children"
                        :key="item.key"
                        :title="item.title"
                    >
                        <RouterLink :to="item.path">{{
                            item.title
                        }}</RouterLink>
                    </MenuItem>
                </SubMenu>
                <MenuItem v-else :key="sub.key" :title="sub.title">
                    <RouterLink class="font-size-18px" :to="sub.path">{{ sub.title }}</RouterLink>
                    <template #icon v-if="sub.icon">
                        <SvgIcon :icon-class="sub.icon" />
                    </template>
                </MenuItem>
            </template>
        </template> -->
        <MenuItem
            v-for="item in routes.filter(item =>
                item.meta?.auth?.includes(permissions)
            )"
            :key="item.name"
            :title="item.meta?.title"
        >
            <RouterLink class="font-size-18px" :to="{ name: item.name }">{{
                item.meta?.title
            }}</RouterLink>
        </MenuItem>
    </Menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import SvgIcon from '@/components/SvgIcon.vue'
import routes, { redirectNameMap } from '@/router/routes'
import { getParentName } from '@/utils/router'
import { useRoute } from 'vue-router'
import useRouteStore from '@/store/routeStore'
import useUserStore from '@/store/userStore'

console.log(routes)

const routeStore = useRouteStore()
const userStore = useUserStore()

const route = useRoute()
const selectedMenuKeys = computed(() => [
    redirectNameMap[route.name as string] || (route.name as string)
])
const openKeys = computed(() => [
    `sub-${getParentName(routes, route.name || '') as string}` || ''
])
const permissions = computed(() => {
    return userStore.token ? 'login' : 'no-log'
})
</script>

<style scoped lang="scss">
.menu-container {
    background: transparent;
    border-bottom: 0;
    min-width: 230px;
    // 默认效果

    :deep(.ant-menu-item),
    :deep(.ant-menu-submenu) {
        font-family: PingFangSCMedium-Medium;
        font-size: 16px;
        color: #666666;

        &::after {
            display: none;
        }

        .ant-menu-submenu-title {
            .ant-menu-submenu-arrow {
                display: none;
            }
        }

        .icon {
            font-size: 26px;
            vertical-align: middle;
        }
    }

    // 移入效果
    :deep(.ant-menu-item-active),
    :deep(.ant-menu-submenu-active) .ant-menu-submenu-title {
        background-color: rgba(255, 255, 255, 0.24) !important;
        border-radius: 4px !important;

        .ant-menu-title-content,
        .ant-menu-submenu-title {
            color: $primary-color;
        }
    }

    // 激活效果
    :deep(.ant-menu-item-selected),
    :deep(.ant-menu-submenu-selected) {
        color: $primary-color;
        border-radius: 4px !important;
    }
}
</style>
<style lang="scss">
// 子菜单
.ant-menu-submenu-popup {
    background-color: #fff;
    padding: 12px 0;
    box-shadow: 0px 4px 12px 0px rgba(0, 159, 93, 0.16);

    .ant-menu {
        box-shadow: none;

        .Menu_item {
            font-size: 16px;
            color: $font-color;
            font-weight: 700;
        }

        .ant-menu-item {
            text-align: center;
        }

        .ant-menu-item-selected {
            background-color: $light-primary-color;
            color: $font-color;
        }
    }
}
</style>
