<template>
  <Modal title="Oversize Items" v-model:visible="modal.visible">
    <div>You as the sender are responsible for providing loadingassistance at departure and unloading assistance atarrival
      for any single item with a weight in excess of 22kg 50lb, and for oversize items (>4 feet in length), unlessthe
      driver agrees otherwise.</div>
    <div class="m-y-8">-One physically fit person is recommended for every22kg / 50lb of item weight.</div>
    <div>-lf the driver refuses pick-up, the pickup fee (see FareStructure FAQ) will be forfeited to the driver if
      assistanceis not available at the arranged time for items over 22kg50lb.</div>
    <template #footer></template>
  </Modal>
</template>
<script setup lang="ts">
import Modal from '@/components/Modal.vue';

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'update:visible', val: boolean): void
}>()
type AirModalProps = {
  visible: boolean,
}

withDefaults(defineProps<{ modal: AirModalProps }>(), {
  modal: () => {
    return {
      visible: false
    }
  }
})

</script>
<style scoped lang="scss"></style>