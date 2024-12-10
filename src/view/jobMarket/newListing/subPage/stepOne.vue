<template>
    <div class="form-con font-size-4">
        <Spin :spinning="loading">
            <FormItem label="Select a pickup location" name="pickupLocation">
                <div class="input-con">
                    <GoogleAutocomplete
                        :value="formData.pickupAddressName"
                        v-model="formData.pickupAddressName"
                        :api-key="GOOGLE_MAP_KEY"
                        :isFullPayload="true"
                        placeholder="Pickup location"
                        @set="getPayload($event, 'pick')"
                        @change="handleChange($event, 'pick')"
                    />
                    <SIcon name="icon_position" class="font-size-6 ml-a" />
                </div>
            </FormItem>
            <AInput
                placeholder="Suite number or other details (optional)"
                v-model:value="formData.pickupAddress"
            />
            <FormItem
                class="m-t-4"
                label="Select a drop-off location"
                name="dropOffLocation"
            >
                <div class="input-con">
                    <GoogleAutocomplete
                        v-if="boo"
                        :value="formData.dropOffAddressName"
                        v-model="formData.dropOffAddressName"
                        :api-key="GOOGLE_MAP_KEY"
                        :isFullPayload="true"
                        placeholder="Dropoff location"
                        @set="getPayload($event, 'drop')"
                        @change="handleChange($event, 'drop')"
                    />
                    <SIcon name="icon_position" class="font-size-6 ml-a" />
                </div>
            </FormItem>
            <AInput
                placeholder="Suite number or other details (optional)"
                v-model:value="formData.dropOffAddress"
            />
            <div class="m-y-3 flex flex-items-center">
                <span class="font-bold"
                    >What is the size of your entire delivery?</span
                >
                <Tooltip>
                    <template #title>
                        <span
                            >Requirements for oversize items are explained in
                            thenext step.</span
                        >
                    </template>
                    <SIcon name="icon_i" class="font-size-5 ml-2" />
                </Tooltip>
            </div>
            <FormItem name="entireSize">
                <Select
                    v-model:value="formData.entireSize"
                    :options="sizeList"
                    :fieldNames="{ label: 'sizeDesc', value: 'sizeCode' }"
                    size="large"
                    placeholder="Select Size"
                />
            </FormItem>
            <FormItem>
                <Input
                    v-model:value="estimatedPrice"
                    disabled
                    class="w-full"
                    size="large"
                    :placeholder="
                        formData.isExpressListing === '1'
                            ? 'Fixed Price: $xx (including HsT and fees)'
                            : 'Estimated Price: $xx (including HST and fees)'
                    "
                />
            </FormItem>
            <div class="mb-5 font-size-3.5" style="margin-top: -14px">
                <span v-if="formData.isExpressListing === '1'"
                    >An express listing is fixed price and is immediately
                    available on a first-to-commit basis to all drivers meeting
                    your criteria. View payment terms
                    <Tooltip>
                        <template #title>
                            <span
                                >Once an Express Job has been posted it can be
                                accepted by any driver meeting the criteria
                                specified in the listing. Your payment will be
                                processed immediately upon a driver accepting
                                the job, without further interaction on your
                                part.</span
                            >
                        </template>
                        <u class="color-info-color cursor-pointer ml-1"
                            >here</u
                        > </Tooltip
                    >.</span
                >
                <span v-else
                    >Bids you receive may vary significantly from this estimate.
                    PeerHaul is a free market where drivers set their own
                    price.</span
                >
            </div>
            <div class="flex-x-between mb-10">
                <div>
                    <span>Make this an express listing.</span>
                </div>
                <Switch
                    :loading="isSwitching"
                    v-model:checked="formData.isExpressListing"
                    checkedValue="1"
                    unCheckedValue="0"
                    checked-children="ON"
                    un-checked-children="OFF"
                />
            </div>
            <FormItem
                v-if="formData.isExpressListing === '1'"
                label="Add a tip/bonus:"
                name="tipOrBonus"
            >
                <AInput
                    v-model:value="formData.tipOrBonus"
                    prefix="$"
                    placeholder="Encourage drivers to prioritize your delivery"
                    class="w-full"
                    size="large"
                />
            </FormItem>
        </Spin>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import {
    FormItem,
    Input,
    Select,
    Switch,
    Tooltip,
    Spin,
    message
} from 'ant-design-vue'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'

import SIcon from '@/components/SIcon.vue'
import { loader } from '@/utils/google'

import { getParcelSizeListApi, computeEstimatePriceApi } from '@/api/job'
import type { MemberParcelSizeGetParcelSizeListResponse as ParcelSizeRes } from '@/api/index'

import { GOOGLE_MAP_KEY } from '@/enum/common'

const emit = defineEmits<{
    (e: 'update:form', val: any): void
}>()

type PropsType = {
    form: any
    view?: boolean
}
const props = withDefaults(defineProps<PropsType>(), {
    form: () => {
        return {}
    },
    view: false
})

const loading = ref(false)
const formData = computed({
    get() {
        return props.form
    },
    set(val) {
        emit('update:form', val)
    }
})

const getPayload = (place: any, key: string) => {
    console.log(place)
    const lng = place.geometry.location.lng()
    const lat = place.geometry.location.lat()
    const location = place.formatted_address

    const addressComp = place.address_components
    const locality = addressComp.find((item: any) => item.types?.includes('locality'))?.long_name

    const city = locality

    const area = addressComp.filter((item: any) => item.types?.includes('sublocality')).map((item: any) => item?.long_name).join(' ')

    console.log(`this is area ${area}`)

    switch (key) {
        case 'pick':
            formData.value.pickupLongitude = lng
            formData.value.pickupLatitude = lat
            formData.value.pickupLocation = location
            formData.value.pickupCity = city
            formData.value.pickupArea = area
            break
        case 'drop':
            formData.value.dropOffLongitude = lng
            formData.value.dropOffLatitude = lat
            formData.value.dropOffLocation = location
            formData.value.dropOffCity = city
            formData.value.dropOffArea = area
            break
    }
}
const handleChange = (e: any, key: string) => {
    const val = e.target.value
    switch (key) {
        case 'pick':
            if (!val) {
                formData.value.pickupLocation = ''
                formData.value.pickupLongitude = ''
                formData.value.pickupLatitude = ''
                formData.value.pickupCity = ''
                formData.value.pickupArea = ''
            }
            break
        case 'drop':
            if (!val) {
                formData.value.dropOffLocation = ''
                formData.value.dropOffLongitude = ''
                formData.value.dropOffLatitude = ''
                formData.value.dropOffCity = ''
                formData.value.dropOffArea = ''
            }
            break
    }
}

// size list
const sizeList = ref(<ParcelSizeRes>[])
const getParcelSizeListFun = async () => {
    loading.value = true
    try {
        const [err, res] = await getParcelSizeListApi({})
        if (err === null && res.code === 200) {
            sizeList.value = res.data || []
        }
    } finally {
        loading.value = false
    }
}
const getPriceFun = async () => {
    loading.value = true
    try {
        const {
            pickupLongitude,
            pickupLatitude,
            dropOffLongitude,
            dropOffLatitude,
            entireSize,
            isExpressListing
        } = formData.value
        const params = {
            pickupLongitude,
            pickupLatitude,
            dropOffLongitude,
            dropOffLatitude,
            entireSize,
            isExpressListing:isExpressListing || '0'
        }
        const [err, res] = await computeEstimatePriceApi(params)
        if (err === null && res.code === 200) {
            formData.value.estimatedPrice = res.data.price
        }
    } finally {
        loading.value = false
    }
}
const estimatedPrice = computed(() => {
    return formData.value.estimatedPrice
        ? formData.value.isExpressListing === '1'
            ? `Fixed Price: $${formData.value.estimatedPrice} (including HST and fees)`
            : `Estimated Price: $${formData.value.estimatedPrice} (including HST and fees)`
        : undefined
})
watch(
    [
        () => formData.value.pickupLocation,
        () => formData.value.dropOffLocation,
        () => formData.value.entireSize,
        ()=> formData.value.isExpressListing
    ],
    () => {
        if (
            formData.value.pickupLocation &&
            formData.value.dropOffLocation &&
            formData.value.entireSize
        ) {
            getPriceFun()
        } else {
            formData.value.estimatedPrice = ''
        }
    },
    { deep: true }
)
const isSwitching = ref(false)
watch(
    () => formData.value.isExpressListing,
    async val => {
        isSwitching.value = true

        if (val === '1') {
            const { pickupLocation, dropOffLocation } = formData.value

            if (!(pickupLocation && dropOffLocation)) {
                message.warn(
                    'Please select pick up location and drop off location'
                )
                formData.value.isExpressListing = '0'
            }
            formData.value.isAllowAnyTime = '1'
        } else if (val === '0') {
            formData.value.pickupStartTime = undefined
            formData.value.pickupEndTime = undefined
            formData.value.tipOrBonus = undefined
            formData.value.isAllowAnyTime = '0'
        }

        isSwitching.value = false
    }
)
watch(
    [
        () => formData.value.isExpressListing,
        () => formData.value.pickupLocation,
        () => formData.value.dropOffLocation
    ],
    async ([isExpress]) => {
        isSwitching.value = true
        if (isExpress === '1') {
            const { pickupLocation, dropOffLocation } = formData.value

            await loader.importLibrary('routes')

            const service = new google.maps.DistanceMatrixService()
            const res = await service.getDistanceMatrix({
                origins: [pickupLocation],
                destinations: [dropOffLocation],
                travelMode: 'DRIVING'
            })

            const distance = res?.rows?.[0]?.elements?.[0]?.distance?.value
            console.log(res)
            if (distance > 50000 || (distance !== 0 && !distance)) {
                message.warn(
                    "Distance bigger than 50km, can't use express listing"
                )
                formData.value.isExpressListing = '0'
            }
        }
        isSwitching.value = false
    }
)

const boo = ref(false)
onMounted(() => {
    getParcelSizeListFun()
    setTimeout(() => {
        boo.value = true
    }, 500)
})
</script>
<style scoped lang="scss">
.input-con {
    position: relative;
    width: 100%;
    height: 41px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px;
    background-color: #fff;

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
