<template>
    <Modal :title="modal.title" v-model:visible="modal.visible">
        <ASpin :spinning="isSending">
            <div class="modal-con flex-col-center">
                <div class="font-size-6 font-bold mb-8">Verify OTP</div>
                <div class="font-size-4 w-68 text-center mb-10">
                    We have sent an OTP on your number +{{ modal.record }}
                </div>
                <VerifyCode @change="handleChange" />
                <div class="mt-8 text-center">
                    <Button type="primary" @click="verifyConfirm"
                        >Verify</Button
                    >
                </div>
            </div>
        </ASpin>
        <template #footer></template>
    </Modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import Modal from '@/components/Modal.vue'
import VerifyCode from '@/components/VerifyCode.vue'
import { sendMsgApi } from '@/api/member/common'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm', val: string): void
    (e: 'update:visible', val: boolean): void
}>()
type AirModalProps = {
    title: string
    visible: boolean
    record?: any
}

const props = withDefaults(defineProps<{ modal: AirModalProps }>(), {
    modal: () => {
        return {
            title: 'Cell Number Verification',
            visible: false,
            record: undefined
        }
    }
})
const verifyCode = ref('')
const handleChange = (code: string) => {
    console.log(code)
    verifyCode.value = code
}

const { isLoading: isSending, execute: sendMsg } = useAsyncState(
    async () => {
        await sendMsgApi({
            mobilePhone: props.modal?.record,
            type: 'REGISTER'
        })
    },
    null,
    {
        immediate: false
    }
)
watch(
    () => props.modal.visible,
    val => {
        val && sendMsg()
    }
)

const verifyConfirm = () => {
    emit('confirm', verifyCode.value)
}
</script>
<style scoped lang="scss">
.modal-con {
    .code-item {
        width: 56px;
        border-bottom: 1px solid $font-color;
        display: flex;
        justify-content: center;
        align-items: center;

        :deep(.ant-input-number) {
            font-size: 24px;
            text-align: center;
            font-weight: bold;

            input {
                text-align: center;
            }
        }
    }
}
</style>
