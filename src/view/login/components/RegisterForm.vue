<template>
    <div class="w-204 color-white">
        <div class="flex-center">
            <img
                src="@/assets/pics/login_img.png"
                class="w-100 mb-3 cursor-pointer"
                @click="
                    $router.push({ name: user.token ? 'MyListings' : 'Home' })
                "
            />
        </div>
        <div class="font-size-6 mb-3 font-bold">Sign Up</div>
        <div class="form">
            <Form
                ref="formRef"
                :model="formData"
                :rules="rules"
                layout="vertical"
                hideRequiredMark
            >
                <Row :gutter="16">
                    <Col :span="24">
                        <FormItem>
                            <Checkbox v-model:checked="formData.isCompany"
                                >represent a company</Checkbox
                            >
                        </FormItem>
                    </Col>
                    <Col :span="24">
                        <FormItem name="fullName">
                            <Input
                                class="sign-input"
                                placeholder="Full name"
                                size="large"
                                v-model:value="formData.fullName"
                            >
                                <template #suffix>
                                    <SIcon
                                        name="icon_user"
                                        class="font-size-4"
                                    />
                                </template>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col :span="24" v-if="formData.isCompany">
                        <FormItem name="companyName">
                            <Input
                                class="sign-input"
                                placeholder="Company name"
                                size="large"
                                v-model:value="formData.companyName"
                            >
                                <template #suffix>
                                    <SIcon
                                        name="icon_company"
                                        class="font-size-4"
                                    />
                                </template>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="cellPhone">
                            <Input
                                class="sign-input"
                                placeholder="Cell phone"
                                size="large"
                                v-model:value="formData.cellPhone"
                            >
                                <template #suffix>
                                    <SIcon
                                        name="icon_tel"
                                        class="font-size-4"
                                    />
                                </template>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="email">
                            <Input
                                class="sign-input"
                                placeholder="Email"
                                size="large"
                                v-model:value="formData.email"
                            >
                                <template #suffix>
                                    <SIcon
                                        name="icon_email"
                                        class="font-size-4"
                                    />
                                </template>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="password">
                            <InputPassword
                                class="sign-input"
                                placeholder="Password"
                                size="large"
                                v-model:value="formData.password"
                                autocomplete="new-password"
                            />
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="againPwd">
                            <InputPassword
                                class="sign-input"
                                placeholder="Confirm password"
                                size="large"
                                v-model:value="formData.againPwd"
                            />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div class="flex-center mt-10 mb-6">
                <Button
                    type="primary"
                    size="large"
                    class="login-btn w-35"
                    :loading="btnLoading"
                    @click="handleSign"
                >
                    Sign Up
                </Button>
            </div>
            <div class="text-center">
                <span class="mr-1">Already have an account?</span>
                <span class="cursor-pointer" @click="handleClick('Login')"
                    >Login</span
                >
            </div>
        </div>
        <SendVerifyModal
            :confirm-loading="btnLoading"
            :modal="modal"
            @confirm="onConfirm"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {
    Input,
    Button,
    Form,
    FormItem,
    InputPassword,
    Checkbox,
    Row,
    Col,
    message
} from 'ant-design-vue'

import SIcon from '@/components/SIcon.vue'
import SendVerifyModal from './SendVerifyModal.vue'
import userStore from '@/store/userStore'

import {
    validatePass,
    validateName,
    validatePhone,
    validateEmail
} from '@/utils/utils'

import { registerApi } from '@/api/login'

const user = userStore()

const emit = defineEmits<{
    (e: 'change', val: string): void
}>()

const modal = reactive({
    title: 'Cell Number Verification',
    visible: false,
    record: undefined
})

const btnLoading = ref(false)
const formData = reactive({
    fullName: '',
    cellPhone: '',
    email: '',
    isCompany: false,
    companyName: undefined,
    password: '',
    againPwd: '',
    referralCode: '',
    verifyCode: ''
})
const formRef = ref()
const confirmPwd = (_rule: any, value: string) => {
    if (!value) {
        return Promise.reject(new Error('confirm password is required.'))
    } else if (value !== formData.password) {
        return Promise.reject(
            new Error('Confirm password must be equal to password.')
        )
    }
    return Promise.resolve()
}
const rules: any = {
    fullName: [{ validator: validateName, trigger: 'blur' }],
    companyName: [{ validator: validateName, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
    cellPhone: [{ validator: validatePhone, trigger: 'blur' }],
    password: [
        { required: true, message: 'password is required.', trigger: 'blur' },
        { validator: validatePass, trigger: 'blur' }
    ],
    againPwd: [{ validator: confirmPwd, trigger: 'blur' }]
}

const handleSign = async () => {
    try {
        await formRef.value.validate()
        Object.assign(modal, { visible: true, record: formData.cellPhone })
        modal.visible = true
    } catch (e) {
        // handle the exception
    } finally {
    }
}
const registerFun = async () => {
    btnLoading.value = true
    try {
        const { isCompany, againPwd: _, ...info } = formData
        const params = {
            ...info,
            isCompany: isCompany ? '1' : '0'
        }
        console.log(params)
        const [err, res] = await registerApi(params)
        if (err === null && res.code === 200) {
            message.success('Operation successful')
            handleClick('login')
        }
    } finally {
        btnLoading.value = false
    }
}

const handleClick = (type: string) => {
    emit('change', type)
}
const onConfirm = (code: string) => {
    formData.verifyCode = code
    registerFun()
}
</script>

<style scoped lang="scss">
.title {
    font-family: PingFangSCBold-Bold;
    font-size: 36px;
    font-weight: normal;
    letter-spacing: 0em;
    color: #333333;
}

.form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    // height: 193px;
    width: 100%;

    .sign-input {
        height: 50px;
    }

    .login-btn {
        background: $primary-color;
    }
}

:deep(.ant-checkbox-wrapper) {
    color: #fff;
    font-size: 16px;
}
</style>
