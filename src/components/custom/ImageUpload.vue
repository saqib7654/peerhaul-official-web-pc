<template>
    <PicUpload :upload="handleUpload" :file="image" :label="label" />
</template>

<script lang='ts' setup>
import { message } from 'ant-design-vue';
import PicUpload from '../upload/PicUpload.vue';
import { uploadFileApi } from '@/api/common';

type ImageUploadProps = {
    image?: string
    label?: string
}
withDefaults(defineProps<ImageUploadProps>(), {
    image: ''
})

const emit = defineEmits<{
    (e: 'update:image', url: string): void
}>()

const handleUpload = async (file: File) => {
    const fileData = new FormData()

    fileData.append('file', file)

    const [err, res] = await uploadFileApi(fileData as any)

    if (err === null && res.code === 200) {
        message.success('上传成功')
        emit('update:image', res.data.url || '')
        return true
    }

    return false
}
</script>