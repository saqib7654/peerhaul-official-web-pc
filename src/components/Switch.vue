<template>
    <div class="switch">
        <div v-for="item in options" @click="handleChange(item.value, item.label)" class="switch-item">
            <span>{{ item.label || '' }}</span>
        </div>
        <div class="slider" :style="{
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
    border-radius: 100px;
    overflow: hidden;
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    border: 1px solid #cccccc;
    color: #7c7c7c;

    .switch-item {
        width: 90px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;

        span {
            z-index: 3;
        }
    }

    .slider {
        background-color: rgba(254, 233, 41, 0.16);
        height: 100%;
        width: 90px;
        position: absolute;
        left: 0;
        border-radius: 100px;
        border: 1px solid #3662EC;
        z-index: 1;
        transition: left .3s ease;
    }
}
</style>