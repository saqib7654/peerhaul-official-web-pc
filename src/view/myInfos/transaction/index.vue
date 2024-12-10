<template>
    <div class="transact-container">
        <Header>My Transactions</Header>
        <div class="w-300 ma p-16">
            <div class="font-bold font-size-6 mb-10">Export Details</div>
            <Form
                ref="formRef"
                :model="formData"
                :rules="rules"
                hideRequiredMark
            >
                <Space :size="48">
                    <FormItem label="From" name="startDate">
                        <DatePicker
                            v-model:value="formData.startDate"
                            class="w-90"
                            :disabledDate="startDisabledDate"
                            placeholder="mm/dd/yyyy"
                            format="MM/DD/YYYY"
                            valueFormat="MM/DD/YYYY"
                        />
                    </FormItem>
                    <FormItem label="To" name="endDate">
                        <DatePicker
                            v-model:value="formData.endDate"
                            class="w-90"
                            :disabledDate="endDisabledDate"
                            placeholder="mm/dd/yyyy"
                            format="MM/DD/YYYY"
                            valueFormat="MM/DD/YYYY"
                        />
                    </FormItem>
                </Space>
                <FormItem label="Choose File Type:">
                    <RadioGroup
                        v-model:value="formData.fileType"
                        :options="typeOptions"
                    />
                </FormItem>
            </Form>

            <div class="text-center mt-5">
                <Button
                    type="primary"
                    size="large"
                    :loading="dataExportFetching || loading"
                    @click="handleClick"
                    >Export Details</Button
                >
            </div>

            <div v-if="show" class="mt-10">
                <div
                    v-if="!transactList?.length"
                    class="font-size-7 font-bold text-center"
                >
                    No Transactions Found
                </div>
                <div v-else class="transact-list">
                    <div class="color-#666 text-right mb-4">
                        {{ total }} records found in total
                    </div>
                    <div
                        v-for="(item, i) in transactList"
                        :key="i"
                        class="transact-item"
                    >
                        <div class="flex-y-center w-10">{{ i + 1 }}</div>
                        <div class="flex-y-center w-40">
                            <div class="img-con">
                                <img
                                    :src="item.photo"
                                    alt=""
                                    class="wh-full rounded-2"
                                />
                            </div>
                            <div class="name">{{ item.descriptiveTitle }}</div>
                        </div>
                        <div class="flex-x-between w-105">
                            <div class="flex-y-between">
                                <div class="color-info">Pickup Location</div>
                                <div class="color-sub_text font-size-5">
                                    {{ item.pickupLocation }}
                                </div>
                            </div>
                            <SIcon
                                name="icon_line_arrow"
                                class="font-size-9.5"
                            />
                            <div class="text-end flex-y-between">
                                <div class="color-info">Drop-off Location</div>
                                <div class="color-sub_text font-size-5">
                                    {{ item.dropOffLocation }}
                                </div>
                            </div>
                        </div>

                        <div class="flex-center w-40">
                            ${{ item.totalAmount }}
                        </div>
                        <div class="flex-y-center justify-end w-47 text-end">
                            {{ item.pickupTime }}-{{ item.deliverTime }}
                        </div>
                    </div>
                    <div
                        v-if="pageCount > formData.pageNum"
                        class="text-center mt-4"
                    >
                        <Button :loading="loading" @click="getList"
                            >加载更多</Button
                        >
                    </div>
                    <div v-else class="color-sub_text text-center">
                        没有更多了
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
    Form,
    FormItem,
    DatePicker,
    Space,
    RadioGroup,
    Button
} from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'

import Header from '../../components/Header.vue'
import SIcon from '@/components/SIcon.vue'

import { getTransactHistoryApi, exportTransactHistoryApi } from '@/api/user'
import type { MemberJobOrderPcQueryPageResponse as TransactHistoryRes } from '@/api/index'

import useExportTable from '@/composables/useExportTable'

const typeOptions = [
    { label: '.xls', value: 'XLS' },
    { label: '.pdf', value: 'PDF' }
]
const startDisabledDate = (current: Dayjs) => {
    // Can not select days before today and today
    if (formData.endDate) {
        return current && current > dayjs(formData.endDate).endOf('day')
    } else {
        return current && current >= dayjs().endOf('day')
    }
}
const endDisabledDate = (current: Dayjs) => {
    // Can not select days before today and today
    if (formData.startDate) {
        return (
            current &&
            (current < dayjs(formData.startDate) ||
                current > dayjs().endOf('day'))
        )
    } else {
        return current && current > dayjs().endOf('day')
    }
}

const loading = ref(false)
const formData = reactive({
    pageNum: 1,
    pageSize: 10,
    startDate: undefined,
    endDate: undefined,
    fileType: 'XLS'
})
const rules: any = {
    startDate: [
        { required: true, message: 'Select Date first.', trigger: 'blur' }
    ],
    endDate: [
        { required: true, message: 'Select Date first.', trigger: 'blur' }
    ]
}

const show = ref(false)
const formRef = ref()
const transactList = ref(<TransactHistoryRes['dataList']>[])
const total = ref(0)
const pageCount = ref(0)
const getList = async () => {
    loading.value = true
    try {
        const [err, res] = await getTransactHistoryApi(formData)
        if (err === null && res.code === 200) {
            show.value = true
            if (formData.pageNum === 1) {
                transactList.value = res.data?.dataList || []
            } else {
                transactList.value?.concat(res.data.dataList || [])
            }
            formData.pageNum = res.data.current || 1
            total.value = res.data?.total || 0
            pageCount.value = res.data.pageCount || 0
            if (transactList.value?.length) {
                handleDataExport()
            }
        }
    } catch (err: any) {
        console.log(err)
        // message.error(err.message)
    } finally {
        loading.value = false
    }
}
// 数据导出
const { handleDataExport, dataExportFetching } = useExportTable(async () => {
    const { pageNum: _p, pageSize: _s, ...params } = formData
    const [err, res] = await exportTransactHistoryApi(params)
    if (err === null) {
        return res as unknown as Blob
    }
})

const handleClick = async () => {
    await formRef.value.validate()
    formData.pageNum = 1
    getList()
    handleDataExport()
}
</script>
<style scoped lang="scss">
.transact-container {
    .transact-list {
        .transact-item {
            box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
            margin-bottom: 16px;
            border-radius: 8px;
            padding: 24px;
            display: flex;
            justify-content: space-between;

            .img-con {
                width: 56px;
                height: 56px;
                border-radius: 8px;
                border: 1px solid $primary-color;
                overflow: hidden;
            }

            .name {
                width: 70px;
                margin-left: 8px;
            }
        }
    }
}
</style>
