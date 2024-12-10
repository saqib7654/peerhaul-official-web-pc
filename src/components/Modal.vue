<template>
    <Modal :open="visible" :footer="null" @cancel="handleCancel" wrap-class-name="custom-modal-wrap" :centered="centered">
        <div class="modal-container">
            <div class="header">
                <slot name="header-left"></slot>
                <div class="title" v-if="title">{{ title }}</div>
                <slot name="header-right"></slot>
            </div>
            <div :class="{ content: true, 'no-border': !border }" :style="{ maxHeight: `${maxContentHeight}px` }">
                <slot></slot>
            </div>
            <slot name="footer"></slot>
            <div class="action" v-if="!$slots.footer">
                <div class="cancel-btn">
                    <Button type="primary" danger @click="handleCancel">{{ cancelText }}</Button>
                </div>
                <div class="confirm-btn">
                    <Button type="primary" :loading="confirmLoading" :disabled="confirmDisabled" @click="handleConfirm">{{
                        confirmText }}</Button>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Button, Modal } from 'ant-design-vue';

type ModalProps = {
    visible?: boolean
    title?: string
    centered?: boolean
    confirmLoading?: boolean
    confirmDisabled?: boolean
    confirmText?: string
    cancelText?: string
    border?: boolean
}

withDefaults(defineProps<ModalProps>(), {
    visible: false,
    centered: true,
    confirmDisabled: false,
    confirmLoading: false,
    cancelText: 'Close',
    confirmText: 'Submit',
    border: true
})

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
    (e: 'update:visible', val: boolean): void
}>()

const maxContentHeight = ref(window.innerHeight * 0.75)

const handleCancel = () => {
    emit('cancel')
    emit('update:visible', false)
}

const handleConfirm = () => {
    emit('confirm')
}
</script>

<style scoped lang="scss">
.modal-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;

    .header {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        .title {
            font-family: PingFangSCBold-Bold;
            font-size: 20px;
            font-weight: 500;
            line-height: 100%;
            text-align: center;
            letter-spacing: 0em;
            color: #091437;
        }
    }

    .content {
        margin: 20px 0;
        overflow: auto;
        width: 100%;
        min-height: 100px;
        border: 2px dashed $primary-color;
        border-radius: 16px;
        padding: 24px;

        &::-webkit-scrollbar {
            display: none;
        }

        &.no-border {
            border: 0;
            padding: 0;
            border-radius: 0;
        }
    }

    .action {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .confirm-btn {
        margin-left: 30px;
    }
}
</style>

<style>
.custom-modal-wrap .ant-modal {
    /* width: auto !important; */
    min-width: 420px !important;
}
</style>