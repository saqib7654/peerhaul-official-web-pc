<template>
    <Space class="putin-state">
        <div class="state-tip" :style="{ backgroundColor: putInStateMap[Number(state)]?.color }"></div>
        <span class="state-info">
            {{ putInStateMap[Number(state)]?.label }}
        </span>
        <template v-if="brand">
            <span class="split-dot">·</span>
            <span class="brand">{{ brand }}</span>
        </template>
    </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';

type PutInStateProps = {
    state: number | string
    brand?: string
}

withDefaults(defineProps<PutInStateProps>(), {
    state: 0
})

const putInStateMap = [
    {
        label: '未投放',
        color: '#E22222',
    },
    {
        label: '正在投放',
        color: '#3662EC'
    },
    {
        label: '等待结算',
        color: '#1B9F43'
    },
    {
        label: '提交提现',
        color: '#B4B4B4'
    },
    {
        label: '已驳回',
        color: '#E22222'
    }
]
</script>

<style scoped>
.state-tip {
    height: 6px;
    width: 6px;
    border-radius: 50%
}
</style>