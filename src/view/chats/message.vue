<template>
    <div class="message-container">
        <div
            v-if="driverUid"
            class="relative overflow-y-auto h-100% p-x-2"
            ref="msgContainerRef"
        >
            <div class="p-b-30">
                <div
                    class="c-gray text-center p-y-2"
                    v-if="loading && currentPage > 2"
                >
                    loading...<LoadingOutlined />
                </div>
                <div class="c-gray text-center p-y-2" v-if="finished">
                    no more
                </div>
                <Message
                    v-for="item in reverseList"
                    :key="item.uid"
                    :info="item"
                />
            </div>
            <SendInput
                :driver-uid="driverUid"
                :chat-uid="chatUid"
                @update="
                    () => {
                        preScrollHeight = 0
                        fetch({ reset: true })
                    }
                "
            />
        </div>
        <div v-else class="h-100% w-100% flex items-center justify-start">
            <img :src="arrowPng" />
            <div class="text-center">
                <p>Please select a chat from the list</p>
                <p>to continue chatting</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SendInput from './components/SendInput.vue'
import Message from './components/Message.vue'
import {
    queryMessagePageApi,
    initChatApi,
    readMessageApi
} from '@/api/member/chat'
import arrowPng from '@/assets/pics/arrow.png'
import { throttle } from 'lodash-es'
import { LoadingOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
    jobUid?: string
    driverUid?: string
}>()

const emit = defineEmits<{
    (e: 'update'): void
}>()

const { state: chatUid, execute: getChatId } = useAsyncState(async () => {
    if (!props.driverUid) return
    const [, res] = await initChatApi({
        driverId: props.driverUid || '',
        jobUid: props.jobUid || ''
    })
    return res?.data.chatUid
}, '')
watch(
    () => props.driverUid,
    () => getChatId()
)
watch(chatUid, () => fetch({ reset: true }))

const { list, fetch, loading, finished, currentPage } = useList(
    async (pageNum, controller) => {
        if (!chatUid.value) return

        const [, res] = await queryMessagePageApi(
            { pageNum, chatUid: chatUid.value },
            {
                signal: controller.signal
            }
        )

        await readMessageApi({
            messageUidList:
                res?.data.dataList?.map(item => item.uid || '') || []
        })

        emit('update')
        return res?.data
    },
    {
        immediate: false
    }
)
const reverseList = computed(() => [...list.value].reverse())

// 在首屏轮询
let timer: any
const polling = () => {
    timer = setTimeout(async () => {
        if (currentPage.value > 2) return
        await fetch({ reset: true })
        polling()
    }, 5000)
}
watch(currentPage, val => val === 2 && polling())

// 记录当前滚动的位置
const msgContainerRef = ref<Element>()
const currentScrollTop = ref(0)
const scrollEvent = throttle(
    val => (currentScrollTop.value = val.target?.scrollTop),
    300
)
onMounted(() => {
    msgContainerRef.value?.addEventListener('scroll', scrollEvent)
})
onBeforeUnmount(() => {
    clearTimeout(timer)
    msgContainerRef.value?.removeEventListener('scroll', scrollEvent)
})

// 滚动到顶部后加载数据
watch(currentScrollTop, val => {
    if (val === 0) fetch()
})

// 加载更多后保持当前滚动位置
let preScrollHeight = 0
watch(
    reverseList,
    () => {
        msgContainerRef.value?.scrollTo({
            top:
                msgContainerRef.value.scrollHeight -
                preScrollHeight +
                currentScrollTop.value,
            behavior: 'instant'
        })
        preScrollHeight = msgContainerRef.value?.scrollHeight || 0
    },
    {
        flush: 'post'
    }
)
</script>

<style scoped lang="scss">
.message-container {
    height: calc(100vh - 92px);
    background-color: #fff4ec;
    position: relative;
    transform: scale(1);

    &:deep(.send-input) {
        width: 90%;
        left: 50%;
        position: fixed;
        bottom: 45px;
        transform: translateX(-50%);
        z-index: 12;
    }
}
</style>
