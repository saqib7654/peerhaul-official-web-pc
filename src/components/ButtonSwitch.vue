<template>
    <div class="switch">
        <div v-for="item in option" @click="handleChange(item.value, item.label)" class="switch-item" :class="{'active-switch-item': selected === item.value}">
            <span>{{ item.label || '' }}</span>
        </div>
        <div class="slider" :style="{
            left: `${option.length > 0 && selected ? (100 / option.length) * selectedIndex : 0}%`
        }"></div>
    </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'

type SwitchProps = {
    option?: {
        value: string
        label: string
    }[]
    selected?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
    selected: '',
    option: () => []
})

const emit = defineEmits<{
    (e: 'change', value: string, label: string): void
    (e: 'update:selected', value: string): void
}>()

const selectedIndex = computed(() => props.option.findIndex(item => item.value === props.selected))

const handleChange = (value: string, label: string) => {
    emit('change', value, label)
    emit('update:selected', value)
}
</script>

<style scoped lang="scss">
.switch {
    height: 36px;
    border-radius: 100px;
    overflow: hidden;
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    color: #7c7c7c;

    .switch-item {
        width: 131px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        transition: color .3s ease;

        span {
            z-index: 3;
        }
    }

    .active-switch-item {
        color: #333333;
    }

    .slider {
        background: rgba(54, 98, 236, 0.08);
        height: 100%;
        width: 131px;
        position: absolute;
        left: 0;
        border-radius: 100px;
        border: 1px solid #3662EC;
        z-index: 1;
        transition: left .3s ease;
    }
}
</style>