type ListResTemp = {
    current?: number
    size?: number
    total?: number
    pageCount?: number
    dataList?: unknown[]
}

export const useList = <T extends ListResTemp>(
    fetchFn: (
        pageNum: number,
        controller: AbortController,
        extra: {
            pageSize: number
        }
    ) => Promise<T | undefined>,
    { immediate }: { immediate?: boolean } = { immediate: true }
) => {
    const pageSize = 10
    const finished = ref(false)
    const loading = ref(false)
    const currentPage = ref(1)
    const totalNum = ref(0)
    const list = ref([]) as Ref<T['dataList'] & {}>

    const resetData = () => {
        currentPage.value = 1
    }

    let controller: AbortController
    const fetch = async (
        {
            reset,
            refresh,
            isLoading = true
        }: { reset?: boolean; refresh?: boolean; isLoading?: boolean } = {
            reset: false,
            refresh: false
        }
    ) => {
        if (finished.value && !(reset || refresh)) return

        loading.value = isLoading

        if (reset || refresh) resetData()

        controller && controller.abort()
        controller = new AbortController()
        const {
            total,
            dataList = [],
            current,
            pageCount
        } = (await fetchFn(currentPage.value++, controller, {
            pageSize: refresh ? list.value.length : pageSize
        })) || {}
        totalNum.value = total || 0

        list.value = [...(reset || refresh ? [] : list.value), ...dataList]

        loading.value = false

        finished.value = current === pageCount || total === 0
    }

    immediate && fetch()

    return {
        finished,
        loading,
        currentPage,
        list,
        fetch,
        totalNum
    }
}
