<template>
    <ASpin :spinning="isLoading">
        <div class="driverProfileWrap">
            <Header>Driver Profile</Header>
            <div class="bg-white p-64px">
                <div class="bg-#EAECF3 p-24px rounded-2">
                    <div class="grid lg:grid-cols-2 bg-white rounded-2 2xl:min-h-740px min-h-660px">
                        <ASpace direction="vertical" size="large" style="gap: 0; border-right: 1px solid #E4E3E6">
                            <div
                                class="flex md:flex-nowrap flex-wrap md:flex-row flex-col md:items-center items-start 2xl:gap-24px gap-24px profileHeader">
                                <AAvatar shape="square" :size="66" :src="detail.profileImg" />
                                <div class="grid gap-x-24px gap-y-8px items-center">
                                    <h2 class="font-semibold font-size-28px text-#333333 mb-0"> {{ detail.fullName }}
                                    </h2>
                                    <div class="flex items-center gap-2">
                                        <span class="font-size-20px font-semibold text-#333333"> Deliveries:</span>
                                        <img src="../../assets/icons/icon_delivered_2.svg" alt="" width="18"
                                            class="inline-block">
                                        <span class="text-#9E9B9B font-size-20px font-medium">{{ detail.deliveredCount
                                            }}</span>

                                    </div>
                                    <div
                                        class="flex items-center gap-2 md:col-start-2 md:col-end-3 md:row-start-1 md:mt-0 mt-2">
                                        <img src="../../assets/icons/icon_checkRound.svg" alt="" class="inline-block"
                                            width="22">
                                        <!-- <span class="text-#0000FF font-semibold">Driver Since 2012</span> -->
                                        <p class="text-#0000FF font-semibold mb-0">Driver Since<span
                                                class="inline-block ms-1">{{ detail.sinceYear }}</span> </p>
                                    </div>
                                </div>
                            </div>
                            <ACarousel class="w-100% p-24px">
                                <img class="vehicleImg" v-for="item in detail.carImageList" :src="item"
                                    style="aspect-ratio: 2/1;" />
                            </ACarousel>
                            <div class="flex gap-2 items-center md:px-24px mb-4 px-16px font-size-20px font-medium">
                                <span class="color-#333" style="font-weight: 500;">Vehicle:</span>
                                <span class="color-#9E9B9B">{{ detail.carName }}</span>
                            </div>
                            <div class="flex gap-2 items-center md:px-24px px-16px font-size-20px font-medium">
                                <span class="color-#333" style="font-weight: 500;">Type:</span>
                                <span class="color-#9E9B9B">
                                    {{ detail.carType }}
                                </span>
                            </div>
                            <!-- <div class="w-80% flex justify-between items-center">
                                <ASpace direction="vertical">
                                    <SIcon name="icon_delivered" class="font-size-20" />
                                    <span class="font-bold font-size-20px">{{ detail.deliveredCount }} Deliveries</span>
                                </ASpace>
                                <ASpace direction="vertical">
                                    <span class="font-bold font-size-20px">{{ detail.avgScore }} Stars</span>
                                    <ARate :value="detail.avgScore" disabled />
                                    <span class="font-size-20px color-info cursor-pointer"
                                        @click="() => isShowReviews = true">{{ detail.reviewCount }} Reviews</span>
                                </ASpace>
                            </div> -->
                        </ASpace>
                        <div class="p-24px">
                            <div class="flex justify-between items-center mb-6px">
                                <h3 class="color-#333333 font-semibold mb-0 font-size-20px">Reviews
                                    <span>({{ detail.reviewCount }})</span>
                                </h3>
                                <div>
                                    <Button type="primary" class="h-10 font-size-16px px-18px" @click="() => {
                                        modal.jobUid = detail.driverId || ''
                                        modal.visible = true
                                    }
                                        ">Write A Review</Button>
                                </div>
                                <!-- <div v-if="$route.query.jobStatus === 'COMPLETE'">
                                    <Button type="primary" class="h-10 font-size-16px px-18px" @click="() => {
                                        modal.jobUid = detail.driverId || ''
                                        modal.visible = true
                                    }
                                        ">Write A Review</Button>
                                </div> -->
                            </div>
                            <div class="flex gap-12px items-center pb-12px">
                                <span class="font-size-24px color-#333333 font-semibold">{{ detail.avgScore }}</span>
                                <a-rate :value="detail.avgScore" disabled />
                            </div>

                            <!-- <div v-for="(data, index) in reviewArr" :key="index" class="reviewBox">
                                <img v-if="data.img" :src="data.img" alt="" class="reviewUser" />
                                <h3 class="font-size-5 font-bold">
                                    {{ data.name }}
                                </h3>
                                <h6>
                                    {{ data.date }}
                                </h6>
                                <Rate :value="detail.avgScore" disabled />
                                <p>{{ data.detail }}</p>
                            </div> -->
                            <div class="reviewBox" v-for="(item, index) in pageDetail.dataList" :key="index">
                                <img :src="item.memberAvatar" alt="" class="reviewUser" />
                                <h3 class="font-size-5 font-bold">
                                    {{ item.memberName }}
                                </h3>
                                <h6>
                                    {{ item.createTime }}
                                </h6>
                                <Rate :value="item.score" disabled />
                                <p>{{ item.evaluateDesc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WriteReview v-model:visible="modal.visible" :modal="modal" @confirm="modal.visible = false" />
            <DriverReviews v-model:open="isShowReviews" :drive-id="($route.query.uid as string)" />
        </div>
    </ASpin>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { Button, Rate } from 'ant-design-vue'

import Header from '../components/Header.vue'
import WriteReview from './components/WriteReview.vue'
import { detailApi } from '@/api/member/driver'
import { queryPageApi } from '@/api/member/driver'
import DriverReviews from './components/DriverReviews.vue'
import reviewer1 from '../../assets/icons/icon_user_bids.svg';

const route = useRoute()
const {
    state: detail,
    isLoading,
    execute: fetchDetail
} = useAsyncState(async () => {
    if (!route.query.uid) return {}
    const [, res] = await detailApi({ driverId: route.query.uid as string })
    console.log('API Data:', res);  // Add this line to log the API data
    return res?.data || {}
}, {})
watch(
    () => route.query.uid,
    () => fetchDetail()
)

// For queryPageApi
const {
    state: pageDetail,
    execute: fetchPageDetail
} = useAsyncState(async () => {
    if (!route.query.uid) return {};
    const [, res] = await queryPageApi({ driverId: route.query.uid as string });
    console.log('API Data:', res);
    return res?.data || {};
}, {});

watch(
    () => route.query.uid,
    () => fetchPageDetail()
);

const modal = reactive({
    title: 'Write A Review',
    state: 0 /* 0新增 1编辑 2查看 */,
    visible: false,
    jobUid: (route.query.job || '') as string
})
const reviewArr = [
    {
        img: reviewer1,
        name: 'John Doe',
        date: 'Jan 12, 2024',
        detail: 'Excellent Job',
    },
    {
        img: reviewer1,
        name: 'John Doe',
        date: 'Jan 12, 2024',
        detail: 'John really helped me to get my delivery on time, he is very responsible',
    },
    {
        img: reviewer1,
        name: 'John Doe',
        date: 'Jan 12, 2024',
        detail: 'John really helped me to get my delivery on time, he is very responsible',
    },
];
const isShowReviews = ref(false)

import { ref } from 'vue';
const value = ref<number>(4.6);
</script>
<style>
.driverProfileWrap .profileHeader .ant-avatar {
    width: 96px !important;
    height: 96px !important;
    border: 0;
}

.driverProfileWrap .profileHeader .ant-avatar img {
    aspect-ratio: 1/1;
}

.driverProfileWrap .profileHeader {
    border-bottom: 1px solid #E4E3E6;
    padding: 24px
}

.driverProfileWrap .vehicleImg {
    height: 310px;
    object-fit: contain;
    object-position: left;
}

.driverProfileWrap .reviewBox {
    padding: 16px;
    border: 1px solid #EBEDF4;
    border-radius: 6px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: 32px 1fr 100px;
    gap: 0 12px;
    align-items: center;
}

.driverProfileWrap .reviewBox .reviewUser {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.driverProfileWrap .reviewBox .ant-rate {
    grid-column: 1/4;
    margin-top: 6px;
    margin-bottom: 12px;
}

.driverProfileWrap .reviewBox p {
    grid-column: 1/4;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 0;
}

.driverProfileWrap .reviewBox h3 {
    font-weight: 600;
    margin-bottom: 0;
    color: #333333;
    font-size: 16px;
}

.driverProfileWrap .reviewBox h6 {
    margin-bottom: 0;
    color: #9E9B9B;
    font-weight: 400;
    text-align: end;
    font-size: 16px;
}

.driverProfileWrap .ant-rate .ant-rate-star:not(:last-child) {
    margin-right: 6px;
}

.driverProfileWrap .ant-rate .ant-rate-star {
    font-size: 20px;
}

.driverProfileWrap .reviewBox .ant-rate .ant-rate-star {
    font-size: 13px;
}

@media screen and (max-width: 1680px) {
    .driverProfileWrap .p-64px {
        padding: 30px
    }
}

@media screen and (max-width: 1370px) {

    .driverProfileWrap .reviewBox .ant-rate {
        margin-top: 0px;
        margin-bottom: 10px;
    }

    .driverProfileWrap .reviewBox {
        padding: 12px;
    }
}

@media screen and (max-width: 575px) {
    .driverProfileWrap .vehicleImg {
        height: 190px;
    }

    .driverProfileWrap .p-64px {
        padding: 16px;
    }

    .driverProfileWrap .p-24px {
        padding: 12px;
    }

    .driverProfileWrap .profileHeader {
        border-bottom: 1px solid #E4E3E6;
        padding: 16px;
    }
}
</style>