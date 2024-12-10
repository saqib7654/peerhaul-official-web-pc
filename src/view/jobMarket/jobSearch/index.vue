<template>
    <div>
        <Header>Job Search</Header>
        <div class="w-300 ma p-y-22">
            <Row :gutter="50">
                <Col :span="12">
                    <Form ref="formRef" layout="vertical" hideRequiredMark>
                        <div class="mb-12">
                            What types of jobs are you interested in?
                        </div>
                        <FormItem>
                            <div class="flex-x-between">
                                <span class="color-text"
                                    >Regular Deliveries</span
                                >
                                <Checkbox
                                    :checked="
                                        searchInfo.isRegularDeliveries === '1'
                                    "
                                    @update:checked="
                                        val =>
                                            (searchInfo.isRegularDeliveries =
                                                val ? '1' : '0')
                                    "
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div class="flex-x-between">
                                <span class="color-text"
                                    >Express Deliveries</span
                                >
                                <Checkbox
                                    :checked="
                                        searchInfo.isExpressDeliveries === '1'
                                    "
                                    @update:checked="
                                        val =>
                                            (searchInfo.isExpressDeliveries =
                                                val ? '1' : '0')
                                    "
                                />
                            </div>
                        </FormItem>
                        <div class="m-y-3 flex-y-center">
                            <span class="font-bold"
                                >Select maximum size of delivery:
                            </span>
                            <Tooltip>
                                <template #title>
                                    <span
                                        >Entire delivery size Tiny: Fits in a
                                        shoebox. Small: Fits in a single car
                                        seat or a small trunk. Medium: Fits in
                                        car back seat or requires a seat folded
                                        down. Large: Requires an SUV. XL:
                                        Requires a pickup truck orroof
                                        rack.</span
                                    >
                                </template>
                                <SIcon name="icon_i" class="font-size-5 ml-2" />
                            </Tooltip>
                        </div>
                        <FormItem>
                            <Slider
                                v-model:value="currentProgress"
                                :marks="sizeMap"
                                :included="false"
                                :step="25"
                                :tooltip-open="false"
                            />
                        </FormItem>
                        <div class="color-text mb-12">Route-based filter</div>
                        <div class="color-text mb-6 flex-x-between">
                            <span>Departure location</span>
                            <Button
                                type="primary"
                                @click="openListings('DEPARTURE_LOCATION')"
                                >Select</Button
                            >
                        </div>
                        <div class="color-text mb-12 flex-x-between">
                            <span>Destination (Long Haul only)</span>
                            <Button
                                type="primary"
                                @click="openListings('DESTINATION')"
                                >Select</Button
                            >
                        </div>
                        <FormItem label="Adjust acceptable radius from route:">
                            <div class="flex-y-center">
                                <div class="w-full">
                                    <Slider
                                        v-model:value="searchInfo.distance"
                                        :max="50"
                                        :included="false"
                                        :tooltip-open="false"
                                    />
                                </div>
                                <span class="ml-4"
                                    >{{ searchInfo.distance }}KM</span
                                >
                            </div>
                        </FormItem>
                        <FormItem>
                            <div class="flex-x-between flex-items-start">
                                <span class="color-text mr-12"
                                    >Tip: To search local jobs, just specify
                                    “departure location” as the middle of your
                                    desired service area and adjust your
                                    radius.</span
                                >
                            </div>
                        </FormItem>
                        <div>
                            Save search to get notifications for new matches
                        </div>
                    </Form>
                </Col>
                <Col :span="12">
                    <GoogleMap
                        class="w-100% h-100%"
                        :api-key="googleMapKey"
                        :center="center"
                        :zoom="10"
                    >
                        <Circle
                            :options="{
                                center: center,
                                radius: (searchInfo.distance || 0) * 1000,
                                fillColor: '#F86C00',
                                strokeColor: '#F86C00'
                            }"
                        />
                    </GoogleMap>
                </Col>
            </Row>
            <div class="flex-center mt-10">
                <Button type="primary" @click="jumpListings"
                    >Search Jobs</Button
                >
            </div>
        </div>
    </div>
    <ADrawer width="80%" v-model:open="isShowListings">
        <Listings
            type="OPEN_LISTINGS"
            select
            @select="
                val => {
                    searchInfo.latitude = val.pickupLatitude
                    searchInfo.longitude = val.pickupLongitude
                    isShowListings = false
                }
            "
        />
    </ADrawer>
</template>
<script setup lang="ts">
import {
    Row,
    Col,
    Form,
    FormItem,
    Checkbox,
    Tooltip,
    Slider,
    Button
} from 'ant-design-vue'
import Header from '../../components/Header.vue'
import SIcon from '@/components/SIcon.vue'
import { GoogleMap, Circle } from 'vue3-google-map'
import Listings, {
    type SearchInfo
} from '@/view/components/custom/Listings.vue'

const searchInfo = ref<SearchInfo & { isSave?: boolean }>({
    isExpressDeliveries: '0',
    isRegularDeliveries: '0',
    entireSize: 'Tiny',
    distance: 0
})

const currentProgress = ref(0)
const sizeMap = {
    0: 'Tiny',
    25: 'Small',
    50: 'Medium',
    75: 'Large',
    100: 'XL'
}
watch(
    currentProgress,
    val => (searchInfo.value.entireSize = sizeMap[val as keyof typeof sizeMap])
)

const isShowListings = ref(false)
const openListings = (type: string = '') => {
    searchInfo.value.routeBase = type
    isShowListings.value = true
}

// Google Map
const googleMapKey = import.meta.env.VITE_GOOGLE_MAP_KEY
const center = computed(() => ({
    lat: Number(searchInfo.value.latitude),
    lng: Number(searchInfo.value.longitude)
}))

const router = useRouter()
const jumpListings = () =>
    router.push({
        name: 'JobMarket',
        state: { searchInfo: JSON.stringify(searchInfo.value) }
    })
</script>
