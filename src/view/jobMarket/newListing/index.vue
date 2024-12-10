<template>
    <div>
        <Header>
            <div>New Listing</div>
            <div>{{ title }}</div>
        </Header>
        <div class="content p-y-22 ma">
            <Spin :spinning="loading">
                <Form
                    ref="formRef"
                    layout="vertical"
                    :model="formData"
                    :rules="formRules"
                    hideRequiredMark
                >
                    <component
                        ref="comRef"
                        :is="componentName"
                        :form="formData"
                    />
                </Form>
                <div class="text-center">
                    <Space size="large">
                        <Button
                            v-if="step !== 1 && !(isEdit && step < 3)"
                            type="primary"
                            @click="handlePre"
                            >Previous</Button
                        >
                        <Button type="primary" @click="handleClick">{{
                            nextBtnText
                        }}</Button>
                    </Space>
                </div>
            </Spin>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { Button, Space, Form, Spin, message } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRouter, useRoute } from 'vue-router'

import Header from '../../components/Header.vue'
import stepOne from './subPage/stepOne.vue'
import stepTwo from './subPage/stepTwo.vue'
import stepThree from './subPage/stepThree.vue'
import stepFour from './subPage/stepFour.vue'

import {
    createJobApi,
    getJobDetailApi,
    getDeliveryDetailApi,
    updateJobApi
} from '@/api/job'
import type { MemberJobDeliveryDetailResponse } from '@/api'

const route = useRoute()
const isEdit = computed(() => !!route.query.id)

const backupFormData = (isQuit = true) => {
    if (isQuit && !isEdit.value) {
        localStorage.setItem('listing-info', JSON.stringify(formData.value))
    } else if (!isQuit && !isEdit.value) {
        localStorage.removeItem('listing-info')
    }
}

const step = ref(1)
const stepList = [
    { value: 1, title: 'Step 1: Price Estimate', com: stepOne },
    { value: 2, title: 'Step 2: ltem Information ', com: stepTwo },
    { value: 3, title: 'Step 3: Pickup Details', com: stepThree },
    { value: 4, title: 'Step 4: Delivery-Information', com: stepFour }
]
const componentName = computed(() => {
    return stepList.find(item => item.value === step.value)?.com
})
const title = computed(() => {
    return stepList.find(item => item.value === step.value)?.title
})
const nextBtnText = computed(() => {
    switch (step.value) {
        case 1:
            return 'Continue'
        case 4:
            return 'Post Job'
        default:
            return 'Save & Continue'
    }
})

const loading = ref(false)
const formRef = ref()
const initFormData = () => ({
    isExpressListing: '0',
    unitOfLength: 'FEET',
    unitOfWeight: 'Lbs',
    photoOfItemList: []
})
const storageFormData = localStorage.getItem('listing-info')
const formData = ref<any>(
    storageFormData && !isEdit.value
        ? JSON.parse(storageFormData)
        : initFormData()
)
watch(formData, () => backupFormData(), { deep: true })
const photoValidator = (_rule: any) => {
    if (!formData.value?.photoOfItemList?.length) {
        return Promise.reject(new Error('Image is required.'))
    }
    return Promise.resolve()
}
const tipOrBonusValidator = (_rule: any) => {
    if (formData.value.isExpressListing !== '1') return Promise.resolve()
    if (
        formData.value.tipOrBonus &&
        Number.isNaN(Number(formData.value.tipOrBonus))
    ) {
        return Promise.reject(new Error('Tip/bonus must be a number'))
    }
    return Promise.resolve()
}
const formRules: Record<string, Rule[]> = reactive({
    pickupLocation: [
        {
            required: true,
            message: 'pick up location is required.',
            trigger: ['change', 'blur']
        }
    ],
    dropOffLocation: [
        {
            required: true,
            message: 'drop off location is required.',
            trigger: ['change', 'blur']
        }
    ],
    entireSize: [
        {
            required: true,
            message: 'parcel size is required.',
            trigger: ['change', 'blur']
        }
    ],
    descriptiveTitle: [
        {
            required: true,
            message: 'Descriptive title is required.',
            trigger: ['change', 'blur']
        }
    ],
    quantityOfItems: [
        {
            required: true,
            message: 'quantity items is required.',
            trigger: ['change', 'blur']
        }
    ],
    photoOfItemList: [
        { validator: photoValidator, trigger: ['change', 'blur'] }
    ],
    tipOrBonus: [
        { validator: tipOrBonusValidator, trigger: ['change', 'blur'] }
    ],
    isItemGreater: [
        {
            required: true,
            message: 'items is required.',
            trigger: ['change', 'blur']
        }
    ],
    width: [
        {
            required: true,
            message: 'width is required.',
            trigger: ['change', 'blur']
        }
    ],
    height: [
        {
            required: true,
            message: 'height is required.',
            trigger: ['change', 'blur']
        }
    ],
    length: [
        {
            required: true,
            message: 'length is required.',
            trigger: ['change', 'blur']
        }
    ],
    weight: [
        {
            required: true,
            message: 'Weight is required.',
            trigger: ['change', 'blur']
        }
    ],
    itemDescription: [
        {
            required: true,
            message: 'public item description is required.',
            trigger: ['change', 'blur']
        }
    ],
    pickupContactUserName: [
        {
            required: true,
            message: 'Name is required.',
            trigger: ['change', 'blur']
        }
    ],
    pickupContactPhone: [
        {
            required: true,
            message: 'Enter contact number.',
            trigger: ['change', 'blur']
        }
    ],
    pickupStartTime: [
        {
            required: true,
            message: 'delivery date required',
            trigger: ['change', 'blur']
        }
    ],
    pickupEndTime: [
        {
            required: true,
            message: 'delivery date required.',
            trigger: ['change', 'blur']
        }
    ],
    driverQualification: [
        {
            required: true,
            message: 'driver qualification required.',
            trigger: ['change', 'blur']
        }
    ],
    receiveContactUserName: [
        {
            required: true,
            message: 'receiver_name is required.',
            trigger: ['change', 'blur']
        }
    ],
    receiveContactPhone: [
        {
            required: true,
            message: 'Enter contact number.',
            trigger: ['change', 'blur']
        }
    ],
    deliveryTime: [
        {
            required: true,
            message: 'deadline required.',
            trigger: ['change', 'blur']
        }
    ]
})

const handlePre = () => {
    step.value -= 1
}
const handleClick = () => {
    formRef.value.validate().then(() => {
        if (step.value === 4) {
            submit()
        } else {
            step.value += 1
        }
    })
}

const router = useRouter()
const submit = async () => {
    loading.value = true
    try {
        const { isAllowAnyTime, isSaveTemplate, ...info } = formData.value
        const params = {
            isAllowAnyTime: isAllowAnyTime ? '1' : '0',
            isSaveTemplate: isSaveTemplate ? '1' : '0',
            ...info
        }
        const submitApi = uid.value ? updateJobApi : createJobApi
        const [err, res] = await submitApi(params)
        if (err === null && res.code === 200) {
            backupFormData(false)
            message.success('Submit Success')
            if (!isEdit.value && formData.value.isExpressListing === '1') {
                router.push({
                    name: 'JobMarketDetail',
                    query: { id: (res.data as any).jobUid }
                })
            } else {
                router.push({ name: 'MyListings' })
            }
        }
    } finally {
        loading.value = false
    }
}

const getJobDetail = () => {
    return new Promise((resole, reject) => {
        getJobDetailApi({ uid: uid.value })
            .then(([err, res]) => {
                if (err === null && res.code === 200) {
                    const {
                        descriptiveTitle,
                        pickupLocation,
                        pickupLongitude,
                        pickupLatitude,
                        dropOffLocation,
                        dropOffLongitude,
                        uid,
                        dropOffLatitude,
                        estimatedPrice,
                        entireSize,
                        quantityOfItems,
                        orderRefNumber,
                        photoOfItemList,
                        isExpressListing,
                        tipOrBonus,
                        isAllowAnyTime,
                        driverQualification,
                        isSaveTemplate,
                        templateName
                    } = res.data
                    Object.assign(formData.value, {
                        uid,
                        descriptiveTitle,
                        pickupLocation,
                        pickupLongitude,
                        pickupLatitude,
                        dropOffLocation,
                        dropOffLongitude,
                        dropOffLatitude,
                        estimatedPrice,
                        entireSize,
                        quantityOfItems,
                        orderRefNumber,
                        photoOfItemList,
                        isExpressListing,
                        tipOrBonus,
                        isAllowAnyTime: isAllowAnyTime === '1',
                        driverQualification,
                        isSaveTemplate: isSaveTemplate === '1',
                        templateName
                    })
                    resole(res.data)
                } else {
                    reject()
                }
            })
            .catch(e => {
                reject(e)
            })
    })
}
const getDeliveryDetailFun = () => {
    return new Promise((resole, reject) => {
        getDeliveryDetailApi({ uid: uid.value })
            .then(([err, res]) => {
                if (err === null && res.code === 200) {
                    const {
                        pickupContactUserName,
                        pickupContactPhone,
                        pickupContactEmail,
                        pickupStartTime,
                        pickupEndTime,
                        privateInformation,
                        receiveContactUserName,
                        receiveContactPhone,
                        receiveContactEmail,
                        dropOffDetails,
                        deliveryTime,
                        isItemGreater,
                        width,
                        height,
                        length,
                        weight,
                        unitOfLength,
                        unitOfWeight,
                        itemDescription,
                        deliveryDeadlineTime
                    } = res.data as MemberJobDeliveryDetailResponse & {
                        deliveryTime: string
                    }
                    Object.assign(formData.value, {
                        pickupContactUserName,
                        pickupContactPhone,
                        pickupContactEmail,
                        pickupStartTime,
                        pickupEndTime,
                        privateInformation,
                        receiveContactUserName,
                        receiveContactPhone,
                        receiveContactEmail,
                        dropOffDetails,
                        deliveryTime,
                        isItemGreater,
                        width,
                        height,
                        length,
                        weight,
                        unitOfLength,
                        unitOfWeight,
                        itemDescription,
                        deliveryDeadlineTime
                    })
                    resole(res.data)
                } else {
                    reject()
                }
            })
            .catch(e => {
                reject(e)
            })
    })
}

const uid = ref(<string | undefined>undefined)
const init = () => {
    uid.value = route.query.id as string
    if (uid.value) {
        loading.value = true
        Promise.all([getJobDetail(), getDeliveryDetailFun()])
            .then()
            .finally(() => {
                loading.value = false
            })
        step.value = 2
    }
}
onMounted(() => {
    init()
})
</script>
<style scoped lang="scss">
.content {
    width: 800px;
}
</style>
