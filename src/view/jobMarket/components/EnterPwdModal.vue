<template>
  <Modal :title="modal.title" v-model:visible="modal.visible">
    <div class="flex-col-center">
      <VerifyCode @change="handleChange" />
      <div class="mt-8 text-center"><Button type="primary" @click="handleConfirm">Verify</Button></div>
    </div>
    <template #footer>
    </template>
  </Modal>
</template>
<script setup lang="ts">
import { ref, } from 'vue'
import { Button, message } from 'ant-design-vue';
import Modal from '@/components/Modal.vue';
import VerifyCode from '@/components/VerifyCode.vue';

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
  visible: boolean,
  title: string,
  record?: any
}

withDefaults(defineProps<{ modal: ModalProps }>(), {
  modal: () => {
    return {
      visible: false,
      title: ''
    }
  }
})

const pwdCode = ref('')

const handleChange = (code: string) => {
  console.log(code)

}
const handleConfirm = () => {
  console.log(pwdCode.value)
  message.success('Payment successful')
  message.error('Password error')
  emit('confirm')
}

</script>
<style scoped lang="scss"></style>