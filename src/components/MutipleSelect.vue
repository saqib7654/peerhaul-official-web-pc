<template>
    <Space direction="vertical">
        <Space v-for="(item, index) in selectList">
            <Select class="select" v-model:value="item.value" :options="item.data" />
            <div class="remove-btn" @click="handleDelete(item.key, index)"></div>
        </Space>
        <div class="add-btn" @click="handleAdd"></div>
    </Space>
</template>

<script lang='ts' setup>
import { Select, Space } from 'ant-design-vue';
import type { SelectProps } from 'ant-design-vue';

type SelectItem = {
    data: SelectProps['options']
    value: string
    key: string
}
export type MutipleSelectProps = {
    selectList?: SelectItem[]
    option?: SelectProps['options']
}

const props = withDefaults(defineProps<MutipleSelectProps>(), {
    selectList: () => [],
    option: () => []
})

const emit = defineEmits<{
    (e: 'add'): void
    (e: 'delete', key: string, index: number): void
    (e: 'update:selectList', val: SelectItem[]): void
}>()

const handleDelete = (key: string, index: number) => {
    emit('delete', key, index)
    emit('update:selectList', props.selectList.filter(item => item.key !== key))
}

let key = 1
const handleAdd = () => {
    emit('add')
    emit('update:selectList', props.selectList.concat({
        data: props.option,
        value: '',
        key: String(key++)
    }))
}

</script>

<style scoped>
.select {
    width: 280px;
}

.remove-btn,
.add-btn {
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: relative;
}

.remove-btn {
    border-color: #E22222;
}

.add-btn {
    border-color: #E6E6E6;
}

.remove-btn::after {
    content: '';
    width: 60%;
    height: 1px;
    background-color: #E22222;
}

.add-btn::before {
    content: '';
    width: 60%;
    height: 1px;
    background-color: #E6E6E6;
    position: absolute;
}

.add-btn::after {
    content: '';
    width: 1px;
    height: 60%;
    background-color: #E6E6E6;
    position: absolute;
}
</style>