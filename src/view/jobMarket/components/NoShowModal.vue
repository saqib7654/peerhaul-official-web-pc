<template>
  <Modal :title="title" v-model:visible="modal.visible">
    <div>
      <div v-if="step === 1" class="font-size-4 line-height-snug">
        Please wait until 1 hour past the deadline to request a refund for driver no-show.
      </div>
      <div v-else-if="step === 2" class="font-size-4 line-height-snug">
        Are you sure you want to cancel this job? If you are unable to make alternate arrangements with your driver,
        confirm below that the driver has failed to pick up the delivery.
      </div>
      <template v-else>
        <div class="font-size-4 line-height-snug mb-8">
          Delivery successfully cancelled. Your full refund will be issued by Square and credited to your payment method
          within 9-14 business days.
        </div>
        <div class="font-size-4 line-height-snug">
          Delivery successfully cancelled. Your full refund will be issued by Square and credited to your payment method
          within 9-14 business days.
        </div>
      </template>
    </div>
    <template #footer>
      <div class="mt-8 text-center"><Button type="primary" @click="handleConfirm">{{ btnText }}</Button></div>
    </template>
  </Modal>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, message } from 'ant-design-vue';
import Modal from '@/components/Modal.vue';

import { driverNoShowApi } from '@/api/job'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
  visible: boolean,
  record?: any
}

const props = withDefaults(defineProps<{ modal: ModalProps }>(), {
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
      return 'Driver No-Show'
    case 2:
      return 'Request Refund: Driver No-Show'
    case 3:
      return 'Delivery successfully cancelled'
  }
})
const btnText = computed(() => {
  switch (step.value) {
    case 1:
      return 'Confirm'
    case 2:
      return 'Cancel & Refund'
    case 3:
      return 'ok'
  }
})

const loading = ref(false)
const deleteFun = async () => {
  loading.value = true
  try {
    const [err, res] = await driverNoShowApi({ uid: props.modal.record })
    if (err === null && res.code === 200) {
      message.success('Submit Success')
      step.value += 1
    }
  } finally { loading.value = false }
}

const handleConfirm = () => {
  if (step.value === 2) {
    deleteFun()
  } else if (step.value >= 3) {
    emit('confirm')
  } else {
    step.value += 1
  }
}

</script>
<style scoped lang="scss"></style>