<template>
    <Select
        :value="value"
        :options="state"
        :field-names="fieldNames"
        @dropdownVisibleChange="open => open && execute()"
        @update:value="
            val => {
                emit('update:value', val)
            }
        "
    >
        <template #notFoundContent v-if="isLoading">
            <Spin />
        </template>
    </Select>
</template>

<script lang="ts" setup>
import { Select, Spin } from 'ant-design-vue'
import { useAsyncState } from '@vueuse/core'
import type { SelectProps } from 'ant-design-vue'

type Options = SelectProps['options']
type Value = SelectProps['value']
type FieldNames = SelectProps['fieldNames']
type AsyncSelectProps = {
    asyncFn?: () => Promise<Options | undefined>
    immediate?: boolean
    value?: Value
    fieldNames?: FieldNames
}

const props = defineProps<AsyncSelectProps>()

const emit = defineEmits<{
    (e: 'update:value', val: Value): void
}>()

const { state, isLoading, execute } = useAsyncState<Options | undefined>(
    async () => await props.asyncFn?.(),
    [],
    {
        immediate: props.immediate,
        onError() {
            state.value = []
        }
    }
)
</script>
