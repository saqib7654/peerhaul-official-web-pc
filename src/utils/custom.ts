import type { SelectProps } from 'ant-design-vue'

type SelectState = {
    data: SelectProps['options']
    value?: string
    fetching: boolean
}
/**
 * 设置下拉选择的远程数据
 * @param state 下拉选择的状态对象
 * @param fetchData 远程获取数据并转换成 options 的方法
 */
const asyncSetSelectOptions = async (
    state: SelectState,
    fetchData: () => Promise<SelectProps['options'] | void>
) => {
    state.data = []
    state.fetching = true

    state.data = (await fetchData()) || []

    state.fetching = false
}

const fixTwoRadix = (num: number) => {
    if (!num) return num
    if (num % 1 === 0) return num
    return num.toFixed(2)
}

export { asyncSetSelectOptions, fixTwoRadix }
