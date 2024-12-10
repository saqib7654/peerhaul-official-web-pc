<template>
    <div class="pic-upload">
        <Space align="center">
            <div class="label">{{ label }}: </div>
            <div class="Uploadbtn">
                <SvgIcon v-if="showDelete && isUploaded" class="delete-btn" icon-class="image-delete" @click="handleDelete" />
                <Space>
                    <Image v-if="isUploaded && imageUrl" :src="imageUrl || ''" :width="88" :height="88" />
                    <Upload class="avatar-uploader" :customRequest="handleUpload" accept="image/*" :show-upload-list="false"
                        :max-count="1">
                        <Button style="background-color: #FCFCFC;" v-if="showReupload && isUploaded">
                            reupload
                        </Button>
                        <div class="upLoad_plus" v-else-if="!isUploaded">
                            <LoadingOutlined v-if="isUploading"></LoadingOutlined>
                            <PlusOutlined v-else></PlusOutlined>
                        </div>
                    </Upload>
                </Space>
            </div>
        </Space>
    </div>
</template>

<script lang='ts' setup>
import { ref, watchEffect } from 'vue'
import { Upload, Space, Button, Image } from 'ant-design-vue'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue'
import SvgIcon from '../SvgIcon.vue'
import { getBase64 } from '@/utils/file'

import type { UploadProps } from 'ant-design-vue'

type PicUploadProps = {
    upload?: (file: File) => Promise<boolean>
    label?: string
    file?: File | string
    showDelete?: boolean
    showReupload?: boolean
}

const props = withDefaults(defineProps<PicUploadProps>(), {
    upload: () => new Promise<boolean>(res => setTimeout(() => res(true), 600)),
    label: 'Photo',
    showDelete: false,
    showReupload: true
})

const emit = defineEmits<{
    (e: 'update:file', file: File): void
    (e: 'delete'): void
}>()

const uploadedFile = ref<File | string | undefined>(props.file)
const imageUrl = ref<string | null>(null)
const isUploading = ref(false)
const isUploaded = ref(false)

watchEffect(async () => {
    console.log(uploadedFile.value)
    if (typeof uploadedFile.value === 'string') {
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

const handleDelete = () => {
    emit('delete')
}
</script>

<style scoped lang="scss">
.pic-upload {
    width: 100%;

    .label {
        color: #777777
    }

    .Uploadbtn {
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;

        .delete-btn {
            position: absolute;
            font-size: 18px;
            right: 0;
            top: 0;
            transform: translate(50%, -50%);
            cursor: pointer;
            z-index: 3;
        }

        >.image {
            width: 88px;
            height: 88px;

            img {
                width: 100%
            }
        }

        :deep(.avatar-uploader) {
            .upLoad_plus {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 88px;
                height: 88px;
                border: 1px solid #DCDCDC;
                border-radius: 4px;
                font-size: 46px;
                color: #8d8d8d;
                cursor: pointer;
            }
        }
    }
}
</style>