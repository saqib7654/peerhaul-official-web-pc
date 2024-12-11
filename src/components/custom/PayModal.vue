<template>
    <AModal :open="open" @update:open="val => $emit('update:open', val)" force-render title="Payment"
        class="paymentModal">
        <div class="modalBody">
            <div class="__left">
                <h3 class="font-size-18px color-#333333 font-medium mb-24px">Payment Methods</h3>
                <div class="payment-methods">
                    <div v-for="method in paymentMethods" :key="method.id" class="payment-option"
                        :class="{ 'active-border': selectedPaymentMethod === method.id }">
                        <img :src="method.imgSrc" alt="" :alt="method.label">
                        <label class="text-#000" :for="method.id">{{ method.label }}</label>
                        <input type="radio" :id="method.id" name="paymentMethod" v-model="selectedPaymentMethod"
                            :value="method.id">

                    </div>
                    <button class="h-52px w-full bg-transparent rounded-8px color-#000 cursor-pointer"
                        style="border: 1px solid #E4E3E6; font-family: Nunito;">+ Add New Card</button>
                </div>

                <!-- <div class="font-size-18px m-y-20px cost">
                    <div>
                        <div class="label">Price:</div>
                        <div class="price">${{ amount }}</div>
                    </div>
                </div> -->
                <!-- <div>
                <div class="label">Delivery:</div>
                <div class="price">${{ delivery }}</div>
            </div> -->

            </div>

            <!-- <div class="c-gray font-size-14px m-y-15px m-t-40px flex items-center justify-between">

                <span class="c-#0000FF cursor-pointer" @click="$router.push({ name: 'Payment' })"
                >Add a Card</span
            >
            </div> -->
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
            <!-- <div ref="stripeRef"></div>
            <div class="c-gray fs-26 m-t-40px">
                Your payment will be securely held by Stripe until it is released to
                the driver upon successful completion of your delivery.
            </div>
            <div class="c-gray fs-26 m-t-20px m-b-35px">
                Please refer to our <span class="c-#0000FF cursor-pointer">Payment Terms</span> for
                further information.
            </div> -->
            <div class="flex flex-col">
                <h3 class="font-size-18px color-#333333 font-medium mb-24px">Delivery Cost</h3>
                <div class="grid cols-1 gap-8px">
                    <div class="flex justify-between items-center">
                        <p class="mb-0" style="line-height: 1.68;">Delivery</p>
                        <span class="text-#4B4B4B font-medium">${{ deliveryCharge }}</span>
                    </div>
                    <div
                        class="flex justify-between items-center border-b-1px border-#E4E3E6 border-b-solid pb-8px mb-8px">
                        <p class="mb-0" style="line-height: 1.68;">Tip/Bonus</p>
                        <span class="text-#4B4B4B font-medium">${{ tip }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="mb-0" style="line-height: 1.68;">Total Due:</p>
                        <strong class="text-#4B4B4B font-bold font-size-20px">${{ totalDue.toFixed(2) }}</strong>
                    </div>
                </div>
                <div class="text-center md:mt-auto mt-4">
                    <AButton type="primary" class="w-full h-45px" @click="pay()" :loading="isPaying">Pay Now</AButton>
                </div>
            </div>
        </div>

        <template #footer>
            <p class="c-gray font-size-14px text-center m-0 pb-20px">
                Please refer to our <span class="c-#0000FF cursor-pointer">Payment Terms</span> for
                further information.
            </p>
        </template>
    </AModal>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { getCardListApi } from '@/api/user'
import { appPayApi } from '@/api/member/jobOrder'
import { message } from 'ant-design-vue'
import { sleep } from '@/utils/time'
import { chunk } from 'lodash-es'
import img1 from '../../assets/icons/icon_mc.svg'
import img2 from '../../assets/icons/icon_pp.svg'
import img3 from '../../assets/icons/icon_gp.svg'
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
        if (!(stripe && cardElement)) return

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

const selectedPaymentMethod = ref('');
const paymentMethods = ref([
    { id: 'card', label: '**** **** ****1106', imgSrc: img1 },
    { id: 'paypal', label: 'JohnK@gmail.com', imgSrc: img2 },
    { id: 'googlePay', label: 'Google Pay', imgSrc: img3 }
]);

onMounted(() => {
    // Set the first payment method as the default selected option if the array is not empty
    if (paymentMethods.value.length > 0) {
        selectedPaymentMethod.value = paymentMethods.value[0].id;
    }
});

// Define reactive properties
const deliveryCharge = ref(20);
const tip = ref(5);

// Compute total due dynamically
const totalDue = computed(() => {
    // Ensure both values are defined before summing
    if (deliveryCharge.value == null || tip.value == null) {
        return 0; // Return 0 if any value is undefined
    }
    return deliveryCharge.value + tip.value;
});

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
    >div {
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
<style>
.paymentModal {
    max-width: 800px;
    width: 100% !important;
}

.paymentModal .ant-modal-content {
    padding: 0;
}

.paymentModal .ant-modal-header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F7F7;
    border-bottom: 1px solid #E4E3E6;
}

.paymentModal .ant-modal-header .ant-modal-title {
    color: #091437;
    font-size: 20px;
}

.paymentModal .ant-modal-close {
    top: 32px;
}

.paymentModal .modalBody {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 32px;
    padding-bottom: 32px;
}

.paymentModal .modalBody>div {
    padding-left: 32px;
    padding-right: 32px;
}

.paymentModal .modalBody .__left {
    border-right: 1px solid #E4E3E6;
}

.paymentModal .payment-methods {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
}

.paymentModal .payment-option {
    border: 1px solid #E4E3E6;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
}

.paymentModal .payment-option.active-border {
    border-color: #0000FF;
}

.paymentModal .payment-option img {
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
}

.paymentModal .payment-option label {
    height: 52px;
    padding-left: 73px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.paymentModal .payment-option input {
    position: absolute;
    right: 19px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

@media screen and (max-width: 991px) {
    .paymentModal {
        max-width: 95%;
    }
}

@media screen and (max-width: 575px) {
    .paymentModal .modalBody {
        grid-template-columns: 1fr;
        gap: 20px;
        padding-bottom: 10px;
    }
}
</style>
