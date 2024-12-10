<template>
    <div class="card-item">
        <div class="delete" @click="deletable && $emit('delete')">
            {{ deletable ? 'Delete' : '' }}
        </div>
        <div class="mb-6">
            {{ formatCard(card.cardNumber) }}
        </div>
        <div class="flex-x-between mb-6">
            <div>
                <div class="label">Card Holder</div>
                <div>{{ card.firstName }} {{ card.lastName }}</div>
            </div>
            <div class="text-end">
                <div class="label">CVV</div>
                <div>{{ card.securityCode }}</div>
            </div>
        </div>
        <div>
            <div class="label">Valid Thru</div>
            <div>{{ card.expiryMonth }} {{ card.expiryYear }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { MemberCardQueryPageResponse as CardListRes } from '@/api/index'

type DebitCardProps = {
    card?: CardListRes[number]
    deletable?: boolean
    actived?: boolean
}
const props = withDefaults(defineProps<DebitCardProps>(), {
    card: () => ({}),
    deletable: false,
    actived: false
})

defineEmits<{
    (e: 'delete'): void
}>()

const formatCard = (accNo?: string) => {
    if (!accNo) {
        return
    }
    let result = '',
        index = 0
    if (accNo != undefined && accNo != null) {
        for (let i = 0; i < accNo.length; i++) {
            result += accNo.charAt(i)
            index++
            if (index == 4 && i + 1 != accNo.length) {
                result += ' '
                index = 0
            }
        }
    }
    return result
}

const cardCover = computed(() =>
    props.deletable ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.3)'
)
const coverDisplay = computed(() => props.actived ? 'flex' : 'none')
</script>

<style scoped lang="scss">
.card-item {
    background: $font-color;
    border-radius: 8px;
    padding: 30px 32px;
    margin-bottom: 24px;
    color: #ffffff;
    letter-spacing: 1.6px;
    position: relative;
    z-index: 0;
    border: 1px solid $sub-font-color;
    cursor: pointer;

    .delete {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: v-bind(cardCover);
        color: $danger-color;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        display: v-bind(coverDisplay);
    }

    &:hover {
        .delete {
            display: flex;
        }
    }

    .label {
        color: #607d8b;
        margin-bottom: 8px;
        letter-spacing: 0;
    }
}
</style>
