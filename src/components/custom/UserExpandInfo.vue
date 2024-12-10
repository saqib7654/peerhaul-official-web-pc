<template>
    <Space direction="vertical" style="width: 100%;">
        <Table :pagination="false" :columns="serverColumns" :data-source="serverTableData" :loading="isTableLoading" />
        <Table :pagination="false" :columns="managerColumns" :data-source="managerTableData" :loading="isTableLoading" />
        <Table :pagination="false" :columns="emailColumns" :data-source="emailTableData" :loading="isTableLoading" />
    </Space>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { Table, Space } from 'ant-design-vue';
// import { getUserExpandDetailApi } from '@/api/staffAccount'

import type { GenerateTableInfo } from '@/types/table';

type UserExpandInfoProps = {
    userid?: string
}

const props = withDefaults(defineProps<UserExpandInfoProps>(), {
    userid: ''
})

// 表格
type TableInfo = GenerateTableInfo<'server' | 'password' | 'managerAccount' | 'email' | 'phone'>
type Columns = TableInfo['tableProps']['columns']
type DataSource = Partial<NonNullable<TableInfo['tableProps']['dataSource']>[number]>[] | undefined
const totalColumns: Columns = [
    {
        title: '服务器',
        dataIndex: 'server'
    },
    {
        title: '密码',
        dataIndex: 'password'
    },
    {
        title: '经理账号',
        dataIndex: 'managerAccount'
    },
    {
        title: '辅助邮箱',
        dataIndex: 'email'
    },
    {
        title: '电话',
        dataIndex: 'phone'
    }
].map(item => ({
    ...item,
    key: item.dataIndex
}))
const generateColumns = (keys: TableInfo['columnKey'][]) => keys.map(key => totalColumns.find(item => item.key === key) || {})
const serverColumns: Columns = generateColumns(['server', 'password'])
const managerColumns: Columns = generateColumns(['managerAccount', 'password', 'phone'])
const emailColumns: Columns = generateColumns(['email', 'password', 'phone'])
const serverTableData = ref<DataSource>()
const managerTableData = ref<DataSource>()
const emailTableData = ref<DataSource>()
const isTableLoading = ref(false)

const updateTableList = async () => {
    if(!props.userid) return

    isTableLoading.value = true

    const [err, res] = await getUserExpandDetailApi({
        userId: props.userid
    }   )

    if (err === null && res.code === 200) {
        const { emailList, managerList, serverList } = res.data

        serverTableData.value = serverList?.map(({ serverInfo, serverPwd }) => ({
            server: serverInfo,
            password: serverPwd
        }))

        managerTableData.value = managerList?.map(({managerAccount, managerPhone, managerPwd}) => ({
            managerAccount,
            password: managerPwd,
            phone: managerPhone
        }))

        emailTableData.value = emailList?.map(({email, emailPwd, mobilePhone}) => ({
            email,
            password: emailPwd,
            phone: mobilePhone
        }))
    }

    isTableLoading.value = false
}

// watch(() => props.userid, () => updateTableList(), {
//     immediate: true
// })
</script>