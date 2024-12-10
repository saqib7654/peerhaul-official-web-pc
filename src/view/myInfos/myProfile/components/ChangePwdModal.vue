<template>
    <Modal
        :title="modal.title"
        v-model:visible="modal.visible"
        :border="false"
        width="600px"
    >
        <Form
            ref="formRef"
            :model="formData"
            :rules="rules"
            layout="vertical"
            hideRequiredMark
        >
            <FormItem name="oldPassword">
                <InputPassword
                    placeholder="Old Password"
                    size="large"
                    v-model:value="formData.oldPassword"
                    autocomplete="new-password"
                />
            </FormItem>
            <FormItem name="newPassword">
                <InputPassword
                    placeholder="New Password"
                    size="large"
                    v-model:value="formData.newPassword"
                    autocomplete="new-password"
                />
            </FormItem>
            <FormItem name="newAgainPwd">
                <InputPassword
                    placeholder="Confirm New Password"
                    size="large"
                    v-model:value="formData.newAgainPwd"
                    autocomplete="new-password"
                />
            </FormItem>
        </Form>
        <template #footer>
            <div class="mt-3 text-center w-full">
                <Button type="primary" size="large" @click="handleConfirm"
                    >Change Password</Button
                >
            </div>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button, Form, FormItem, InputPassword, message } from 'ant-design-vue'

import Modal from '@/components/Modal.vue'

// import { validatePass } from '@/utils/utils'

import { updatePwdOnlineApi } from '@/api/login'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
    (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
    visible: boolean
    title?: string
    record?: any
}

withDefaults(defineProps<{ modal: ModalProps }>(), {
    modal: () => {
        return {
            visible: false,
            record: undefined
        }
    }
})

const btnLoading = ref(false)
const formData = reactive({
    oldPassword: '',
    newPassword: '',
    newAgainPwd: ''
})
const formRef = ref()
const confirmPwd = (_rule: any, value: string) => {
    if (!value) {
        return Promise.reject(new Error('confirm new password is required.'))
    } else if (value !== formData.newPassword) {
        return Promise.reject(
            new Error('Confirm new password must be equal to new password.')
        )
    }
    return Promise.resolve()
}
const rules: any = {
    oldPassword: [
        { required: true, message: 'oldPassword is required.', trigger: 'blur' }
    ],
    // newPassword: [{ required: true, message: 'new password is required.', trigger: 'blur' }, { validator: validatePass, trigger: 'blur' }],
    newPassword: [
        {
            required: true,
            message: 'new password is required.',
            trigger: 'blur'
        }
    ],
    newAgainPwd: [{ validator: confirmPwd, trigger: 'blur' }]
}
const handleConfirm = async () => {
    btnLoading.value = true
    try {
        await formRef.value.validate()
        const { newAgainPwd: _, ...params } = formData
        const [err, res] = await updatePwdOnlineApi(params)
        if (err === null && res.code === 200) {
            message.success('Change password successfull')
            emit('confirm')
        }
    } catch (err) {
        console.log(err)
    } finally {
        btnLoading.value = false
    }
}
</script>
<style scoped lang="scss">
:deep(input::-webkit-input-placeholder) {
    font-size: 14px;
}
</style>
