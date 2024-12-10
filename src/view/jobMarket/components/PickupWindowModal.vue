<template>
    <AModal
        title="Pickup Window"
        :open="open"
        @update:open="val => $emit('update:open', val)"
    >
        <div class="font-size-16px p-5">
            <div class="fw-600">Upload pre-shipment photos</div>
            <PicUpload v-model:files="uploadedImages" />
            <!-- <div class="m-t-10">
                <div class="fw-600 font-size-18px">Pickup Window</div>
                <div class="date-box">
                    <div>
                        <span class="fw-600">Pickup Deadline:</span>
                        {{ delivery.deliveryDeadlineTime }}
                    </div>
                </div>
            </div> -->
        </div>
        <template #footer>
            <div class="text-center">
                <AButton
                    :loading="isConfirming"
                    @click="confirmPick()"
                    type="primary"
                    >Confirm ready for pickup</AButton
                >
            </div>
        </template>
    </AModal>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue'
import PicUpload from '../newListing/components/PicUpload.vue'
import { pickupApi } from '@/api/member/job'

type PickupWindowModalProps = {
    delivery: any
    open?: boolean
}
const props = withDefaults(defineProps<PickupWindowModalProps>(), {
    delivery: () => ({})
})

const emit = defineEmits<{
    (e: 'update:open', val: boolean): void
    (e: 'success'): void
}>()

const uploadedImages = ref([])

const { execute: confirmPick, isLoading: isConfirming } = useAsyncState(
    async () => {
        const [, res] = await pickupApi({
            uid: props.delivery.uid,
            productImageList: uploadedImages.value
        })

        if (res?.code === 200) {
            message.success('ready successful')
            emit('update:open', false)
            emit('success')
        }
    },
    null,
    { immediate: false }
)
</script>

<style scoped lang="scss">
.date-box {
    box-shadow: 0px 1px 1px 0px #a5a5a587;
    padding: 8px;
}
</style>
