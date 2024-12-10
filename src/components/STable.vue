<template>
  <div>
    <div v-if="page" class="flex-x-between">
      <Space class="mb-4">
        <span>SHOW</span>
        <Select v-model:value="pagination.pageSize" :options="pageSizeList"></Select>
        <span>ENTRIES</span>
      </Space>
      <div>
        <Input v-model:value.lazy="formData.keywords" placeholder="Search records" allow-clear
          v-on:keyup.enter="searchFun" />
      </div>
    </div>
    <Table :columns="columns" :data-source="dataSource" row-key="uid" :pagination="false" :loading="loading" bordered
      class="ant-table-striped" :row-class-name="getRowClass" v-bind="$attrs" @change="onChange">
      <template #bodyCell="{ text, record, index, column, value }">
        <template v-if="column.dataIndex === 'order'">{{ ((pagination.pageNum - 1) * 10) + index + 1 }}</template>
        <slot name="bodyCell" :text="text" :record="record" :index="index" :column="column" :value="value"></slot>
      </template>
    </Table>
    <div v-if="page && totalPage" class="flex-x-between pt-6">
      <div>Showing {{ startNum }} to {{ endNum }} of {{ total }} entries</div>
      <Space>
        <Button shape="round" size="small" :disabled="pagination.pageNum === 1"
          @click="handleClik('first')">First</Button>
        <Button shape="round" size="small" :disabled="pagination.pageNum === 1"
          @click="handleClik('pre')">Previos</Button>
        <div class="bg-#65CAEC color-white p-x-3 rounded-5 line-height-6">{{ pagination.pageNum }}</div>
        <Button shape="round" size="small" :disabled="pagination.pageNum === totalPage"
          @click="handleClik('next')">Next</Button>
        <Button shape="round" size="small" :disabled="pagination.pageNum === totalPage"
          @click="handleClik('last')">Last</Button>
      </Space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, computed, watch } from 'vue';

import { Table, Select, Space, Button, Input } from 'ant-design-vue'
import type { TableColumnsType, TableProps } from 'ant-design-vue'


type PropsType = {
  columns: TableColumnsType
  api: any,
  params?: any,
  pageSizeOptions?: string[] | number[],
  page?: boolean
}
const props = withDefaults(defineProps<PropsType>(), {
  pageSizeOptions: () => [10, 20, 50, 100],
  page: true
})

const pageSizeList = ref(<any[]>[])
watch(() => props.pageSizeOptions, () => {
  console.log('pageSizeList')
  props.pageSizeOptions.map(value => {
    pageSizeList.value.push({ value: value, label: value })
  })
}, { deep: true, immediate: true })
const getRowClass = (_record: any, index: number) => {
  return index % 2 === 0 ? 'table-striped' : undefined
}

type FormType = {
  keywords?: string,
  sort?: {
    field?: string
    sortType?: string
  }
}
const formData = reactive(<FormType>{ keywords: undefined })

const loading = ref(false)
const dataSource = ref([])
const pagination = reactive({
  pageNum: 1,
  pageSize: 10
})
const total = ref(0)
const totalPage = computed(() => Math.ceil(total.value / pagination.pageSize));
const startNum = computed(() => (pagination.pageNum - 1) * pagination.pageSize + 1);
const endNum = computed(() => {
  if (pagination.pageNum >= totalPage.value) {
    return total.value
  } else {
    return pagination.pageSize * pagination.pageNum
  }
});
const getList = async () => {
  loading.value = true
  try {
    const searchForm = {
      ...props.params,
      ...formData,
      ...pagination
    }
    const [err, res] = await props.api(searchForm)
    if (err === null && res.code === 200) {
      dataSource.value = res.data?.dataList || []
      pagination.pageNum = res.data?.current || 1
      total.value = res.data?.total || 0
    }
  } finally { loading.value = false }
}
const searchFun = () => {
  pagination.pageNum = 1
  getList()
}
const handleClik = (type: string) => {
  switch (type) {
    case 'first':
      pagination.pageNum = 1
      break
    case 'pre':
      pagination.pageNum -= 1
      break
    case 'next':
      pagination.pageNum += 1
      break
    case 'last':
      pagination.pageNum = totalPage.value
      break
  }
}

const onChange: TableProps['onChange'] = (_pagination, _filters, sorter: any) => {
  console.log('params', sorter, sorter?.order);
  const { field, order } = sorter
  if (!order) {
    formData.sort = undefined
  } else {
    formData.sort = { field, sortType: order === 'ascend' ? 'asc' : 'desc' }
  }
  searchFun()
};

watch(
  [() => pagination.pageNum, () => pagination.pageSize],
  () => {
    getList()
  }
)
// watch(
//   [() => formData.keywords],
//   () => {
//     searchFun()
//   }
// )
onMounted(() => {
  getList()
})

defineExpose({
  getList,
  loading
})

</script>
<style scoped lang="scss">
.ant-table-striped {
  :deep(.table-striped) td {
    background-color: #F7F7FA;
  }

  :deep(.ant-table-cell) {
    background: #ffffff;
  }
}
</style>