<template>
    <ASpin :spinning="isLoading">
        <div>
            <Header> Driver Profile</Header>
            <div class="p-12 flex-x-between">
                <ASpace direction="vertical" size="large" class="w-50%">
                    <div class="font-bold font-size-22px mb-5">
                        Driver Profile
                    </div>
                    <AAvatar
                        shape="square"
                        :size="66"
                        :src="detail.profileImg"
                    />
                    <div class="font-bold font-size-20px">
                        {{ detail.fullName }}
                    </div>
                    <ACarousel class="w-80%">
                        <img
                            class="w-auto h-220px object-contain"
                            v-for="item in detail.carImageList"
                            :src="item"
                        />
                    </ACarousel>
                    <div class="flex-y-center">
                        <span class="color-#666 mr-3">Car Name:</span>
                        <span class="font-bold">{{ detail.carName }}</span>
                    </div>
                    <div class="flex-y-center">
                        <span class="color-#666 mr-3">Car Type:</span>
                        <span class="font-bold">
                            {{ detail.carType }}
                        </span>
                    </div>
                    <div class="w-80% flex justify-between items-center">
                        <ASpace direction="vertical">
                            <SIcon name="icon_delivered" class="font-size-20" />
                            <span class="font-bold font-size-20px"
                                >{{ detail.deliveredCount }} Deliveries</span
                            >
                        </ASpace>
                        <ASpace direction="vertical">
                            <span class="font-bold font-size-20px"
                                >{{ detail.avgScore }} Stars</span
                            >
                            <ARate :value="detail.avgScore" disabled />
                            <span
                                class="font-size-20px color-info cursor-pointer" @click="() => isShowReviews = true"
                                >{{ detail.reviewCount }} Reviews</span
                            >
                        </ASpace>
                    </div>
                </ASpace>
                <div class="w-50%">
                    <div class="font-bold font-size-6 mb-3">Ratings</div>
                    <div class="mb-5">
                        <Rate disabled v-model:value="detail.avgScore" />
                    </div>
                    <div v-if="$route.query.jobStatus === 'COMPLETE'">
                        <Button
                            type="primary"
                            @click="
                                () => {
                                    modal.jobUid = detail.driverId || ''
                                    modal.visible = true
                                }
                            "
                            >Write A Review</Button
                        >
                    </div>
                </div>
            </div>
            <WriteReview
                v-model:visible="modal.visible"
                :modal="modal"
                @confirm="modal.visible = false"
            />
            <DriverReviews
                v-model:open="isShowReviews"
                :drive-id="($route.query.uid as string)"
            />
        </div>
    </ASpin>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { Button, Rate } from 'ant-design-vue'

import Header from '../components/Header.vue'
import SIcon from '@/components/SIcon.vue'
import WriteReview from './components/WriteReview.vue'
import { detailApi } from '@/api/member/driver'
import DriverReviews from './components/DriverReviews.vue'

const route = useRoute()

const {
    state: detail,
    isLoading,
    execute: fetchDetail
} = useAsyncState(async () => {
    if (!route.query.uid) return {}
    const [, res] = await detailApi({ driverId: route.query.uid as string })
    return res?.data || {}
}, {})
watch(
    () => route.query.uid,
    () => fetchDetail()
)

const modal = reactive({
    title: 'Write A Review',
    state: 0 /* 0新增 1编辑 2查看 */,
    visible: false,
    jobUid: (route.query.job || '') as string
})

const isShowReviews = ref(false)
</script>
