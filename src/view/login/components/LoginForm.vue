<template>
    <div class="w-110 color-white">
        <div class="flex-center">
            <img
                src="@/assets/pics/login_img.png"
                class="w-100 mb-3 cursor-pointer"
                @click="
                    $router.push({ name: store.token ? 'MyListings' : 'Home' })
                "
            />
        </div>
        <div class="form">
            <Form
                ref="loginRef"
                :model="loginInfo"
                :rules="rules"
                layout="vertical"
                hideRequiredMark
            >
                <FormItem name="userName">
                    <Input
                        class="login-input"
                        placeholder="Enter your email*"
                        size="large"
                        v-model:value="loginInfo.email"
                    >
                        <template #suffix>
                            <SIcon name="icon_email" class="font-size-5" />
                        </template>
                    </Input>
                </FormItem>
                <FormItem name="password">
                    <InputPassword
                        class="login-input"
                        placeholder="Password"
                        size="large"
                        v-model:value="loginInfo.password"
                    />
                </FormItem>
            </Form>
            <div
                class="font-size-4 cursor-pointer text-end"
                @click="handleClick('Forget')"
            >
                Forget Password?
            </div>
            <div class="flex-center mt-12 mb-6">
                <Button
                    type="primary"
                    size="large"
                    class="login-btn w-35"
                    :loading="btnLoading"
                    @click="handleLogin"
                    >Login</Button
                >
            </div>
            <div class="text-center">
                <span class="mr-1">Don't have an account?</span>
                <span class="cursor-pointer" @click="handleClick('Register')"
                    >Register</span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Input, Button, Form, FormItem, InputPassword } from 'ant-design-vue'

import SIcon from '@/components/SIcon.vue'
import { loginApi } from '@/api/login'
import userStore from '@/store/userStore'
import { useRouter } from 'vue-router'

const emit = defineEmits<{
    (e: 'change', val: string): void
}>()

const store = userStore()
const router = useRouter()
const btnLoading = ref(false)
const loginInfo = reactive({
    email: '',
    password: ''
})
const loginRef = ref()
const rules: any = {
    email: [{ required: true, message: 'Email is required.', trigger: 'blur' }],
    password: [
        { required: true, message: 'Enter password.', trigger: 'change' }
    ]
}

const handleLogin = () => {
    loginRef.value
        .validate()
        .then(() => {
            login()
        })
        .catch()
}
const login = async () => {
    // router.replace('/')
    btnLoading.value = true
    try {
        store.isRouteGenerate = false
        const [err, res] = await loginApi(loginInfo)
        if (err === null && res.code === 200) {
            store.setToken(res.data)
            await store.getUserInfo()
            // await store.getMenuListFun()
            // router.replace('/job-market')
            router.replace('/my-listings')
        }
    } finally {
        btnLoading.value = false
    }
}

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
    // height: 193px;
    width: 100%;

    .login-input {
        height: 50px;
    }

    .login-btn {
        background: $primary-color;
    }
}
</style>
