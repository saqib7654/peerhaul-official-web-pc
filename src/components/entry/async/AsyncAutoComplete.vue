<template>
    <AutoComplete
        class="async-auto-complete"
        :value="value"
        @update:value="val => 
            $emit('update:value', val as string)"
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
        <template v-for="(_, name) in $slots" v-slot:[name]>
            <slot :name="name"></slot>
        </template>
    </AutoComplete>
</template>

<script lang="ts" setup>
import { AutoComplete } from 'ant-design-vue'
import { useAsyncState } from '@vueuse/core'
import { debounce } from 'lodash-es'

import type { AutoCompleteProps } from 'ant-design-vue'

export type AsyncAutoCompleteProps = {
    value?: string | string[]
    asyncFn?: (val: string) => Promise<AutoCompleteProps['options']>
    fieldNames?: AutoCompleteProps['fieldNames']
    immediate?: boolean
    'onUpdate:value': (val: string) => void
}

const props = withDefaults(defineProps<AsyncAutoCompleteProps>(), {
    immediate: false
})

defineEmits<{
    (e: 'update:value', val: string | string[]): void
}>()

let lastFetchId = 0
const { state: list, execute: updateList } = useAsyncState<
    AutoCompleteProps['options'],
    [val?: string]
>(
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
