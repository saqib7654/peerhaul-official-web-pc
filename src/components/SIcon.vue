<template>
  <Icon v-bind="$attrs">
    <template #component="svgProps">
      <svg aria-hidden="true" v-bind="svgProps">
        <use :xlink:href="icon"></use>
      </svg>
    </template>
  </Icon>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@ant-design/icons-vue';
type PropsType = {
  name: string
}
const props = withDefaults(defineProps<PropsType>(), {
  name: undefined
})
const icon = computed(() => `#icon-${props.name}`)

</script>