<template>
    <AForm layout="vertical">
        <div class="text-center font-size-6 font-bold">
            Get An Instant Cost Estimate
        </div>
        <PriceEstimate v-model:form="formData" />
        <div class="text-center">
            <AButton type="primary" @click="toCreate">Create A Listing</AButton>
        </div>
    </AForm>
</template>

<script lang="ts" setup>
import PriceEstimate from '@/view/jobMarket/newListing/subPage/stepOne.vue'
import userStore from '@/store/userStore'

const formData = ref({})
const router = useRouter()
const user = userStore()

const toCreate = () => {
    localStorage.setItem('listing-info', JSON.stringify(formData.value))
    router.push({
        name: user.token ? 'NewListing' : 'Login'
    })
}
</script>
