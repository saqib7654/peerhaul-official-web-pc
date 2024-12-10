<template>
    <div class="menu-item-container">
        <div class="sub-menu" v-if="item.children && item.children.length > 0">
            <div class="sub-menu-item" :class="{
                'focus': selected === item.key
            }" :style="{ paddingLeft: `${16 * level}px` }"
                @click="() => { isShowChildren = !isShowChildren; handleSelect(item.key) }">
                <CaretRightFilled v-show="!isShowChildren" />
                <CaretDownOutlined v-show="isShowChildren" />
                {{ item.title }}
            </div>
            <MenuItem v-if="isShowChildren" v-for="i in item.children" :level="level + 1" :selected="selected" :item="i"
                @select="handleSelect" />
        </div>
        <div :class="['menu-item', selected === item.key ? 'focus' : '']" :style="{ paddingLeft: `${16 * level + 16}px` }"
            @click="handleSelect(item.key)" v-else>{{
                item.title
            }}</div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { CaretDownOutlined, CaretRightFilled } from '@ant-design/icons-vue'

type MenuItem = {
    title: string
    key: string
    children?: MenuItem[]
}

type MenuItemProps = {
    item: MenuItem
    selected?: string
    level?: number
}

withDefaults(defineProps<MenuItemProps>(), {
    selected: '',
    level: 1
})

const emit = defineEmits<{
    (e: 'select', key: string): void
    (e: 'update:selected', key: string): void
}>()

const isShowChildren = ref(false)

const handleSelect = (key: string) => {
    emit('select', key)
    emit('update:selected', key)
}
</script>

<style scoped lang="scss">
.menu-item-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    .menu-item,
    .sub-menu {
        width: 100%;
        background-color: #FFFFFF;
        cursor: pointer;

        font-family: PingFangSCMedium-Medium;
        font-size: 16px;
        font-weight: normal;
        line-height: 100%;
        letter-spacing: 0em;
    }

    .menu-item,
    .sub-menu-item {
        border-radius: 6px;
        height: 48px;
        line-height: 48px;
    }

    .focus {
        background-color: #000000;
        color: #FFFFFF;
    }

    .placeholder {
        width: 10px;
        height: 10px;
        opacity: 0;
        visibility: hidden;
    }
}
</style>