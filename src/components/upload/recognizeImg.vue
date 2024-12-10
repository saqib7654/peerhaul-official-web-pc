<template>
    <div class="recognize_Img">
        <Upload
            :show-upload-list="false"
            :custom-request="handleUpload"
            :before-upload="handleFileCheck"
        >
            <Button type="primary" ghost>上传识别</Button>
        </Upload>
    </div>
</template>

<script setup lang="ts">
// import { reactive, toRefs, computed, ref } from "vue";
import { Upload, Button, message } from 'ant-design-vue'
// import SvgIcon from "../SvgIcon.vue";

type ExcelUploadProps = {
    upload?: (file: File) => Promise<boolean>
}

const props = withDefaults(defineProps<ExcelUploadProps>(), {
    upload: () => new Promise<boolean>(res => setTimeout(() => res(true), 1000))
})

const emit = defineEmits<{
    (e: 'uploadOk', val: any): void
}>()

const handleFileCheck = (file: File) => {
    //   const ext = file.name.match(/\.([^.]+)$/)?.[1];
    //   if (ext !== "xls" && ext !== "xlsx") {
    //     message.warn("请选择 .xls, .xlsx 后缀的 EXCEL 文件");
    //     return false;
    //   }
}

const handleUpload = async (val: { file: File }) => {
    const res = await props.upload(val.file as File)
    emit('uploadOk', res)
    //   console.log("[识别文件]", res);
}
</script>

<style lang="less" scoped></style>
<style lang="scss" scoped>
.recognize_Img {
}
</style>
