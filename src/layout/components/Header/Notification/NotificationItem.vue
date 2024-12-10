<template>
    <div
        class="position-relative flex flex-col justify-between items-end p-y-4 cursor-pointer"
    >
        <div class="w-full flex">
            <ABadge type="danger" :dot="info.isRead !== '1'">
                <AAvatar :src="info.avatarUrl" />
            </ABadge>
            <div
                class="flex-col flex-1 w-0 m-l-10px justify-center items-start"
            >
                <ATypographyParagraph class="m-b-0!" :ellipsis="{ rows: 2 }">
                    {{ info.title }}
                </ATypographyParagraph>
                <ATypographyParagraph
                    class="c-#A6A6A6 m-b-0!"
                    :ellipsis="{ rows: 2 }"
                >
                    {{ info.content }}
                </ATypographyParagraph>
            </div>
        </div>
        <span class="c-#A6A6A6 font-size-3">{{ info.createTime }}</span>
        <div
            class="position-absolute bottom-0 left-0 w-100% h-0.2 bg-#A6A6A644"
        ></div>
    </div>
</template>

<script lang="ts" setup>
import type { MemberNotificationQueryPageResponse as ListRes } from '@/api'

type NotificationItem = NonNullable<ListRes['dataList']>[number]
withDefaults(
    defineProps<{
        info?: NotificationItem
    }>(),
    {
        info: () => ({})
    }
)
</script>
