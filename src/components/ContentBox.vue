<template>
  <div class="bg-white rounded-2 p-x-4 p-y-6 mb-6">
    <div v-if="title" :class="`p-x-2 pb-6 ${alignClass}`">
      <div class="font-size-4.5">{{ title }}</div>
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
}
const props = withDefaults(defineProps<PropsType>(), {
  title: undefined,
  align: 'center'
})

const alignClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'flex-x-center'
    case 'between':
      return 'flex-x-between'
  }
})
</script> 