<template>
    <div
        class="flex justify-between items-stretch p-4 relative cursor-pointer hover:bg-#FFF4EC"
        :class="{ 'bg-#FFF4EC': active }"
    >
        <ABadge :count="isUnRead ? 99 : 0" dot>
            <AAvatar size="large" :src="info.driverProfileImg" />
        </ABadge>
        <div
            class="flex-col justify-between items-start flex-1 m-x-4 w-20 ellipsis-text"
        >
            <span class="text-ellipsis">{{ info.driverName }}</span>
            <span class="ellipsis-text c-#A6A6A6">{{ info.content }}</span>
        </div>
        <div class="flex-col justify-between items-end flex-1">
            <span class="c-#A6A6A6 font-size-13px">{{ info.sendTime }}</span>
            <div>
                <ABadge
                    v-if="isUnRead"
                    type="danger"
                    :value="info.unReadCount"
                />
            </div>
        </div>
        <div class="absolute bottom-0 left-0 h-0.2 w-100% bg-#E4E3E6"></div>
    </div>
</template>

<script lang="ts" setup>
import type { MemberChatQueryPageResponse as ListRes } from '@/api'

type TalkInfo = NonNullable<ListRes['dataList']>[number]
const props = withDefaults(
    defineProps<{
        info: TalkInfo
        active?: boolean
    }>(),
    {
        info: () => ({})
    }
)

const isUnRead = computed(() => (props.info.unReadCount || 0) > 0)
</script>
