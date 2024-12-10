<template>
    <Modal :title="modal.title === 'Shipping insurance' ? '' : modal.title" v-model:visible="modal.visible">
        <ShippingInsurance v-if="modal.title === 'Shipping insurance'" />
        <PackagingGuidance v-else />
        <template #footer></template>
    </Modal>
</template>
<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import ShippingInsurance from '@/components/custom/ShippingInsurance.vue';
import PackagingGuidance from '@/components/custom/PackagingGuidance.vue';

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'update:visible', val: boolean): void
}>()
type ModalProps = {
    title: string
    visible: boolean
    record?: string
}

withDefaults(defineProps<{ modal: ModalProps }>(), {
    modal: () => {
        return {
            title: '',
            visible: false
        }
    }
})
</script>
<style scoped lang="scss"></style>
