<template>
    <Row :gutter="100">
        <Col :span="12">
            <div class="color-info mb-3">Delivery Information</div>
            <template v-if="formData.isExpressListing === '1'">
                <div class="font-bold mb-3">
                    Specify minimum driver qualification who can bid
                </div>
                <FormItem name="driverQualification">
                    <Select
                        v-model:value="formData.driverQualification"
                        placeholder="Select driver qualification"
                        allowClear
                    >
                        <SelectOption
                            v-for="(item, i) in qualificationList"
                            :key="i"
                            :value="item.value"
                        >
                            <div v-if="!item.isStar">{{ item.label }}</div>
                            <Rate
                                v-else
                                v-model:value="item.value"
                                allowHalf
                                disabled
                            />
                        </SelectOption>
                    </Select>
                </FormItem>
                <div class="mb-5">
                    Allowing less qualified drivers to bid does not obligate you to
                    accept their bid, except for express listings
                </div>
            </template>
            <div class="font-bold mb-3">Who is receiving the delivery?</div>
            <FormItem>
                <Checkbox v-model:checked="checked"
                    >Receiving contact is me</Checkbox
                >
            </FormItem>
            <FormItem name="receiveContactUserName">
                <Input
                    v-model:value="formData.receiveContactUserName"
                    class="w-full"
                    size="large"
                    placeholder="Daniel Schoonhoven"
                />
            </FormItem>
            <FormItem name="receiveContactPhone">
                <Input
                    v-model:value="formData.receiveContactPhone"
                    class="w-full"
                    size="large"
                    placeholder="473838345235"
                />
            </FormItem>
            <FormItem name="receiveContactEmail">
                <Input
                    v-model:value="formData.receiveContactEmail"
                    class="w-full"
                    size="large"
                    placeholder="AAA@163.com(optional)"
                />
            </FormItem>
        </Col>
        <Col :span="12">
            <div class="font-bold mb-3">When is the deadline for delivery?</div>
            <!-- <FormItem>
                <RadioGroup
                    v-model:value="deadline"
                    :options="deadlineOptions"
                    option-type="button"
                    button-style="solid"
                    size="large"
                />
            </FormItem> -->
            <FormItem name="deliveryTime">
                <DatePicker
                    v-model:value="formData.deliveryTime"
                    class="w-full"
                    size="large"
                    show-time
                    :format="dateFormat"
                    :valueFormat="dateFormat"
                />
            </FormItem>
            <FormItem name="dropOffDetails">
                <Textarea
                    v-model:value="formData.dropOffDetails"
                    class="w-full"
                    :rows="3"
                    placeholder="Drop-off Details (Optional): Can be information such as where to drop off the package on your property."
                />
            </FormItem>
            <FormItem name="isSaveTemplate">
                <Checkbox v-model:checked="formData.isSaveTemplate"
                    >Save this listing as a template for future jobs</Checkbox
                >
            </FormItem>
            <FormItem v-if="formData.isSaveTemplate" name="templateName">
                <Input
                    v-model:value="formData.templateName"
                    class="w-full"
                    size="large"
                    placeholder="Name this Template"
                />
            </FormItem>
            <div class="font-bold mb-3">Liability and Packaging</div>
            <div class="mb-3">
                <span class="mr-1"
                    >PeeerHaul assumes no liability for damages or losses of
                    goods, and recommends 3rd party
                </span>
                <span
                    class="color-info cursor-pointer"
                    @click="handleClick('1')"
                    >shipping insurance.</span
                >
            </div>
            <div class="mb-3">
                <span
                    >You are responsible for packaging. Drivers are not liable
                    for damage preventable by adequate packaging. Refer to our
                </span>
                <span
                    class="color-info cursor-pointer"
                    @click="handleClick('2')"
                    > packaging guidance.</span
                >
            </div>
        </Col>
        <TipModal :modal="tipModal" />
    </Row>
</template>
<script setup lang="ts">
import { computed, ref, reactive, watch } from 'vue'
import {
    FormItem,
    Input,
    Row,
    Col,
    Checkbox,
    Textarea,
    DatePicker,
    Rate,
    Select,
    SelectOption
} from 'ant-design-vue'
import dayjs from 'dayjs'

import TipModal from '../components/TipModal.vue'

import userStore from '@/store/userStore'

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

const qualificationList = [
    { value: 0, label: 'Allow unrated drivers', isStar: false },
    { value: 3.5, label: '', isStar: true },
    { value: 4, label: '', isStar: true },
    { value: 4.5, label: '', isStar: true },
    { value: 5, label: '', isStar: true }
]
const formData = computed({
    get() {
        return props.form
    },
    set(val) {
        emit('update:form', val)
    }
})
const dateFormat = 'MM/DD/YYYY HH:mm:ss'
const deadline = ref(<number | undefined>undefined)
const deadlineOptions = [
    { value: 0, label: 'None' },
    { value: 5, label: '5 days' },
    { value: 3, label: '3 days' }
]

watch([() => formData.value.deliveryTime, () => deadline.value], () => {
    if (deadline.value && formData.value.deliveryTime) {
        formData.value.deliveryDeadlineTime = dayjs(formData.value.deliveryTime)
            .add(deadline.value, 'day')
            .format(dateFormat)
    } else {
        formData.value.deliveryDeadlineTime = undefined
    }
})

const checked = ref(true)

const tipModal = reactive({ visible: false, record: undefined, title: '' })
const handleClick = (act: string) => {
    Object.assign(tipModal, {
        title: act === '1' ? 'Shipping insurance' : 'Packaging guidance',
        visible: true,
        record: act
    })
}

const store = userStore()
watch(
    () => checked.value,
    val => {
        if (val) {
            const { fullName, cellPhone, email } = store.userInfo
            Object.assign(formData.value, {
                receiveContactUserName: fullName,
                receiveContactPhone: cellPhone,
                receiveContactEmail: email
            })
        } else {
            Object.assign(formData.value, {
                receiveContactUserName: '',
                receiveContactPhone: '',
                receiveContactEmail: ''
            })
        }
    },
    { immediate: true }
)
watch(
    () => formData.value.isSaveTemplate,
    val => {
        if (!val) {
            formData.value.templateName = undefined
        }
    },
    { immediate: true }
)
</script>

<style scoped lang="scss"></style>
