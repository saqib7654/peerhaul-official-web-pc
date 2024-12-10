<template>
    <div class="w-110 color-white">
        <div class="flex-center">
            <img src="@/assets/pics/login_img.png" class="w-100 mb-3" />
        </div>
        <div class="font-size-6 mb-6 font-bold">Forgot Password</div>
        <div class="form">
            <Form
                ref="formRef"
                :model="formData"
                :rules="rules"
                size="large"
                layout="vertical"
                hideRequiredMark
            >
                <FormItem name="email">
                    <Input
                        class="forget-input"
                        placeholder="Enter your email*"
                        v-model:value="formData.email"
                    >
                        <template #suffix>
                            <SIcon name="icon_email" class="font-size-4" />
                        </template>
                    </Input>
                </FormItem>
                <FormItem name="verificationCode">
                    <AInput
                        class="forget-input"
                        v-model:value="formData.verificationCode"
                        placeholder="Vercode"
                    >
                        <template #suffix>
                            <AButton
                                class="h-100%!"
                                :loading="isSending"
                                size="small"
                                type="primary"
                                @click="sendVercode()"
                                ><span class="font-size-15px p-x-1">Send</span></AButton
                            >
                        </template>
                    </AInput>
                </FormItem>
                <FormItem name="password">
                    <AInputPassword
                        class="forget-input"
                        v-model:value="formData.password"
                        placeholder="New Password"
                    />
                </FormItem>
                <FormItem name="confirmPwd">
                    <AInputPassword
                        class="forget-input"
                        v-model:value="formData.confirmPwd"
                        placeholder="Confirm Password"
                    />
                </FormItem>
            </Form>
            <div class="flex-center mt-10 mb-6">
                <Button
                    type="primary"
                    :loading="isChanging"
                    size="large"
                    class="login-btn w-35"
                    @click="changePwd()"
                    >Submit</Button
                >
            </div>
            <div class="text-center">
                <span class="mr-1">Get back to</span>
                <span class="cursor-pointer" @click="handleClick('Login')"
                    >Login</span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    Input,
    Button,
    Form,
    FormItem,
    FormInstance,
    message
} from 'ant-design-vue'
import { sendEmailApi } from '@/api/member/common'
import { updatePwdApi } from '@/api/member/member'
import type { MemberMemberUpdatePwdRequest as UpdateReq } from '@/api'

import SIcon from '@/components/SIcon.vue'
import { Rule } from 'ant-design-vue/es/form'

const emit = defineEmits<{
    (e: 'change', val: string): void
}>()

const router = useRouter()

const formData = ref<Partial<UpdateReq & { confirmPwd: string }>>({
    email: undefined,
    password: undefined,
    confirmPwd: undefined,
    verificationCode: undefined
})

watch(formData, val => console.log(val), {
    deep: true
})

const formRef = ref<FormInstance>()
const rules: Record<string, Rule[]> = {
    email: [{ required: true, message: 'Email is required.', trigger: 'blur' }],
    pwd: [{ required: true, message: 'Enter password.', trigger: 'change' }],
    verificationCode: [{ required: true, message: 'Enter vercode.', trigger: 'change' }],
    confirmPwd: [
        { required: true, message: 'Enter password.', trigger: 'change' },
        {
            validator: async (_rule, value) =>
                value === formData.value.password
                    ? Promise.resolve()
                    : Promise.reject('Password is not same.')
        }
    ]
}

const { execute: sendVercode, isLoading: isSending } = useAsyncState(
    async () => {
        await formRef.value?.validateFields(['email'])

        const [, res] = await sendEmailApi({
            email: formData.value.email || ''
        })

        if (res?.code === 200) message.success('Send success!')
    },
    null,
    {
        immediate: false
    }
)

const { execute: changePwd, isLoading: isChanging } = useAsyncState(
    async () => {
        const [, res] = await updatePwdApi(formData.value as UpdateReq)

        if (res?.code === 200) {
            message.success('Change success!')
            router.back()
        }
    },
    null,
    {
        immediate: false
    }
)

const handleClick = (type: string) => {
    emit('change', type)
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
    width: 100%;

    .forget-input {
        height: 50px;
    }

    .login-btn {
        background: $primary-color;
    }
}
</style>
