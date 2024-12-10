<template>
    <div class="pb-22">
        <div
            v-if="title"
            :class="`font-size-6 font-bold text-center mb-16 ${alignClass}`"
        >
            <div
                :class="{ 'cursor-pointer': clickable }"
                @click="clickable && $emit('title')"
            >
                {{ title }}
            </div>
            <slot name="extra"></slot>
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
type PropsType = {
    title?: string
    align?: 'center' | 'between'
    clickable?: boolean
}
const props = withDefaults(defineProps<PropsType>(), {
    title: undefined,
    align: 'center'
})

const emit = defineEmits<{
    (e: 'title'): void
}>()

const alignClass = computed(() => {
    switch (props.align) {
        case 'center':
            return 'flex-x-center'
        case 'between':
            return 'flex-x-between'
    }
})
</script>
