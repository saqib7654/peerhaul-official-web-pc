<template>
    <Modal :title="modal.title" v-model:visible="modal.visible" :border="false">
        <Form layout="vertical" class="form-container">
            <FormItem v-bind="validateInfos.id">
                <Rate v-model:value="formData.score" />
            </FormItem>
            <FormItem v-bind="validateInfos.name">
                <Textarea
                    v-model:value="formData.evaluateDesc"
                    placeholder="Type your review here"
                    :rows="5"
                />
            </FormItem>
        </Form>
        <template #footer>
            <div class="text-center">
                <Button
                    type="primary"
                    :loading="isReviewing"
                    @click="handleConfirm()"
                    >Submit Review</Button
                >
            </div>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { Form, FormItem, Button, Rate, Textarea, message } from 'ant-design-vue'
import Modal from '@/components/Modal.vue'
import { reviewApi } from '@/api/member/job'
import type { MemberJobReviewRequest as ReviewReq } from '@/api'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
    (e: 'update:visible', val: boolean): void
}>()
type AirModalProps = {
    title: string
    visible: boolean
    jobUid?: string
    jobStatus?: string
}

const props = withDefaults(defineProps<{ modal: AirModalProps }>(), {
    modal: () => ({
        title: '',
        visible: false
    })
})

const useForm = Form.useForm
const formData = ref<ReviewReq>({
    jobUid: props.modal.jobUid || '',
    score: 0
})
const formRules = ref({
    id: [{ required: true, message: 'Please Rate' }],
    name: [{ required: true, message: 'Enter Review.' }]
})
const { validate, validateInfos } = useForm(formData, formRules)

const { execute: handleConfirm, isLoading: isReviewing } = useAsyncState(
    async () => {
        await validate()

        const [, res] = await reviewApi(formData.value)
        if (res?.code === 200) {
            message.success('Review submitted successfully!')
            emit('update:visible', false)
            formData.value = { jobUid: props.modal.jobUid || '', score: 0 }
        }
    },
    null,
    {
        immediate: false
    }
)
</script>
<style scoped lang="scss">
.form-container {
    width: 100%;
}
</style>
