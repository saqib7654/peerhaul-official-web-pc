<template>
    <div class="home-con">
        <div class="home-header flex-center mb-22">
            <div class="w-310">
                <div class="font-size-6 text-center mb-14 color-white">
                    Shipping For Everyone
                </div>
                <Row :gutter="16">
                    <Col :span="12" v-for="item in headerList" :key="item.id">
                        <div class="mb-4 bg-white rounded-2 p-4 flex items-center">
                            <!-- <SIcon
                                :name="item.icon"
                                class="font-size-22 mr-4"
                            /> -->
                            <img class="mr-4 h-74px w-74px" :src="item.icon" />
                            <div class="p-y-3.5">
                                <div class="font-size-5 font-bold mb-4">
                                    {{ item.title }}
                                </div>
                                <div class="font-size-4">{{ item.desc }}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="w-310 m-a">
            <Content
                clickable
                title="Recent Jobs"
                @title="$router.push({ name: 'JobMarket' })"
            >
                <Carousel autoplay dotPosition="bottom">
                    <div v-for="(item, idx) in recentJobList" :key="idx">
                        <div class="p-4 bg-#F7F7F7 flex font-size-4">
                            <img
                                :src="item.photo"
                                style="object-fit: cover;"
                                class="w-102 h-102 rounded-2 mr-12"
                            />
                            <div class="flex-y-between p-y-7">
                                <div>
                                    <div
                                        class="font-size-5 font-bold mb-4 color-text-color"
                                    >
                                        {{ item.descriptiveTitle }}
                                    </div>
                                    <div class="color-#666">
                                        Size：{{ item.entireSize }}
                                    </div>
                                </div>
                                <div>
                                    <div class="flex mb-4">
                                        <SIcon
                                            name="icon_sign"
                                            class="font-size-5.5 mr-2"
                                        />
                                        <div class="font-size-6 color-primary font-bold">
                                            ${{ item.displayAmount }}
                                        </div>
                                        
                                        <div v-if="item.tipOrBonus" class="font-size-6 color-primary font-bold flex">
                                            <div class="font-size-6 m-x-2 color-text">+</div>
                                            {{ priceToFloat(item.tipOrBonus) }}
                                        </div>
                                    </div>
                                    <div class="flex mb-12">
                                        <div class="mr-2 font-bold">
                                            Details:
                                        </div>
                                        <div>{{ item.itemDescription }}</div>
                                    </div>
                                    <Button
                                        type="primary"
                                        @click="FUN_toJobDetail(item)"
                                        >Browse Listings</Button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </Content>
            <CostEstimate class="form-con m-b-16" />
            <div class="font-size-4">
                <div
                    v-for="item in appTypeList"
                    :key="item.id"
                    :class="`mb-10 flex ${
                        item.type === 'driver' ? 'flex-row-reverse' : ''
                    }`"
                >
                    <img
                        :src="item.img"
                        :class="`w-100 h-100 ${
                            item.type === 'driver' ? 'ml-12' : 'mr-12'
                        }`"
                    />
                    <div class="p-y-23 flex-y-between">
                        <div>
                            <div class="font-bold font-size-6 mb-4">
                                {{ item.title }}
                            </div>
                            <div class="font-bold mb-8">
                                {{ item.desc }}
                            </div>
                            <div class="color-#666">{{ item.detail }}</div>
                        </div>
                        <div class="flex">
                            <div
                                v-for="info in downWayList"
                                :key="info.id"
                                class="down-btn"
                            >
                                <SIcon
                                    :name="info.icon"
                                    class="font-size-10 mr-4"
                                />
                                <div class="flex-y-between">
                                    <div class="font-size-3">
                                        {{ info.desc }}
                                    </div>
                                    <div class="font-bold">
                                        {{ info.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Row, Col, Carousel, Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'

import SIcon from '@/components/SIcon.vue'
import Content from './components/Content.vue'

import App_Img from '@/assets/pics/app_img.png'
import homeLogo1 from '@/assets/pics/home_logo1.png'
import homeLogo2 from '@/assets/pics/home_logo2.png'
import homeLogo3 from '@/assets/pics/home_logo3.png'
import carPng from '@/assets/pics/car.png'

import { getIndexJobListApi } from '@/api/member/job'
import { MemberJobGetIndexJobListResponse as recentJobListType } from '@/api'
import CostEstimate from './components/CostEstimate.vue'
import { priceToFloat } from '@/utils/price-to-float';

const router = useRouter()

const headerList = [
    {
        id: 1,
        title: 'Connecting People',
        desc: 'PeerHaul connects Drivers with Senders. It’s that simple.',
        icon: carPng
    },
    {
        id: 2,
        title: 'Local Delivery',
        desc: 'Quickly request pick-ups from local businesses.',
        icon: homeLogo1,
    },
    {
        id: 3,
        title: 'Long-Haul Jobs',
        desc: 'Everyday travelers bid to transport your items.',
        icon: homeLogo2
    },
    {
        id: 4,
        title: 'Shipping For Everyone',
        desc: 'Efficiently issue deliveries from your business.',
        icon: homeLogo3
    }
]
const recentJobList = ref<recentJobListType>([])

const appTypeList = [
    {
        id: 1,
        type: 'user',
        title: 'Get the Client App',
        desc: 'Find your driver today.',
        detail: 'Boost the efficiency of your local deliveries through our simple interface, and save big with peer-to-peer shipping over longer distances',
        img: App_Img
    },
    {
        id: 2,
        type: 'driver',
        title: 'Become a Driver',
        desc: 'Download the PeerHaul Driver App',
        detail: 'Travelling? Earn some cash by delivering along your route! Or earn a premium running prompt local deliveries. Sign-up is quick and easy.',
        img: App_Img
    }
]
const downWayList = [
    { id: 1, title: 'Play Store', desc: 'GET IT ON', icon: 'icon_play' },
    { id: 2, title: 'App Store', desc: 'Download on the', icon: 'icon_apple' }
]

/** Recent Jobs Data */
async function FUN_getRecentJobs() {
    let [, res] = await getIndexJobListApi({})
    recentJobList.value = res?.data || []
}
FUN_getRecentJobs()

/** Browse Listings  */
const FUN_toJobDetail = (_item: any) => {
    router.push({
        name: 'JobMarketDetail'
    })
}
</script>
<style scoped lang="scss">
.home-con {
    .home-header {
        width: 100%;
        height: 540px;
        background: url(@/assets/pics/home-header.png) no-repeat;
        background-size: cover;
    }

    .form-con {
        background: rgba(224, 223, 255, 0.4);
        border: 1px solid rgba(0, 0, 255, 0.4);
        border-radius: 16px;
        padding: 40px 32px;
    }

    .down-btn {
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        padding: 16px 24px;
        display: flex;
        margin-right: 16px;
        cursor: pointer;

        &:hover {
            background: #333333;
            color: #fff;
        }
    }

    :deep(.slick-dots) {
        bottom: -48px;

        li {
            width: 16px;
            height: 16px;
            margin-right: 28px;

            button {
                width: 16px;
                height: 16px;
                border-radius: 100%;
                background: $light-primary-color;
            }

            // button {
            //   display: none;
            // }

            &.slick-active {
                button {
                    background: $info-color;
                }
            }
        }
    }

    :deep(.ant-switch.ant-switch-checked) {
        background: $info-color;
    }
}

.input-con {
    position: relative;
    width: 100%;
    height: 41px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px;

    &:hover {
        border-color: $primary-color;
        box-shadow: 0 0 0 2px rgba(255, 255, 5, 0.1);
    }

    input {
        width: calc(100% - 28px);
        border: 0;

        &:focus-visible {
            outline: 0;
        }

        &::-webkit-input-placeholder {
            color: #d9d9d9;
        }
    }
}
</style>
