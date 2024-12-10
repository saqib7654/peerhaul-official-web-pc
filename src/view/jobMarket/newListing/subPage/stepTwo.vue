<template>
    <Row :gutter="100">
        <Col :span="12">
            <FormItem label="Select template to autofill from">
                <AsyncSelect
                    size="large"
                    placeholder="Select Template"
                    :asyncFn="fetchTemplateList"
                    :fieldNames="{ label: 'templateName', value: 'uid' }"
                    v-model:value="templateId"
                />
            </FormItem>
            <FormItem
                name="descriptiveTitle"
                label="What kind of items are you sending?"
            >
                <Input
                    v-model:value="form.descriptiveTitle"
                    class="w-full"
                    size="large"
                    placeholder="Descriptive title"
                />
            </FormItem>
            <FormItem
                name="quantityOfItems"
                label="What kind of items are you sending?"
            >
                <InputNumber
                    v-model:value="form.quantityOfItems"
                    class="w-full"
                    size="large"
                    :min="1"
                    placeholder="Quantity"
                />
            </FormItem>
            <FormItem name="photoOfItemList">
                <PicUpload
                    :upload="handleUpload"
                    :file="image"
                    v-model:files="form.photoOfItemList"
                />
            </FormItem>
        </Col>
        <Col :span="12">
            <div class="font-bold mb-3">
                <span>Any of your items longer than </span>
                <span class="color-info">4 feet </span>
                <span>or greater </span>
                <span class="color-info">50 Pounds?</span>
            </div>
            <FormItem name="isItemGreater">
                <RadioGroup
                    v-model:value="form.isItemGreater"
                    :options="qusOptions"
                />
            </FormItem>
            <template v-if="form.isItemGreater === '1'">
                <Row :gutter="12">
                    <Col :span="12">
                        <FormItem name="weight">
                            <InputNumber
                                v-model:value="form.weight"
                                class="w-full"
                                size="large"
                                :min="0"
                                placeholder="Weight"
                            >
                                <template #addonAfter>
                                    <Select
                                        v-model:value="form.unitOfWeight"
                                        :options="weightUnitOptions"
                                        size="large"
                                        class="w-22"
                                    />
                                </template>
                            </InputNumber>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="length">
                            <InputNumber
                                v-model:value="form.length"
                                class="w-full"
                                size="large"
                                :min="0"
                                placeholder="Length"
                            >
                                <template #addonAfter>
                                    <Select
                                        v-model:value="form.unitOfLength"
                                        :options="lengthUnitOptions"
                                        size="large"
                                        class="w-22"
                                    />
                                </template>
                            </InputNumber>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="width">
                            <InputNumber
                                v-model:value="form.width"
                                class="w-full"
                                size="large"
                                :min="0"
                                placeholder="Width"
                            >
                                <template #addonAfter>
                                    <Select
                                        v-model:value="form.unitOfLength"
                                        :options="lengthUnitOptions"
                                        size="large"
                                        class="w-22"
                                    />
                                </template>
                            </InputNumber>
                        </FormItem>
                    </Col>
                    <Col :span="12">
                        <FormItem name="height">
                            <InputNumber
                                v-model:value="form.height"
                                class="w-full"
                                size="large"
                                :min="0"
                                placeholder="Height"
                            >
                                <template #addonAfter>
                                    <Select
                                        v-model:value="form.unitOfLength"
                                        :options="lengthUnitOptions"
                                        size="large"
                                        class="w-22"
                                    />
                                </template>
                            </InputNumber>
                        </FormItem>
                    </Col>
                </Row>
                <div class="mb-3 flex flex-items-center">
                    <span class="mr-1"
                        >You must provide loading & unloading assistance for
                    </span>
                    <span
                        class="color-info cursor-pointer"
                        @click="overModal.visible = true"
                        >Oversize Items.</span
                    >
                </div>
            </template>
            <div class="font-bold mb-3">Item Description</div>
            <FormItem name="itemDescription">
                <Textarea
                    v-model:value="form.itemDescription"
                    class="w-full"
                    :rows="3"
                    placeholder="This information will be public to all drivers. Pickup & delivery related instructions will be added in a later step."
                />
            </FormItem>
            <div class="font-bold mb-3">
                Is there any number associated with this delivery?
            </div>
            <FormItem name="orderRefNumber">
                <Input
                    v-model:value="form.orderRefNumber"
                    class="w-full"
                    size="large"
                    placeholder="order ref number"
                />
            </FormItem>
            <div class="my-3 flex flex-items-center">
                <span class="font-bold"
                    >What is an order/reference number?</span
                >
                <Tooltip>
                    <template #title>
                        <span
                            >This the number the driverneeds for picking up an
                            itemfrom a store or business, forexample if you have
                            alreadypurchased the item online andexpect the
                            driver to performstore-front pickup. Leave thisline
                            blank if not relevant.</span
                        >
                    </template>
                    <SIcon name="icon_i" class="font-size-5 ml-2" />
                </Tooltip>
            </div>
        </Col>
        <OversizeModal v-if="overModal.visible" :modal="overModal" />
    </Row>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
    FormItem,
    Input,
    InputNumber,
    Select,
    Tooltip,
    Row,
    Col,
    RadioGroup,
    Textarea,
    message
} from 'ant-design-vue'

import SIcon from '@/components/SIcon.vue'
import PicUpload from '../components/PicUpload.vue'
import OversizeModal from '../components/OversizeModal.vue'
import { getTemplateListApi, detailApi } from '@/api/member/jobTemplate'
import AsyncSelect from '@/components/entry/async/AsyncSelect.vue'

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

const overModal = reactive({ visible: false })

const templateId = ref('')
const fetchTemplateList = async () => {
    const [, res] = await getTemplateListApi({})
    return res?.data
}
const { execute: applyTemplate } = useAsyncState(
    async (uid: string = '') => {
        const [, res] = await detailApi({ uid })
        Object.assign(props.form, {
            ...res?.data,
            photoOfItemList:
                (res?.data as any).photoOfItemList || props.form.photoOfItemList
        })
    },
    null,
    {
        immediate: false
    }
)
watch(templateId, val => applyTemplate(0, val))

const qusOptions = [
    { value: '0', label: 'No' },
    { value: '1', label: 'Yes' }
]
const weightUnitOptions = [
    { value: 'None', label: 'None' },
    { value: 'Lbs', label: 'Lbs' },
    { value: 'Kg', label: 'Kg' }
]
const lengthUnitOptions = [
    { value: 'FEET', label: 'FEET' },
    { value: 'INCH', label: 'INCH' },
    { value: 'CM', label: 'CM' }
]
const image = ref('')
const handleUpload = async (file: File) => {
    const fileData = new FormData()

    fileData.append('file', file)
    message.success('Uploaded successfully')

    return false
}
</script>

<style scoped lang="scss"></style>
