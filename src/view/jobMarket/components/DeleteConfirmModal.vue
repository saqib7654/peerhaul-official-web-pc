<template>
  <Modal :title="title" v-model:visible="modal.visible">
    <div>
      <div v-if="step === 1" class="font-size-4 line-height-snug">
        This job has already been assigned to a driver. Are yousure you want to cancel this job and your commitment
        tothe driver? lt is recommended that you first attempt tomake alternate arrangements with your driver. lf you
        dochoose to cancel, you will still be charged for the PickupFee + Service Fee.
      </div>
      <div v-else>
        Are you sure you want to delete this listing? This action cannot be reversed.
      </div>
    </div>
    <template #footer>
      <div class="mt-8 text-center"><Button type="primary" :loading="loading" @click="handleConfirm">{{ btnText
      }}</Button></div>
    </template>

  </Modal>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, message } from 'ant-design-vue';
import Modal from '@/components/Modal.vue';

import { deleteJobApi } from '@/api/job'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'update:visible', val: boolean): void
}>()
type AirModalProps = {
  visible: boolean,
  record?: any
}

const props = withDefaults(defineProps<{ modal: AirModalProps }>(), {
  modal: () => {
    return {
      visible: false
    }
  }
})
const step = ref(1)
const title = computed(() => {
  switch (step.value) {
    case 1:
      return 'Cancel Job & Delete Listing'
    case 2:
      return 'Delete Listing'
  }
})
const btnText = computed(() => {
  switch (step.value) {
    case 1:
      return 'Confirm'
    case 2:
      return 'Delete Listing'
  }
})

const loading = ref(false)
const deleteFun = async () => {
  loading.value = true
  try {
    const [err, res] = await deleteJobApi({ uid: props.modal.record })
    if (err === null && res.code === 200) {
      message.success('Submit Success')
      emit('confirm')
    }
  } finally { loading.value = false }
}
const handleConfirm = () => {
  if (step.value < 2) {
    step.value += 1
  } else {
    deleteFun()
  }
}
</script>
<style scoped lang="scss"></style>