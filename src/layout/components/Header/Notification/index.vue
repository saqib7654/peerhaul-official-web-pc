<template>
    <div class="bg-#F86C00 w-100% h-10 p-x-4">
        <span class="c-#fff line-height-10 fs-12">Notification</span>
        <AList :loading="loading" :data-source="list">
            <template #renderItem="{ item }">
                <NotificationItem
                    :info="item"
                    @click="
                        async () => {
                            jump(item)
                            await readApi({ uid: item.uid })
                            fetch({ refresh: true })
                        }
                    "
                />
            </template>
            <template #loadMore>
                <div class="text-center m-t-4">
                    <span v-if="finished">no more</span>
                    <AButton @click="() => fetch()" v-else
                        >loading more</AButton
                    >
                </div>
            </template>
        </AList>
    </div>
</template>

<script lang="ts" setup>
import NotificationItem from './NotificationItem.vue'
import { queryPageApi } from '@/api/member/notification'
import { readApi } from '@/api/member/notification'
import type { MemberNotificationQueryPageResponse as ListRes } from '@/api'

const router = useRouter()

const jumpJobDetail = (tab: string, jobUid: string = '') => {
    router.push({ name: 'JobMarketDetail', query: { tab, id: jobUid } })
}

const jump = ({ type, jobUid, driverId }: NonNullable<ListRes['dataList']>[number]) => {
    switch (type) {
        case 'BID_RECEIVED':
            jumpJobDetail('2', jobUid)
            break
        case 'EXPRESS_JOB':
            jumpJobDetail('1', jobUid)
            break
        case 'PICKED_UP':
        case 'DELIVERED':
            jumpJobDetail('3', jobUid)
            break
        case 'REMIND_REVIEW':
            router.push({
                name: 'DriverProfile',
                query: { uid: driverId, job: jobUid }
            })
            break
        case 'HAS_NEW_CHATE':
            router.push({
                name: 'Message',
                query: { jobId: jobUid, driverId: driverId }
            })
            break
    }
}

const { list, fetch, loading, finished } = useList(
    async (pageNum, _, { pageSize }) => {
        const [, res] = await queryPageApi({ pageNum, pageSize })
        return res?.data
    }
)
</script>
