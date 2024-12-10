<template>
    <AModal
        :visible="open"
        title="reviews"
        :footer="null"
        centered
        @update:visible="val => $emit('update:open', val)"
    >
        <SList
            class="p-y-10px"
            :data-source="list"
            @load="fetch"
            :show-end="false"
            :loading="loading"
            :finished="finished"
            :wrap="false"
        >
            <template #renderItem="{ item }">
                <div class="flex justify-between items-center">
                    <AFlex vertical>
                        <span>{{ item.evaluateDesc }}</span>
                        <span class="font-size-12px c-gray">{{ item.memberName }}</span>
                    </AFlex>
                    <ARate :value="item.score" disabled />
                </div>
            </template>
        </SList>
    </AModal>
</template>

<script lang="ts" setup>
import { queryPageApi } from '@/api/member/driver'
import SList from '@/components/SList.vue'

const props = defineProps<{
    driveId: string
    open: boolean
}>()

defineEmits<{
    (e: 'update:open', val: boolean): void
}>()

const { list, fetch, loading, finished } = useList(
    async (pageNum, _, { pageSize }) => {
        const [, res] = await queryPageApi({
            pageNum,
            pageSize,
            driverId: props.driveId
        })
        return res?.data
    }
)
</script>
