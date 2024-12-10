<template>
    <div>
        <Header>Terms And Conditions</Header>
        <ASpin :spinning="isLoading">
            <div class="ma line-height-normal w-268 p-y-22" v-html="termsCondition"></div>
        </ASpin>
    </div>
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue'
import { getApi } from '@/api/admin/termsAndCondition'

const { state: termsCondition, isLoading } = useAsyncState(async () => {
    const [, res] = await getApi({})
    return res?.data.privacy || ''
}, '')
</script>
