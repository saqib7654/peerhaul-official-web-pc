<template>
    <div class="excel-upload">
        <div class="uploading" v-if="isUploading">
            <LoadingOutlined style="margin-bottom: 18px; font-size: 48px; color: #B4B4B4;" />
            正在识别
        </div>
        <div class="uploaded" v-else-if="isUploaded">
            <CheckCircleFilled v-if="fileInfo.uploadRes" style="margin-bottom: 18px; font-size: 68px; color: #2B6EF0;" />
            <CloseCircleFilled v-else style="margin-bottom: 18px; font-size: 68px; color: #E22222;"/>
            <Upload :show-upload-list="false" :custom-request="handleUpload" :before-upload="handleFileCheck">
                <Button>重新上传</Button>
            </Upload>
            <div class="file">
                <div class="file-content">
                    <SvgIcon style="font-size: 32px;" icon-class="excel" />
                    <span class="file-name">{{ fileInfo.name }}</span>
                </div>
                <div class="result">{{ fileInfo.uploadRes ? '上传完成' : '上传失败' }}</div>
            </div>
        </div>
        <div class="before-upload" v-else>
            <SvgIcon style="font-size: 52px; margin-bottom: 18px;" icon-class="excel" />
            <Upload :show-upload-list="false" :custom-request="handleUpload" :before-upload="handleFileCheck">
                <Button>导入EXCEL</Button>
            </Upload>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Upload, Button, message } from 'ant-design-vue';
import { LoadingOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue'
import SvgIcon from './SvgIcon.vue';

import type { UploadProps } from 'ant-design-vue'

type ExcelUploadProps = {
    upload?: (file: File) => Promise<boolean>
}

const props = withDefaults(defineProps<ExcelUploadProps>(), {
    upload: () => new Promise<boolean>(res => setTimeout(() => res(true), 1000))
})

const isUploading = ref(false)
const isUploaded = ref(false)

const fileInfo = ref({
    name: '',
    ext: '',
    uploadRes: false
})

const handleFileCheck = (file: File) => {
    const ext = file.name.match(/\.([^.]+)$/)?.[1]

    if (ext !== 'xls' && ext !== 'xlsx') {
        message.warn('请选择 .xls, .xlsx 后缀的 EXCEL 文件')
        return false
    } else {
        fileInfo.value.name = file.name
        fileInfo.value.ext = ext
    }
}

const handleUpload = async (val: Parameters<Exclude<UploadProps['customRequest'], undefined>>[number]) => {
    isUploading.value = true

    const res = await props.upload(val.file as File)

    fileInfo.value.uploadRes = res
    isUploaded.value = true
    isUploading.value = false
}
</script>

<style scoped lang="scss">
.excel-upload {
    width: 440px;
    height: 300px;
    border-radius: 8px;
    opacity: 1;

    background: #FCFCFC;

    box-sizing: border-box;
    /* 描边 */
    border: 1px solid #DCDCDC;
    display: flex;
    align-items: center;
    justify-content: center;

    .before-upload,
    .uploading,
    .uploaded {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .uploaded {
        position: relative;
        width: 100%;
        height: 100%;
        justify-content: center;

        .file {
            position: absolute;
            width: 100%;
            height: 64px;
            border-top: 1px solid #DCDCDC;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            bottom: 0;
            box-sizing: border-box;
            padding: 0 16px;

            .file-content {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                .file-name {
                    margin-left: 10px;
                }
            }

            .result {
                color: #B4B4B4;
            }
        }
    }
}
</style>