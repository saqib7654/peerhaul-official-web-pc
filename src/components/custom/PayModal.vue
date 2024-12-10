<template>
    <AModal
        :open="open"
        :width="440"
        @update:open="val => $emit('update:open', val)"
        force-render
        title="Payment"
    >
    <div class="p-x-30px" >
        <div class="font-size-18px m-y-20px cost">
            <!-- <div>
                <div class="label">Delivery:</div>
                <div class="price">${{ delivery }}</div>
            </div> -->
            <div>
                <div class="label">Price:</div>
                <div class="price">${{ amount }}</div>
            </div>
        </div>

        <div
            class="c-gray font-size-14px m-y-15px m-t-40px flex items-center justify-between"
        >
            
            <!-- <span class="c-#0000FF cursor-pointer" @click="$router.push({ name: 'Payment' })"
                >Add a Card</span
            > -->
        </div>
        <!-- <ASpin :spinning="isFetching">
            <ASpace direction="vertical" class="w-100%">
                <div
                    class="debit-card"
                    v-for="item in cards"
                    @click="currentCard = item.uid"
                >
                    <div class="flex-center">
                        <img
                            class="w-46px h-39px"
                            src="@/assets/pics/bank.png"
                        />
                        <span class="fs-26 m-l-10px">{{
                            chunk(item.cardNumber?.split(''), 4)
                                .map(item => item.join(''))
                                .reverse()
                                .map((item, index) =>
                                    index === 0 ? item : '****'
                                )
                                .reverse()
                                .join(' ')
                        }}</span>
                    </div>
                    <ARadio :checked="currentCard === item.uid" />
                </div>
            </ASpace>
        </ASpin> -->
        <div ref="stripeRef"></div>
        <div class="c-gray fs-26 m-t-40px">
            Your payment will be securely held by Stripe until it is released to
            the driver upon successful completion of your delivery.
        </div>
        <div class="c-gray fs-26 m-t-20px m-b-35px">
            Please refer to our <span class="c-#0000FF cursor-pointer">Payment Terms</span> for
            further information.
        </div>
    </div>
        
        <template #footer>
            <div class="text-center">
                <AButton type="primary" @click="pay()" :loading="isPaying"
                    >Pay Now</AButton
                >
            </div>
        </template>
    </AModal>
</template>

<script lang="ts" setup>
import { getCardListApi } from '@/api/user'
import { appPayApi } from '@/api/member/jobOrder'
import { message } from 'ant-design-vue'
import { sleep } from '@/utils/time'
import { chunk } from 'lodash-es'
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js'

const stripeRef = ref<HTMLElement>()
let stripe: Stripe | null = null;
let cardElement: StripeCardElement | undefined = undefined;
onMounted(async () => {
    stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)
    const elements = stripe?.elements()
    cardElement = elements?.create('card', {
        hidePostalCode: true
    })

    
    stripeRef.value && cardElement?.mount(stripeRef.value)
    
    // const stripeIframe = stripeRef.value?.querySelector('iframe')

    // if(stripeIframe) {
    //     console.log(stripeIframe)

    //     stripeIframe.onload = function () {
    //         console.log(stripeIframe?.contentWindow?.document)
    //     }
    // }
})



type PayModalProps = {
    amount?: number
    jobUid?: string
    open?: boolean
    delivery?: number
}
const props = withDefaults(defineProps<PayModalProps>(), {
    amount: 0,
    delivery: 0
})

const emit = defineEmits<{
    (e: 'update:open', val: boolean): void
    (e: 'success'): void
}>()

const currentCard = ref<string>()

const { execute: pay, isLoading: isPaying } = useAsyncState(
    async () => {
        if(!(stripe && cardElement)) return

        const stripeRes = await stripe.createPaymentMethod({
            card: cardElement,
            type: 'card',
        })

        const [, res] = await appPayApi({
            jobUid: props.jobUid || '',
            cardUid: currentCard.value || '',
            paymentMethodId: stripeRes.paymentMethod?.id
        })

        if (res?.data.clientSecret) {
            await sleep(2000)
            message.success('Pay successful')
            emit('update:open', false)
            emit('success')
        }
    },
    null,
    { immediate: false }
)

// const { state: cards, isLoading: isFetching } = useAsyncState(async () => {
//     const [, res] = await getCardListApi({})
//     return res?.data
// }, [])
</script>

<style scoped lang="scss">
.debit-card {
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
    cursor: pointer;
}

.cost {
    > div {
        display: flex;
        margin-bottom: 15px;

        .label {
            width: 100px;
        }

        .price {
            color: #f86c00;
            font-weight: bold;
        }
    }
}
</style>
