import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { downloadBlob } from '@/utils/file'

const useExportTable = (
  fetchFn: () => Promise<Blob | void>,
  fileName: string = 'export.xlsx'
) => {
  const dataExportFetching = ref(false)

  const handleDataExport = async () => {
    dataExportFetching.value = true
    const blob = await fetchFn()

    if (blob) {
      const res = await downloadBlob(blob, fileName)

      if (!res) message.error('Export failed')
    }

    dataExportFetching.value = false
  }

  return {
    dataExportFetching,
    handleDataExport
  }
}

export default useExportTable
