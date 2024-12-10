<template>
    <Row :gutter="100">
        <Col :span="12">
            <div class="font-bold mb-3">Who will manage pickup?</div>
            <FormItem>
                <Checkbox v-model:checked="checked"
                    >Pickup contact is me</Checkbox
                >
            </FormItem>
            <Row :gutter="12">
                <Col :span="12">
                    <FormItem name="pickupContactUserName">
                        <Input
                            v-model:value="formData.pickupContactUserName"
                            class="w-full"
                            size="large"
                            placeholder="Daniel Schoonhoven"
                        />
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem name="pickupContactPhone">
                        <Input
                            v-model:value="formData.pickupContactPhone"
                            class="w-full"
                            size="large"
                            placeholder="473838345235"
                        />
                    </FormItem>
                </Col>
                <Col :span="24">
                    <FormItem name="pickupContactEmail">
                        <Input
                            v-model:value="formData.pickupContactEmail"
                            class="w-full"
                            size="large"
                            placeholder="AAA@163.com(optional)"
                        />
                    </FormItem>
                </Col>
            </Row>
        </Col>
        <Col :span="12">
            <template v-if="formData.isExpressListing !== '1'">
                <div class="font-bold mb-3">Pickup window:</div>
                <template v-if="formData.isAllowAnyTime !== '1'">
                    <FormItem name="pickupStartTime">
                        <DatePicker
                            v-model:value="formData.pickupStartTime"
                            class="w-full"
                            size="large"
                            show-time
                            :format="dateFormat"
                            :valueFormat="dateFormat"
                            :disabled-date="startDisabledDate"
                        />
                    </FormItem>
                    <FormItem name="pickupEndTime">
                        <DatePicker
                            v-model:value="formData.pickupEndTime"
                            class="w-full"
                            size="large"
                            show-time
                            :format="dateFormat"
                            :valueFormat="dateFormat"
                            :disabled-date="endDisabledDate"
                        />
                    </FormItem>
                </template>
                <FormItem>
                    <ACheckbox
                        :checked="formData.isAllowAnyTime === '1'"
                        @update:checked="
                            val => (formData.isAllowAnyTime = val ? '1' : '0')
                        "
                    >
                        Allow any time, or agree on a time later
                    </ACheckbox>
                </FormItem>
            </template>
            <!-- <Row :gutter="12">
            <Col :span="12">
            <FormItem name="startDate">
                <DatePicker v-model:value="formData.startDate" class="w-full" size="large" />
            </FormItem>
            <FormItem name="startTime">
                <TimePicker v-model:value="formData.startTime" class="w-full" size="large" />
            </FormItem>
            </Col>
            <Col :span="12">
            <FormItem name="endDate">
                <DatePicker v-model:value="formData.endDate" class="w-full" size="large" />
            </FormItem>
            <FormItem name="endTime">
                <TimePicker v-model:value="formData.endTime" class="w-full" size="large" />
            </FormItem>
            </Col>
        </Row> -->
            <div class="font-bold mb-3">Private Information</div>
            <FormItem name="privateInformation">
                <Textarea
                    v-model:value="formData.privateInformation"
                    class="w-full"
                    :rows="3"
                    placeholder="(Optional) Private text will only be visible to the winning
driver. Can be information such as where to pick up the package on vour property。"
                />
            </FormItem>
        </Col>
    </Row>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
    FormItem,
    Input,
    Row,
    Col,
    Checkbox,
    Textarea,
    DatePicker
} from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'

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

const formData = computed({
    get() {
        return props.form
    },
    set(val) {
        emit('update:form', val)
    }
})

const dateFormat = 'MM/DD/YYYY HH:mm:ss'
const checked = ref(true)

const startDisabledDate = (current: Dayjs) => {
    // Can not select days before today and today
    if (formData.value.pickupEndTime) {
        return (
            current &&
            (current < dayjs().startOf('day') ||
                current > dayjs(formData.value.pickupEndTime))
        )
    } else {
        return current && current < dayjs().startOf('day')
    }
}
const endDisabledDate = (current: Dayjs) => {
    // Can not select days before today and today
    if (formData.value.pickupStartTime) {
        return (
            current &&
            current < dayjs(formData.value.pickupStartTime).add(1, 'day')
        )
    } else {
        return current && current < dayjs().startOf('day')
    }
}

const store = userStore()
watch(
    () => checked.value,
    val => {
        if (val) {
            const { fullName, cellPhone, email } = store.userInfo
            Object.assign(formData.value, {
                pickupContactUserName: fullName,
                pickupContactPhone: cellPhone,
                pickupContactEmail: email
            })
        } else {
            Object.assign(formData.value, {
                pickupContactUserName: '',
                pickupContactPhone: '',
                pickupContactEmail: ''
            })
        }
    },
    { immediate: true }
)
</script>

<style scoped lang="scss"></style>
