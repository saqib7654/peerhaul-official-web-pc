<template>
    <div class="flex p-x-8">
        <div class="flex-1">
            <div class="w-100% p-4 flex-x-between">
                <span class="font-size-5">Recent Chats</span>
                <div class="w-60">
                    <AInput class="rounded-10 overflow-hidden" placeholder="Search">
                        <template #suffix>
                            <SIcon name="icon_search" />
                        </template>
                    </AInput>
                </div>
            </div>
            <SList
                :data-source="list"
                @load="fetch"
                :show-end="false"
                :loading="loading"
                :finished="finished"
                :wrap="false"
            >
                <template #renderItem="{ item }">
                    <TalkItem
                        :info="item"
                        :active="item.uid === chatUid"
                        @click="
                            () => {
                                chatUid = item.uid
                                driverId = item.driverId
                                jobUid = item.jobUid
                            }
                        "
                    />
                </template>
            </SList>
            <div v-if="finished && list.length === 0">Driver Not Found</div>
        </div>
        <div class="flex-1">
            <message
                :key="chatUid"
                :job-uid="jobUid"
                :driver-uid="driverId"
                @update="fetch({ refresh: true, isLoading: false })"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { queryPageApi } from '@/api/member/chat'
import TalkItem from './components/TalkItem.vue'
import message from './message.vue'
import SList from '@/components/SList.vue'
import SIcon from '@/components/SIcon.vue'

const { query } = useRoute()

const chatUid = ref<string>()
const jobUid = ref<string>(query.jobId as string)
const driverId = ref<string>(query.driverId as string)

const { list, fetch, loading, finished } = useList(
    async (pageNum, _, { pageSize }) => {
        const [, res] = await queryPageApi({ pageNum, pageSize })
        return res?.data
    }
)
const timer = setInterval(() => {
    fetch({ refresh: true, isLoading: false })
}, 5000)
onUnmounted(() => {
    clearInterval(timer)
})
</script>
