<template>
    <Space direction="vertical">
        <Space v-for="(inputItem, index) in inputList" :key="inputItem.key">
            <Input v-for="(item, key) in inputItem.data" :key="key" :placeholder="item.placeholder"
                v-model:value="item.value" />
            <div class="placeholder" v-if="leastOneline && index === 1"></div>
            <div class="remove-btn" v-else @click="handleRemove(inputItem.key, index)"></div>
        </Space>
        <div class="add-btn" @click="handleAdd"></div>
    </Space>
</template>

<script lang='ts' setup>
import { Space, Input } from 'ant-design-vue';

type InputGroup = Record<string, Partial<{
    value: string
    placeholder: string
}>>

export type InputItem = {
    key: string
    data: InputGroup
}

type MutipleInputProps = Partial<{
    inputList: InputItem[]
    leastOneline: boolean
}>

withDefaults(defineProps<MutipleInputProps>(), {
    inputList: () => [],
    leastOneline: false
})

const emit = defineEmits<{
    (e: 'add', key: string): void
    (e: 'delete', key: string, index: number): void
}>()

let key = 1
const handleAdd = () => {
    emit('add', String(key++))
}

const handleRemove = (key: string, index: number) => {
    emit('delete', key, index)
}
</script>

<style scoped>
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

.placeholder {
    height: 30px;
    width: 30px;
    visibility: hidden;
    opacity: 0;
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