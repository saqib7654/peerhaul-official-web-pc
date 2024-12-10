import { ref } from 'vue'
import type { TableProps } from "ant-design-vue"
import type { PageInfo } from '@/types/table'

const useTableInfo = <T extends TableProps, P extends Partial<Record<string, unknown>> = {}>(fetchFn: (arg: P & PageInfo) => Promise<{ data: Partial<NonNullable<T['dataSource']>[number]>[] | undefined, total: number } | void>, initialPageSize: number = 10, initialTableData: T['dataSource'] = []) => {
    type TableRecordItem = Partial<NonNullable<T['dataSource']>[number]>

    const tableData = ref(initialTableData)
    const tableRowInOperation = ref<TableRecordItem>({})
    const totalNum = ref<undefined | number>()
    const pageSize = ref(initialPageSize)
    const isTableLoading = ref(false)
    const currentPage = ref(1)
    const tableSelectedRows = ref<TableRecordItem[]>([])
    const rowSelection = ref<T['rowSelection'] & {}>({
        selectedRowKeys: [],
        onChange: (selectedRowKeys, selectedRows) => {
            rowSelection.value.selectedRowKeys = selectedRowKeys
            tableSelectedRows.value = selectedRows
        }
    })
    const handlePageChange = (page: number, pz: number) => {
        currentPage.value = page
        pageSize.value = pz
        updateTableList({
            pageNum: page,
            pageSize: pz
        } as (P & PageInfo))
    }
    const updateTableList = async (updateTableOption: P & PageInfo = {} as P) => {
        isTableLoading.value = true

        const { pageNum = 1, pageSize: pz = pageSize.value } = updateTableOption

        const { data, total } = (await fetchFn({ ...updateTableOption, pageNum, pageSize: pz })) || {}
        tableData.value = data || [] as any
        totalNum.value = total

        currentPage.value = pageNum
        pageSize.value = pz
        isTableLoading.value = false
    }

    return {
        tableData,
        totalNum,
        pageSize,
        currentPage,
        isTableLoading,
        tableRowInOperation,
        handlePageChange,
        updateTableList,
        rowSelection,
        tableSelectedRows
    }
}

export default useTableInfo