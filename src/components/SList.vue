<template>
  <AList :data-source="dataSource" :loading="loading">
    <template #loadMore>
      <div class="text-center m-t-4">
        <span v-if="finished && (dataSource?.length || 0) > 0 && showEnd"></span>
        <AButton :loading="loading" v-else-if="!finished" @click="$emit('load')"
          >loading more</AButton
        >
      </div>
    </template>
    <template #renderItem="{ item }">
      <AListItem v-if="wrap">
        <slot name="renderItem" :item="item"></slot>
      </AListItem>
      <slot v-else name="renderItem" :item="item"></slot>
    </template>
  </AList>
</template>

<script lang="ts" setup>
import type { ListProps } from 'ant-design-vue';

withDefaults(
  defineProps<
    Partial<{
      dataSource: ListProps["dataSource"];
      finished: boolean;
      loading: boolean;
      wrap: boolean;
      showEnd: boolean;
    }>
  >(),
  {
    wrap: true,
    showEnd: true,
  }
);

const emit = defineEmits<{
  (e: "load"): void;
}>();
</script>
