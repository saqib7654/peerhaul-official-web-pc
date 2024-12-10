<template>
    <Modal
        :title="modal.title"
        v-model:visible="modal.visible"
        :border="false"
        width="700px"
    >
        <div class="font-size-4 payment-container">
            <div>
                <Form
                    ref="formRef"
                    :model="formData"
                    :rules="rules"
                    layout="vertical"
                    hideRequiredMark
                >
                    <div
                        class="bg-text color-#607D8B rounded-2 p-x-8 p-y-7 mb-6"
                    >
                        <FormItem name="cardNumber">
                            <Input
                                v-model:value="formData.cardNumber"
                                :bordered="false"
                                placeholder="0000 0000 0000 0000"
                                :maxlength="19"
                            />
                        </FormItem>
                        <div class="flex-x-between mb-2">
                            <FormItem label="Card Holder" name="fullName">
                                <Input
                                    :bordered="false"
                                    placeholder="XXX XX"
                                    v-model:value="formData.fullName"
                                />
                            </FormItem>
                            <FormItem label="CVV" name="securityCode">
                                <Input
                                    v-model:value="formData.securityCode"
                                    :bordered="false"
                                    placeholder="XXX"
                                />
                            </FormItem>
                        </div>
                        <FormItem label="Valid Thru" name="date">
                            <DatePicker
                                v-model:value="formData.date"
                                picker="month"
                                placeholder="XX XXXX"
                                format="MM YYYY"
                                valueFormat="MM YYYY"
                                :allowClear="false"
                                :bordered="false"
                            />
                        </FormItem>
                    </div>
                    <div class="flex-x-between mb-6">
                        <div>Remember My Card</div>
                        <Switch
                            v-model:checked="remember"
                            checked-children="ON"
                            un-checked-children="OFF"
                        />
                    </div>
                </Form>
            </div>
        </div>
        <template #footer>
            <div class="mt-3 text-center w-full">
                <Button
                    type="primary"
                    size="large"
                    :loading="loading"
                    @click="handleConfirm"
                    >Save Card</Button
                >
            </div>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue'
import {
    Button,
    Switch,
    Form,
    FormItem,
    Input,
    DatePicker,
    message
} from 'ant-design-vue'

import Modal from '@/components/Modal.vue'

import { addCardApi } from '@/api/user'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
    (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
    title: string
    state: number /* 0 新增 1编辑 2查看 */
    visible: boolean
    record?: any
}

withDefaults(defineProps<{ modal: ModalProps }>(), {
    modal: () => {
        return {
            title: '',
            state: 0,
            visible: false,
            record: undefined
        }
    }
})
const remember = ref(true)

const loading = ref(false)
const formRef = ref()
const formData = reactive({
    cardNumber: '',
    firstName: '',
    lastName: '',
    fullName: '',
    securityCode: '',
    date: ''
})
watch(
    () => formData.fullName,
    val => {
        const [lastName = '', firstName = ''] = val.split(' ')
        ;(formData.firstName = firstName), (formData.lastName = lastName)
    }
)
const nameValidator = (_rule: any) => {
    if (!formData.firstName || !formData.lastName) {
        return Promise.reject(new Error('Incorrect formatting.'))
    }
    return Promise.resolve()
}
const rules: any = {
    cardNumber: [
        { required: true, message: 'Card Number is required.', trigger: 'blur' }
    ],
    fullName: [{ validator: nameValidator, trigger: 'blur' }],
    securityCode: [
        { required: true, message: 'CW is required.', trigger: 'blur' }
    ],
    date: [
        { required: true, message: 'Valid Thru is required.', trigger: 'blur' }
    ]
}

const handleConfirm = async () => {
    loading.value = true
    try {
        await formRef.value.validate()
        const { cardNumber, date, ...info } = formData
        const [expiryMonth, expiryYear] = date.split(' ')
        const params = {
            cardNumber: cardNumber.replace(/\s+/g, ''),
            expiryYear: parseInt(expiryYear),
            expiryMonth: parseInt(expiryMonth),
            ...info
        }
        const [err, res] = await addCardApi(params)
        if (err === null && res.code === 200) {
            message.success('Successfully added')
            emit('confirm')
        }
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false
    }
}

watch(
    () => formData.cardNumber,
    (val: string) => {
        if (!val) {
            return
        }
        nextTick(() => {
            formData.cardNumber = val
                .replace(/\D/g, '')
                .replace(/....(?!$)/g, '$& ')
        })
    }
)
</script>
<style scoped lang="scss">
.payment-container {
    :deep(.ant-picker) {
        background: transparent;
        color: #607d8b;

        .ant-picker-suffix {
            display: none;
        }

        input {
            color: #fff;

            &::placeholder {
                color: #607d8b;
            }
        }
    }

    :deep(.ant-form-item-label) {
        label {
            padding-left: 11px;
            color: #607d8b;
        }
    }

    input {
        color: #fff;

        &::placeholder {
            color: #607d8b;
        }
    }

    .pay-card-con {
        border: 2px dashed $primary-color;
        border-radius: 16px;
        padding: 30px 0;
    }
}
</style>
