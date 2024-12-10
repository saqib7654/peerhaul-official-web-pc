import type { TableProps } from "ant-design-vue"

type GenerateTableDataItem<K extends string> = Record<Exclude<K, 'actions'> | 'key', unknown>
/** 传入 column key 来生成表格相关类型 */
type GenerateTableInfo<T extends string = never> = {
    columnKey: T
    column: { title: string, dataIndex: T, key?: T }[]
    tableDataItem: GenerateTableDataItem<T>
    tableProps: TableProps<GenerateTableInfo<T>['tableDataItem']>
}

/** 分页操作所需的传参 */
type PageInfo = Partial<{
    pageNum: number
    pageSize: number
}>

export type { GenerateTableInfo, PageInfo }