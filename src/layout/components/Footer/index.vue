<template>
    <div class="footer-con flex-center flex-col">
            <div
                class="flex-x-between flex-items-start pb-6 relative w-full p-x-25px"
            >
                <img
                    src="@/assets/pics/logo-new.png"
                    class="w-50 h-fit"
                    alt=""
                />
                <div class="text-end">
                    <div class="font-size-18px color-primary mb-8">
                        Helpful Links
                    </div>
                    <div
                        v-for="item in linkList"
                        :key="item.value"
                        class="link-item"
                        @click="handleClick(item.routeName)"
                    >
                        <span>{{ item.label }}</span>
                    </div>
                </div>
            </div>
            <div class="bg-#D8D8D8 w-100% h-1px"></div>
            <div class="mt-5 text-center font-size-15px">
                Copyright © 2022 PeerHaul, Ltd. All Rights Reserved.
            </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const linkList = [
    { label: 'Support & legal', value: '1', routeName: 'Support' },
    { label: 'FAQ & Contact Us', value: '2', routeName: 'Faq' },
    { label: 'Get the PeerHaul App', value: '3', routeName: '' },
    { label: 'Become a PeerHaul Driver', value: '4', routeName: '' }
]

let router = useRouter()
const handleClick = (name: string) => {
    if (!name) return
    router.push({ name })
}
</script>

<style scoped lang="scss">
.footer-con {
    background: url(@/assets/pics/footer_bg.png) no-repeat;
    background-size: cover;
    width: 100%;
    height: 330px;
    padding-top: 20px;
    font-size: 16px;
    color: #ffffff;

    .link-item {
        margin-bottom: 20px;
        font-size: 15px;

        span {
            border-bottom: 1px solid transparent;
            cursor: pointer;

            &:hover {
                border-bottom-color: $primary-color;
                color: $primary-color;
            }
        }
    }
}
</style>
