<template>
    <div class="switch">
        <div v-for="item in options" @click="handleChange(item.value, item.label)" class="switch-item" :class="{'active-switch-item': selected === item.value}">
            <span>{{ item.label || '' }}</span>
        </div>
        <div class="slider" :style="{
            width: `${ options.length > 0 ? 100 / options.length : 0 }%`,
            left: `${options.length > 0 && selected ? (100 / options.length) * selectedIndex : 0}%`
        }"></div>
    </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'

type SwitchProps = {
    options?: {
        value: string
        label: string
    }[]
    selected?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
    selected: '',
    options: () => []
})

const emit = defineEmits<{
    (e: 'change', value: string, label: string): void
    (e: 'update:selected', value: string): void
}>()

const selectedIndex = computed(() => props.options.findIndex(item => item.value === props.selected))

const handleChange = (value: string, label: string) => {
    emit('change', value, label)
    emit('update:selected', value)
}
</script>

<style scoped lang="scss">
.switch {
    height: 36px;
    overflow: hidden;
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    color: #7c7c7c;

    .switch-item {
        width: 120px;
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
        background-color: #3662EC;
        height: 2px;
        width: 25%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        transition: left .3s ease;
    }
}
</style>