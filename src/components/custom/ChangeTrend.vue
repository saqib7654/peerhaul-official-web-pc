<template>
    <SvgIcon v-if="trend" :style="{ color: trend === 'up' ? '#1B9F43' : '#E22222' }"
        :icon-class="trend === 'up' ? 'uparrow' : 'downarrow'" />
</template>

<script lang='ts' setup>
import SvgIcon from '../SvgIcon.vue';

type ChangeTrendProps = {
    trend?: 'up' | 'down'
}

defineProps<ChangeTrendProps>()
</script>