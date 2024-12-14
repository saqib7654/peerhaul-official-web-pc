<template>
    <Modal :title="modal.title" v-model:visible="modal.visible" :border="false" class="bidsModal">
        <ASpin :spinning="isLoading">
            <div class="font-size-4 w-100% overflow-hidden modalInner">
                <ACarousel class="h-full flex flex-col">
                    <img v-for="(item, i) in detail.carImageList" :key="i" :src="item"
                        class="rounded-1 h-full flex-1 bidImg" />
                </ACarousel>
                <div>
                    <div class="grid grid-cols-2 gap-1">
                        <ASpace>
                            <img src="../../../assets/icons/icon_user_bids.svg" alt="" class="bidsUser">
                            <div class="font-size-5 font-bold">

                                {{ detail.driverName }}
                            </div>
                        </ASpace>
                        <ASpace class="col-start-1 col-end-2">
                            <span class="font-size-16px font-medium color-#333333"> Deliveries:</span>
                            <img src="../../../assets/icons/icon_delivered_2.svg" alt="" width="18">
                            <span class="font-size-16px font-medium color-#9E9B9B">{{ detail.deliveredCount }}</span>
                        </ASpace>
                        <Button
                            class="btn row-start-1 col-start-2 w-29 h-10 gap-2 ms-auto bg-#F0F2F5 border-1 border-#EAECF3"><img
                                src="../../../assets/icons/icon_message_2.svg" alt=""> Message</Button>
                    </div>
                    <div class="flex justify-between items-center m-t-1">
                        <ASpace size="small" direction="horizontal">
                            <ARate :value="detail.avgScore" disabled />
                            <p @click="goPage" class="font-size-16px color-info cursor-pointer mb-0 font-regular">({{
                                detail.reviewCount
                                }}
                                <span>{{ detail.reviewCount === 1 ? 'review' : 'reviews' }}</span>
                                )
                            </p>

                        </ASpace>
                    </div>
                    <div class="font-size-18px m-b-2 m-t-4 flex gap-1">
                        <span class="color-#9E9B9B">Delivery date:</span>
                        <span class="font-medium color-#333333">{{
                            detail.deliveryDate
                            }}</span>
                    </div>
                    <div class="font-size-18px m-b-2 flex gap-1">
                        <span class="color-#9E9B9B">Delivery time:</span>
                        <span class="font-medium color-#333333">{{
                            detail.deliveryTime ?? 'Anytime'
                            }}</span>
                    </div>

                    <div class="font-size-18px m-b-2 flex gap-1">
                        <span class="color-#9E9B9B">Vehicle:</span>
                        <span class="color-#333333">{{
                            detail.carName
                            }}</span>
                    </div>
                    <div class="font-size-18px m-b-2 flex gap-1">
                        <span class="color-#9E9B9B">Vehicle Type:</span>
                        <span class="color-#333333"> {{ detail.carType }}</span>
                    </div>
                    <div class="font-size-18px m-b-2">
                        <span class="color-#9E9B9B">Driver extra notes:
                        </span>
                        <span class="color-#333333">{{
                            detail.extraNotes
                            }}</span>
                    </div>
                </div>
            </div>
        </ASpin>
        <template #footer>
            <div class="w-full flex items-center gap-4 justify-end modalFooter">
                <Button class="font-size-14px flex gap-1 bg-#F0F2F5 h-10 border-#F0F2F5">
                    <span class="color-#333333 font-size-16px" style="font-weight: 500;">Total Delivery Cost:</span>
                    <span class="color-#0000FF font-size-18px" style="font-weight: 500;">${{ detail.totalAmount
                        }}</span></Button>
                <Button type="primary" class="h-10 font-size-16px" @click="handleConfirm">Accept Bid</Button>
            </div>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { Button, Rate } from 'ant-design-vue'
import { useRouter } from 'vue-router'

import Modal from '@/components/Modal.vue'
import SIcon from '@/components/SIcon.vue'

import { detailApi } from '@/api/member/jobBid'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
    (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
    visible: boolean
    title?: string
    bidUid?: string
    jobStatus?: string
}

const props = withDefaults(defineProps<{ modal: ModalProps }>(), {
    modal: () => ({
        visible: false
    })
})

const {
    state: detail,
    isLoading,
    execute: fetchDetail
} = useAsyncState(async () => {
    if (!props.modal.bidUid) return {}
    const [, res] = await detailApi({ uid: props.modal.bidUid })
    return res?.data || {}
}, {})
watch(
    () => props.modal.bidUid,
    () => fetchDetail()
)

const handleConfirm = () => {
    emit('confirm')
}
let router = useRouter()
const goPage = () => {
    router.push({
        name: 'DriverProfile',
        query: {
            uid: detail.value.driverId,
            job: detail.value.jobUid,
            jobStatus: props.modal.jobStatus
        }
    })
}
</script>
<style>
.bidsModal {
    width: 800px !important;
}

.bidsModal .header {
    background: #F7F7F7;
    height: 80px;
    position: relative;
    width: calc(100% + 96px) !important;
    border-bottom: 1px solid #E4E3E6;
}

.bidsModal .header .title {
    font-size: 24px !important;
}

.bidsModal .ant-modal-content {
    padding-top: 0;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 32px;
    border-radius: 0;
}

.bidsModal .bidsUser {
    width: 36px;
    display: inline-block;
    margin-right: 4px;
}

.bidsModal .ant-modal-close {
    inset-inline-end: 48px;
    top: 28px;
}

.bidsModal .modalInner {
    display: grid;
    grid-template-columns: 258px 1fr;
    gap: 40px;
    margin-top: 4px;
    margin-bottom: 20px;
}

.bidsModal .slick-slider .bidImg {
    aspect-ratio: 3 / 4;
    object-fit: cover;
}

.bidsModal .ant-rate {
    font-size: 14px;
    line-height: 10px;
}

.bidsModal .ant-rate-star:not(:last-child) {
    margin-inline-end: 4px;
}

.bidsModal .modalFooter {
    padding-top: 24px;
    position: relative;
}

.bidsModal .modalFooter::before {
    content: "";
    height: 1px;
    background-color: #E4E3E6;
    width: calc(100% + 96px);
    left: -48px;
    position: absolute;
    top: 0;
}

@media screen and (max-width: 1370px) {
    .bidsModal .modalInner {
        gap: 25px;
    }
}


@media screen and (max-width: 991px) {
    .bidsModal .ant-modal-content {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 30px;
    }

    .bidsModal .header {
        width: calc(100% + 60px) !important;
    }

    .bidsModal .modalFooter::before {
        width: calc(100% + 60px);
        left: -30px;
    }

    .bidsModal .ant-modal-close {
        inset-inline-end: 30px;
    }
}

@media screen and (max-width: 575px) {
    .bidsModal .modalInner {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 4px;
        margin-bottom: 20px;
    }
}
</style>
