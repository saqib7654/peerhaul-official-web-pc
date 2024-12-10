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
            <FormItem name="fullName">
                <Input
                    placeholder="Please enter name"
                    size="large"
                    v-model:value="formData.fullName"
                />
            </FormItem>
            <FormItem name="email">
                <Input
                    placeholder="Please enter email"
                    size="large"
                    v-model:value="formData.email"
                />
            </FormItem>
            <FormItem name="dateOfBirth">
                <DatePicker
                    v-model:value="formData.dateOfBirth"
                    class="w-full"
                    size="large"
                    format="YYYY/MM/DD"
                    valueFormat="YYYY/MM/DD"
                    placeholder="yyyy/04/04"
                />
            </FormItem>
            <FormItem name="cellPhone">
                <Input
                    placeholder="Please enter contact"
                    size="large"
                    v-model:value="formData.cellPhone"
                />
            </FormItem>
            <FormItem name="address">
                <GoogleInput v-model:location="formData.address" />
            </FormItem>
        </Form>
        <template #footer>
            <div class="mt-3 text-center w-full">
                <Button type="primary" size="large" @click="handleConfirm"
                    >Save</Button
                >
            </div>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    DatePicker,
    message
} from 'ant-design-vue'
import GoogleInput from '@/components/custom/GoogleInput.vue'
import Modal from '@/components/Modal.vue'

import { validateName, validatePhone, validateEmail } from '@/utils/utils'

import { updateMemberInfoApi } from '@/api/user'

import userStore from '@/store/userStore'

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
    fullName: undefined,
    email: undefined,
    dateOfBirth: undefined,
    cellPhone: undefined,
    address: undefined
})
const formRef = ref()
const rules: any = {
    fullName: [{ validator: validateName, trigger: 'change' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
    dateOfBirth: [
        { required: true, message: 'DOB is required.', trigger: 'blur' }
    ],
    cellPhone: [{ validator: validatePhone, trigger: 'blur' }],
    address: [{ required: true, message: 'Enter address.', trigger: 'blur' }]
}
const handleConfirm = async () => {
    btnLoading.value = true
    try {
        await formRef.value.validate()
        const [err, res] = await updateMemberInfoApi(formData as any)
        if (err === null && res.code === 200) {
            message.success('save successfull')
            emit('confirm')
        }
    } catch (err) {
        console.log(err)
    } finally {
        btnLoading.value = false
    }
}
const store = userStore()
const init = () => {
    const { address, cellPhone, email, fullName, dateOfBirth } = store.userInfo
    Object.assign(formData, {
        address,
        cellPhone,
        email,
        fullName,
        dateOfBirth
    })
}
onMounted(() => {
    init()
})
</script>
<style scoped lang="scss">
:deep(input) {
    font-size: 14px
}

:deep(.ant-picker-input input) {
    font-size: 14px;
}
</style>
