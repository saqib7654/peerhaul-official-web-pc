<template>
    <Space size="middle">
        <div
            v-for="item in options"
            :key="item[fieldNames.key]"
            :class="{
                'custom-tab': true,
                'custom-tab-active': item[fieldNames.key] === selected
            }"
            @click="handleSelect(item[fieldNames.key], item[fieldNames.label])"
        >
            {{ item[fieldNames.label] }}
        </div>
    </Space>
</template>

<script lang="ts" setup>
import { Space } from 'ant-design-vue'

export type TabsProps = {
    options?: any[]
    selected?: string
    fieldNames?: { key: string; label: string }
}

withDefaults(defineProps<TabsProps>(), {
    option: () => [],
    selected: '',
    fieldNames: () => {
        return {
            key: 'key',
            label: 'label'
        }
    }
})

const emit = defineEmits<{
    (e: 'update:selected', key: string): void
    (e: 'select', key: string, title: string): void
}>()

const handleSelect = (key: string, title: string) => {
    emit('select', key, title)
    emit('update:selected', key)
}
</script>

<style scoped lang="scss">
.custom-tab {
    padding: 0 16px;
    border-radius: 24px;
    border: 1px solid #fff;
    line-height: 36px;
    cursor: pointer;
    font-size: 15px;
    white-space: nowrap;

    &:hover,
    &.custom-tab-active {
        background: #fff;
        color: $info-color;
    }
}

.custom-tabs {
    display: flex;
    flex-flow: row nowrap;
    background-color: #f5f5f5;
    width: 100%;
    overflow-x: auto;

    .custom-tab {
        width: 148px;
        height: 54px;
        line-height: 54px;
        font-family: PingFangSCMedium-Medium;
        font-size: 20px;
        font-weight: normal;
        letter-spacing: 0em;
        flex: none;

        /* 中 */
        color: #777777;
        text-align: center;
        cursor: pointer;
    }

    .custom-tab-active {
        border-radius: 8px 8px 0px 0px;
        /* 深 */
        color: #333333;
        background-color: #ffffff;
    }
}
</style>
