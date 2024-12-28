<template>
    <div class="events-content">
        <Row :gutter="40">
            <Col :span="12">
            <div class="box-con">
                <div class="font-size-6 font-bold mb-6">
                    Pickup Details
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Name: </span><span class="color-#9E9B9B">{{ delivery.pickupContactUserName }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Contact: </span><span class="color-#9E9B9B">{{ delivery.pickupContactPhone }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Email: </span><span class="color-#9E9B9B">{{ delivery.pickupContactEmail }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Pickup time: </span>
                    <span class="color-#9E9B9B">
                        {{ delivery.pickupStartTime || 'Not specified' }},to,{{ delivery.pickupEndTime || 'Not specified' }}
                    </span>
                </div>
                <div class="mb-4" >
                    <span class="font-bold mr-1">Private Information: </span>
                    <span class="color-#9E9B9B">{{ delivery.privateInformation || 'None provided' }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Pickup Location: </span><span class="color-#9E9B9B">{{ job.pickupLocation }}</span>
                </div>
                <div>
                    <span class="font-bold mr-1">Pickup Location Detail: </span><span class="color-#9E9B9B">{{ job.pickupAddress || 'None provided' }}</span>
                </div>
            </div>
            </Col>
            <Col :span="12">
            <div class="box-con">
                <div class="font-size-6 font-bold mb-6">
                    Drop-off Details
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Name: </span><span class="color-#9E9B9B">{{ delivery.receiveContactUserName }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Contact: </span><span class="color-#9E9B9B">{{ delivery.receiveContactPhone }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Email: </span><span class="color-#9E9B9B">{{ delivery.receiveContactEmail }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Delivery Deadline: </span>
                    <span class="color-#9E9B9B"> {{ delivery.deliveryDeadlineTime || 'Flexible' }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Private Information: </span><span class="color-#9E9B9B">{{ delivery.privateInformation || 'None provided'
                        }}</span>
                </div>
                <div class="mb-4">
                    <span class="font-bold mr-1">Drop-off Location: </span><span class="color-#9E9B9B">{{ job.dropOffLocation }}</span>
                </div>
                <div>
                    <span class="font-bold mr-1">Drop-off Location Detail: </span><span class="color-#9E9B9B">{{ job.dropOffAddress || 'None provided' }}</span>
                </div>
            </div>
            </Col>
            <Col :span="24" class="mt-10">
            <div class="box-con">
                <div class="mb-8">
                    <div class="font-size-6 font-bold mb-1">
                        Client Pre-Shipment Images
                    </div>
                    <div v-if="!delivery?.customerProductImageList?.length" class="color-#9E9B9B">
                        No Images Found
                    </div>
                    <div v-else class="flex">
                        <div v-for="(
                                    item, i
                                ) in delivery.customerProductImageList" :key="i" class="img-con">
                            <img :src="item" alt="" class="img" />
                        </div>
                    </div>
                </div>
                <div class="mb-8">
                    <div class="font-size-6 font-bold mb-1">
                        Driver Pickup Images
                    </div>
                    <div v-if="!delivery?.driverProductImageList?.length" class="color-#9E9B9B">
                        No Images Found
                    </div>
                    <div v-else class="flex">
                        <div v-for="(
                                    item, i
                                ) in delivery.driverProductImageList" :key="i" class="img-con">
                            <img :src="item" alt="" class="img" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="font-size-6 font-bold mb-1">
                        Drop-Off Images
                    </div>
                    <div v-if="!delivery?.dropOffImageList?.length" class="color-#9E9B9B">
                        No Images Found
                    </div>
                    <div v-else class="flex">
                        <div v-for="(item, i) in delivery.dropOffImageList" :key="i" class="img-con">
                            <img :src="item" alt="" class="img" />
                        </div>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script setup lang="ts">
import { Row, Col } from 'ant-design-vue'

type PropsType = {
    job: any
    delivery: any
}
withDefaults(defineProps<PropsType>(), {
    job: () => {
        return {}
    },
    delivery: () => {
        return {}
    }
})
</script>
<style scoped lang="scss">
.events-content {
    width: 1200px;
    padding: 88px 0;
    margin: 0 auto;

    .box-con {
        box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
        padding: 24px;

        .title {
            font-size: 24px;
            font-weight: bold;
        }

        .img-con {
            border: 2px dashed $info-color;
            padding: 8px;
            border-radius: 16px;
            width: 144px;
            height: 144px;
            margin-right: 24px;

            .img {
                border-radius: 16px;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
