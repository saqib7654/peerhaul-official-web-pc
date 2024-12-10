<template>
    <Space :align="align">
        <div class="label" :style="labelStyle">{{ `${label}${colon ? ':' : ''}` }}</div>
        <slot></slot>
    </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';

import type { StyleValue } from 'vue'
import type { SpaceProps } from 'ant-design-vue';

type LabelInfoProps = {
    label?: string
    colon?: boolean
    labelStyle?: StyleValue
    align?: SpaceProps['align']
}

withDefaults(defineProps<LabelInfoProps>(), {
    label: '',
    colon: true
})
</script>

<style scoped>
.label {
    color: #777777;
}
</style>