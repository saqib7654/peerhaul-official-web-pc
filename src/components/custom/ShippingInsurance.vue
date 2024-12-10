<template>
    <ASpin :spinning="isLoading">
        <div class="shipping-content" v-html="content"></div>
    </ASpin>
</template>

<script lang="ts" setup>
import { getApi } from '@/api/admin/shippingInsurance'

const { state: content, isLoading } = useAsyncState(async () => {
    const [, res] = await getApi({})
    return res?.data.content
}, '')
</script>
