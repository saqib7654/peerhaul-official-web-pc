<template>
    <Header> Liability Insurance </Header>
    <ASpin :spinning="isLoading">
        <div
            class="ma line-height-normal w-268 p-y-22"
            v-html="liabilityInsurance"
        ></div>
    </ASpin>
</template>

<script lang="ts" setup>
import Header from '../../components/Header.vue'
import { getApi } from '@/api/admin/liabilityInsurance'

const { state: liabilityInsurance, isLoading } = useAsyncState(async () => {
    const [, res] = await getApi({})
    return res?.data.content || ''
}, '')
</script>
