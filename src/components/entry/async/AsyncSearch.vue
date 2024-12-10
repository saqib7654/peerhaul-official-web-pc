<template>
    <Select
        class="async-search"
        :value="value"
        @update:value="val => {
            $emit('update:value', val as string)
            $emit('change', list?.find(item => item[fieldNames?.value || 'value'] === val) || {})
    }"
        show-search
        placeholder="请搜索"
        :filter-option="false"
        :field-names="fieldNames"
        :options="list"
        allow-clear
        @dropdown-visible-change="
            val => {
                val && updateList()
            }
        "
        @search="val => debounceUpdateList(0, val)"
    >
        <template #notFoundContent v-if="isLoading">
            <Spin />
        </template>
        <template v-for="(_, name) in $slots" v-slot:[name]>
            <slot :name="name"></slot>
        </template>
    </Select>
</template>

<script lang="ts" setup>
import { Spin, Select } from 'ant-design-vue'
import { useAsyncState } from '@vueuse/core'
import { debounce } from 'lodash-es'

import type { SelectProps } from 'ant-design-vue'

type OptionItem = NonNullable<SelectProps['options']>[number]

export type AsyncSearchProps = {
    value?: string | string[]
    asyncFn?: (val: string) => Promise<SelectProps['options']>
    fieldNames?: SelectProps['fieldNames']
    immediate?: boolean
    'onUpdate:value': (val: string) => void
    onChange?: (record: OptionItem) => void
}

const props = withDefaults(defineProps<AsyncSearchProps>(), {
    immediate: false
})

defineEmits<{
    (e: 'update:value', val: string | string[]): void
    (e: 'change', val: OptionItem): void
}>()

let lastFetchId = 0
const {
    isLoading,
    state: list,
    execute: updateList
} = useAsyncState<SelectProps['options'], [val?: string]>(
    async (val = '') => {
        lastFetchId += 1
        const fetchId = lastFetchId

        const ans = await props.asyncFn?.(val)

        if (fetchId !== lastFetchId) return []

        return ans || []
    },
    [],
    {
        immediate: props.immediate
    }
)
const debounceUpdateList = debounce(updateList, 800)
</script>
