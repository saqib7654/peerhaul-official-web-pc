<template>
    <div class="menu-panel-container">
        <div class="header">
            <div class="title">{{ title }}</div>
            <slot name="header-right"></slot>
        </div>
        <div class="neck" v-if="$slots.nick">
            <slot name="nick"></slot>
        </div>
        <div class="content">
            <slot name="content" :menu-list="menu" v-if="$slots.content"></slot>
            <div class="menu" v-else>
                <MenuItem v-for="item in menu" :item="item" @select="handleSelect" v-model:selected="selected" />
            </div>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue';

type MenuItem = {
    title: string
    key: string
    children?: MenuItem[]
}

export type MenuPanelProps = {
    title?: string
    menu?: MenuItem[]
    selected?: string
}

const props = withDefaults(defineProps<MenuPanelProps>(), {
    title: '',
    menu: () => [],
    selected: ''
})

const selected = ref(props.selected)

const emit = defineEmits<{
    (e: 'select', key: string): void
    (e: 'update:selected', key: string): void
}>()

const handleSelect = (key: string) => {
    emit('select', key)
    emit('update:selected', key)
}
</script>

<style scoped lang="scss">
.menu-panel-container {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #FFFFFF;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    overflow: auto;

    .header {
        width: 100%;
        height: 80px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0 22px;
        justify-content: space-between;

        .title {
            font-family: PingFangSCBold-Bold;
            font-size: 20px;
            font-weight: 600;
            line-height: 100%;
            letter-spacing: 0em;

            /* 深 */
            color: #333333;
        }
    }

    .nick {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        width: 100%;
        overflow-y: auto;
        flex: auto;
        height: 0;

        .menu {
            width: 100%;

            &:deep(.ant-tree-treenode) {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .footer {
        width: 100%;
        height: 94px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>