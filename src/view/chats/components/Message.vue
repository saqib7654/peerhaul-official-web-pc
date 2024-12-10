<template>
    <div
        class="message flex justify-start items-start p-y-2"
        :class="{
            'flex-row-reverse justify-end items-start': isOwn,
            'justify-center': !isMsg
        }"
    >
        <template v-if="isMsg">
            <AAvatar
                class="h-12 w-12"
                :src="isOwn ? info.senderProfileImg : info.receiverProfileImg"
            />
            <div
                class="flex-1 m-t-10 flex-col"
                :class="[
                    isOwn
                        ? 'flex justify-start items-end'
                        : 'flex justify-start items-start'
                ]"
            >
                <div class="msg">
                    <span v-if="info.contentType === 'TEXT'">
                        {{ info.content }}
                    </span>
                    <AImage
                        v-else-if="info.contentType === 'PIC'"
                        height="auto"
                        :width="144"
                        :src="info.content"
                    />
                </div>
                <div class="msg-time c-#666666 font-size-12px m-t-2">
                    {{ info.createTime }}
                </div>
            </div>
        </template>
        <ASpace class="w-100%" align="end" v-else direction="vertical">
            <div
                class="info"
                @click="
                    $router.push({
                        name: 'JobMarketDetail',
                        query: { id: info.jobUid }
                    })
                "
            >
                <div class="flex">
                    <div class="flex-col flex-1 p-r-8">
                        <span class="fw-bold c-#3D3D3D font-size-5 m-b-2">{{
                            info.jobTitle
                        }}</span>
                        <span class="c-#666666">{{
                            MsgTipMap[info.type as keyof typeof MsgTipMap]
                        }}</span>
                    </div>
                    <AImage
                        style="border-radius: 10px; object-fit: cover;"
                        :height="100"
                        :width="100"
                        :preview="false"
                        :src="info.jobPhotoList?.[0]"
                    />
                </div>
                <ADivider />
                <div class="c-#3D3D3D w-100% flex justify-end items-center">
                    Click to view details <RightOutlined class="m-l-1" />
                </div>
            </div>
            <span class="font-size-12px">{{ info.createTime }}</span>
        </ASpace>
    </div>
</template>

<script lang="ts" setup>
import { RightOutlined } from '@ant-design/icons-vue';
import type { MemberChatQueryMessagePageResponse as ListRes } from '@/api'

const MsgTipMap = {
    BID: 'You have received a new bid.',
    DRIVER_ACCEPT: 'A driver has accepted this job.',
    MEMBER_ACCEPT: 'You have accepted a bid.',
    DELIVERY_COMPLETED: 'Transportation has started.',
    WAIT_DRIVER_AUDIT:
        'The modification has been submitted and is awaiting confirmation from the driver.',
    COMPLETE_DROP_OFF: 'Drop off completed.'
}

type MsgItem = NonNullable<ListRes['dataList']>[number]
const props = withDefaults(
    defineProps<{
        info: MsgItem
    }>(),
    {
        info: () => ({})
    }
)

const isOwn = computed(() => props.info.isOwn === '1')
const isMsg = computed(() => props.info.type === 'MESSAGE')
</script>

<style scoped lang="scss">
.message {
    .msg {
        background-color: v-bind('isOwn ? ` #f86c00 ` : ` #999999`');
        color: #fff;
        padding: 10px 18px;
        max-width: 80%;
        border-radius: v-bind(
            'isOwn ? `16px 0 16px 16px` : `0 16px 16px 16px`'
        );
        font-size: 16px;
    }

    .info {
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0px 1px 2px 1px #c0c0c082;
        padding: 16px 24px;
        width: 400px;
        display: flex;
        flex-flow: column nowrap;
        cursor: pointer;
    }
}
</style>
