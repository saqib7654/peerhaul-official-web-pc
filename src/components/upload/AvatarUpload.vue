<template>
    <Upload :max-count="1" :customRequest="handleUpload" accept="image/*" :show-upload-list="false">
        <div class="upload-btn">
            <img v-if="isUploaded || imageUrl" :src="imageUrl || ''" style="object-fit: cover; height: 88px; width: 88px;" />
            <LoadingOutlined style="font-size: 26px;" v-else-if="isUploading" />
            <PlusOutlined v-else style="font-size: 36px; color: rgb(122, 122, 122);" />
        </div>
    </Upload>
</template>

<script lang='ts' setup>
import { ref, watchEffect } from 'vue'
import { Upload } from 'ant-design-vue'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { getBase64 } from '@/utils/file'

import type { UploadProps } from 'ant-design-vue'

type PicUploadProps = {
    upload?: (file: File) => Promise<boolean>
    label?: string
    file?: File | string
}

const props = withDefaults(defineProps<PicUploadProps>(), {
    upload: () => new Promise<boolean>(res => setTimeout(() => res(true), 600))
})

const emit = defineEmits<{
    (e: 'update:file', file: File): void
}>()

const uploadedFile = ref<File | string | undefined>(props.file)
const imageUrl = ref<string | null>(null)
const isUploading = ref(false)
const isUploaded = ref(false)

watchEffect(async () => {
    if(typeof uploadedFile.value === 'string') {
        imageUrl.value = uploadedFile.value
    } else {
        imageUrl.value = await getBase64(uploadedFile.value)
    }
})
watchEffect(() => { uploadedFile.value = props.file })

const handleUpload = async (val: Parameters<Exclude<UploadProps['customRequest'], undefined>>[number]) => {
    isUploaded.value = false
    isUploading.value = true

    const res = await props.upload(val.file as File)

    if (res) {
        emit('update:file', val.file as File)
    }

    isUploaded.value = res
    isUploading.value = false
}
</script>

<style scoped lang="scss">
.upload-btn {
    height: 88px;
    width: 88px;
    border-radius: 50%;
    border: 2px dashed #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        border-color: #447ae6;
    }
}
</style>