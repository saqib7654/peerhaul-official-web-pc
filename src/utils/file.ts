/**
 * 将文件转换成 base64，适用于图片预览
 * @param file 文件或者 Blob 对象
 * @returns 成功返回 base64，否则返回 null
 */
const getBase64 = (file?: File | Blob) => new Promise<string | null>((res) => {
    if (!file) res(null)

    const reader = new FileReader()

    reader.addEventListener('load', () => res(reader.result as string))
    reader.addEventListener('error', () => res(null))
    reader.readAsDataURL(file as File | Blob)
})

/**
 * 下载后端返回的 Blob 数据
 * @param blob Blob 对象
 * @param fileName 下载文件的名称
 * @returns 成功 true 失败 false
 */
const downloadBlob = (blob: Blob, fileName: string) => new Promise<boolean>((res) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)

    reader.addEventListener('load', () => {
        if (!reader.result) res(false)

        const a = document.createElement('a')
        a.download = fileName
        a.style.display = 'none'

        a.href = reader.result as string

        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        res(true)
    })

    reader.addEventListener('error', () => {
        res(false)
    })
})

export { getBase64, downloadBlob }

