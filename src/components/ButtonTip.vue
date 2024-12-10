<template>
  <Tooltip placement="top" :title="title">
    <div :class="`btn-con ${conClass}`">
      <Button :class="btnClass" :type="type" :danger="danger" size="small">
        <template v-if="icon" #icon>
          <SIcon :name="icon" class="font-size-3" />
        </template>
        <slot />
      </Button>
    </div>
  </Tooltip>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { Button, Tooltip } from 'ant-design-vue'

import SIcon from './SIcon.vue'
type PropsType = {
  title: string
  icon?: string
  type?: 'link' | 'primary' | 'default'
  danger?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  type: 'default',
  danger: false
})

const btnClass = computed(() => {
  return props.type === 'primary' && !props.danger ? 'operate-btn' : ''
})
const conClass = computed(() => {
  return props.icon ? 'w-6' : ''
})
</script>
<style scoped lang="scss">
.btn-con {

  .operate-btn {
    @include operate-btn;
  }
}
</style>