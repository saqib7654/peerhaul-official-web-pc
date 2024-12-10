<template>
    <div class="pic-upload">
        <Spin :spinning="isUploading">
            <Upload
                :customRequest="handleUpload"
                accept="image/*"
                :show-upload-list="false"
            >
                <div class="upload-input">
                    <div>Upload photos</div>
                    <SIcon name="icon_upload" />
                </div>
            </Upload>
        </Spin>
        <div class="flex flex-wrap">
            <div v-for="(item, i) in picList" :key="i" class="img-con">
                <SIcon
                    name="icon_close"
                    class="icon-del"
                    @click="handleDelete(i)"
                />
                <img :src="item" alt="" class="img" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Upload, Spin } from 'ant-design-vue'
import type { UploadProps } from 'ant-design-vue'

import SIcon from '@/components/SIcon.vue'

import { uploadFileApi } from '@/api/common'

type PicUploadProps = {
    upload?: (file: File) => Promise<boolean>
    label?: string
    file?: File | string
    showDelete?: boolean
    showReupload?: boolean
    files?: string[]
}

const props = withDefaults(defineProps<PicUploadProps>(), {
    showDelete: false,
    files: () => []
})

const emit = defineEmits<{
    (e: 'update:file', file: File): void
    (e: 'update:files', files: File | string[]): void
    (e: 'delete'): void
}>()
const picList = computed({
    get() {
        return props.files
    },
    set(val) {
        console.log('piclist change', val)
        emit('update:files', val)
    }
})

const isUploading = ref(false)

// watchEffect(async () => {
//   console.log(uploadedFile.value)
//   if (typeof uploadedFile.value === 'string') {
//     imageUrl.value = uploadedFile.value
//   } else {
//     imageUrl.value = await getBase64(uploadedFile.value)
//   }
// })
// watchEffect(() => { uploadedFile.value = props.file })

const handleUpload = async (
    val: Parameters<Exclude<UploadProps['customRequest'], undefined>>[number]
) => {
    isUploading.value = true
    const fileData = new FormData()
    fileData.append('file', val.file as File)
    try {
        const [err, res] = await uploadFileApi(fileData as any)
        console.log(res)
        if (err === null && res.code === 200) {
            console.log('i done', res.data.url)
            picList.value = [...picList.value, res.data.url || '']
        }
    } catch (e) {
        // handle the exception
    } finally {
        isUploading.value = false
    }
}

const handleDelete = (i: number) => {
    picList.value.splice(i, 1)
}
</script>

<style scoped lang="scss">
.pic-upload {
    width: 100%;
    margin-top: 20px;

    :deep(.ant-upload-wrapper) {
        width: 100%;
        display: block;

        .ant-upload {
            width: 100%;
        }
    }

    .upload-input {
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        color: $info-color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0 12px;
        cursor: pointer;
    }

    .img-con {
        border: 2px dashed $info-color;
        padding: 8px;
        border-radius: 16px;
        width: 111px;
        height: 111px;
        margin: 20px 24px 20px 0;
        position: relative;

        .img {
            border-radius: 16px;
            width: 100%;
            height: 100%;
        }

        .icon-del {
            font-size: 24px;
            position: absolute;
            right: -6px;
            top: -6px;
        }
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

        > .image {
            width: 88px;
            height: 88px;

            img {
                width: 100%;
            }
        }

        :deep(.avatar-uploader) {
            .upLoad_plus {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 88px;
                height: 88px;
                border: 1px solid #dcdcdc;
                border-radius: 4px;
                font-size: 46px;
                color: #8d8d8d;
                cursor: pointer;
            }
        }
    }
}
</style>
