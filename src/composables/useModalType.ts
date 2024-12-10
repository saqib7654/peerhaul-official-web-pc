import { ref, computed, nextTick } from 'vue'
import type { ComputedRef, Ref } from 'vue'

const useModalType = <T extends string>(modalMap: Record<T, {
    title: string
    confirm?: () => unknown
    cancel?: () => unknown
    isEmpty?: ComputedRef<boolean>
}>, initialModalType: T, tableRowInOperation: Ref<Record<string, unknown>>) => {
    const isShowModal = ref(false)
    const isModalLoading = ref(false)

    const preModalType = ref<T>() as Ref<T>
    const modalType = ref<T>(initialModalType) as Ref<T>
    const modalTitle = computed(() => modalMap[modalType.value].title || '')
    const modalConfirm = computed(() => modalMap[modalType.value].confirm || (() => { isShowModal.value = false }))
    const modalCancel = computed(() => modalMap[modalType.value].cancel || (() => { }))
    const modalEmpty = computed(() => modalMap[modalType.value].isEmpty?.value || false)

    const handleOpenModal = (type: T, record?: Record<string, unknown>) => {
        if (record) {
            tableRowInOperation.value = record
        }
        preModalType.value = modalType.value
        modalType.value = type
        isShowModal.value = true
    }

    const handleJumpModal = async (type: T, record?: Record<string, unknown>) => {
        isShowModal.value = false
        await nextTick()

        handleOpenModal(type, record)
    }

    const handleBackModal = async (record?: Record<string, unknown>) => {
        isShowModal.value = false
        await nextTick()

        handleOpenModal(preModalType.value, record)
    }

    return {
        preModalType,
        modalType,
        isShowModal,
        isModalLoading,
        modalTitle,
        modalConfirm,
        modalCancel,
        modalEmpty,
        handleOpenModal,
        handleJumpModal,
        handleBackModal
    }
}

export default useModalType