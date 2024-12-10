<template>
    <div class="support-con">
        <img
            src="@/assets/pics/logo_small.png"
            alt=""
            class="h-75 w-75 mb-12"
        />
        <div class="font-bold font-size-6 mb-4.5">Support & Legal</div>
        <div class="support-list">
            <Space>
                <template v-for="(item, i) in supportList" :key="item.value">
                    <span
                        class="support-item"
                        @click="handleClick(item.routeName)"
                        >{{ item.label }}</span
                    >
                    <Divider
                        v-if="i < supportList.length - 1"
                        type="vertical"
                        style="border-color: #fff"
                    />
                </template>
            </Space>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Divider, Space } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const supportList = [
    { label: 'Terms & Conditions of Service', value: '1', routeName: 'Terms' },
    { label: 'Privacy Policy', value: '2', routeName: 'Privacy' },
    { label: 'Liability & Insurance', value: '3', routeName: 'LiabilityInsurance' },
    { label: 'Packaging Guidance', value: '4', routeName: 'PackagingGuidance' },
    { label: 'Become a Driver', value: '5', routeName: '' },
    { label: 'FAQs & Contact Us', value: '6', routeName: 'Faq' }
]

let router = useRouter()
const handleClick = (name: string) => {
    if (!name) return
    router.push({ name })
}
</script>
<style scoped lang="scss">
.support-con {
    width: 100%;
    height: calc(100vh - 92px);
    background: url(@/assets/pics/login_bg.png) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    .support-list {
        .support-item {
            border-bottom: 1px solid #fff;
            cursor: pointer;

            &:hover {
                color: $primary-color;
                border-bottom-color: $primary-color;
            }
        }
    }
}
</style>
