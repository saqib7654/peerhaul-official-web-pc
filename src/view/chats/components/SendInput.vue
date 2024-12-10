<template>
    <AInput
        class="send-input"
        size="large"
        placeholder="Type your message here"
        @keyup.enter="() => sendMsg()"
        v-model:value="msgText"
        v-bind="$attrs"
    >
        <template #suffix>
            <ASpace size="large">
                <AUpload
                    :max-count="1"
                    :show-upload-list="false"
                    accept="image/*"
                    :before-upload="handleBeforeUpload"
                    :custom-request="handleUpload"
                >
                    <SIcon
                        class="font-size-6 cursor-pointer"
                        name="icon_link"
                    />
                </AUpload>
                <AButton
                    type="primary"
                    :loading="isLoading"
                    size="large"
                    class="w-16!"
                    @click="() => sendMsg(0, 'TEXT')"
                >
                    <template #icon>
                        <SIcon class="font-size-4" name="icon_send" />
                    </template>
                </AButton>
            </ASpace>
        </template>
    </AInput>
    <AModal title="Send Photo" v-model:open="isShowImage">
        <img class="w-100%" :src="msgImg" />
        <template #footer>
            <AButton
                class="w-16!"
                type="primary"
                :loading="isLoading"
                @click="() => sendMsg(0, 'PIC')"
                ><template #icon>
                    <SIcon class="font-size-4" name="icon_send" /> </template
            ></AButton>
        </template>
    </AModal>
</template>

<script lang="ts" setup>
import SIcon from '@/components/SIcon.vue'
import { sendMessageApi } from '@/api/member/chat'
import { message, type UploadProps } from 'ant-design-vue'
import { uploadFileApi } from '@/api/member/file'

defineOptions({
    inheritAttrs: true
})

const props = defineProps<
    Partial<{
        chatUid: string
        driverUid: string
    }>
>()

const emit = defineEmits<{
    (e: 'update'): void
}>()

const isShowImage = ref(false)
const msgText = ref('')
const msgImg = ref('')
watch(msgImg, val => {
    if (val) isShowImage.value = true
})
watch(isShowImage, val => {
    if (!val) msgImg.value = ''
})

const handleBeforeUpload: UploadProps['beforeUpload'] = file => {
    if (!/^image/.test(file.type)) return !message.warn('it should be image')
}
const handleUpload: UploadProps['customRequest'] = async file => {
    const fileData = new FormData()
    fileData.append('file', file.file)
    const [, res] = await uploadFileApi(fileData as any, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    msgImg.value = res?.data.url || ''
}

const { isLoading, execute: sendMsg } = useAsyncState(
    async (sendType: 'PIC' | 'TEXT' = 'TEXT') => {
        if (!(msgText.value || msgImg.value)) return

        const [, res] = await sendMessageApi({
            chatUid: props.chatUid,
            driverId: props.driverUid,
            content: sendType === 'PIC' ? msgImg.value : msgText.value,
            contentType: sendType
        })
        if (res?.code === 200) {
            isShowImage.value = false
            if (sendType === 'TEXT') msgText.value = ''
            if (sendType === 'PIC') msgImg.value = ''
            emit('update')
        }
    },
    null,
    {
        immediate: false
    }
)
</script>

<style scoped lang="scss">
.send-input {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    overflow: hidden;

    :deep(.var-field-decorator__line) {
        display: none;
    }
    :deep(.var-input__input) {
        --input-placeholder-color: #999999 !important;
    }
}
</style>
