<template>
  <div class="card-con" @click="handleClick">
    <div class="card-item" :class="{ 'bg-#FFA534': isContinue }">
      <div class="img-con relative">
        <img
          :src="data.photoOfItemList[0] + '?imageMogr2/thumbnail/500x800'"
          alt=""
          class="img"
          :class="{ 'img-car': isSpecial }" />
        <img
          v-if="data.isExpressListing === '1'"
          class="absolute top-0 left-0 h-17 w-17"
          src="@/assets/pics/express-tag-2.png" />
        <div
          v-if="data.status === 'READY_PAY' || data.activate === '0'"
          class="absolute w-100% h-10 bg-#ff00007d bottom-0 left-0 text-center c-#fff line-height-10">
          {{ data.status === 'READY_PAY' ? 'Not Paid' : 'Inactive' }}
        </div>
      </div>
      <div
        class="flex-col items-center justify-center h-90px w-100% ellipsis-text p-x-4 font-size-14px p-y-8px">
        <div
          v-if="isSpecial"
          class="font-size-18px color-info h-full flex align-start justify-center"
          :class="{ 'c-#fff!': isContinue }">
          {{ data.title }}
        </div>
        <template v-else>
          <div class="font-size-18px w-100% text-center ellipsis-text flex-1">
            {{ data.descriptiveTitle }}
          </div>
          <div class="p-y-0.5 font-bold font-size-16px flex-1">
            <span v-if="computedPrice(data) > 0" class="color-sub_text"
              >${{ fixTwoRadix(computedPrice(data)) }}</span
            >
            <template
              v-if="
                data.isExpressListing === '1' &&
                data.tipOrBonus &&
                data.tipOrBonus > 0
              ">
              <span v-if="computedPrice(data) > 0" class="p-x-1 color-info"
                >+</span
              >
              <span class="color-primary">{{ priceToFloat(data.tipOrBonus) }}</span>
            </template>
          </div>
          <div class="flex-center font-size-13px w-94% flex-1">
            <div class="color-info-color ellipsis-text flex-1 text-right">
              {{
                market
                  ? data.pickupCity === data.dropOffCity && data.pickupArea
                    ? data.pickupArea
                    : data.pickupCity
                  : data.pickupAddressName
              }}
            </div>
            <SvgIcon class="m-x-5px" icon-class="icon_line_arrow" />
            <div class="color-info-color ellipsis-text flex-1 text-left">
              {{
                market
                  ? data.pickupCity === data.dropOffCity && data.dropOffArea
                    ? data.dropOffArea
                    : data.dropOffCity
                  : data.dropOffAddressName
              }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { fixTwoRadix } from '@/utils/custom';
import SvgIcon from '@/components/SvgIcon.vue';
import { priceToFloat } from '@/utils/price-to-float';

const emit = defineEmits<{
  (e: 'click', val: Record<string, any>): void;
}>();

type PropsType = {
  data: Record<string, any>;
  jump: boolean;
  market?: boolean;
};
const props = withDefaults(defineProps<PropsType>(), {
  data: () => ({}),
  jump: true,
});

const isSpecial = computed(() => !!props.data.special);
const isContinue = computed(() => !!props.data.isContinue);
const imgDisplay = computed(() => (isSpecial.value ? 'contain' : 'cover'));

const computedPrice = (detail: any) => {
  const {
    estimatedPrice,
    bestPrice,
    memberPayAmount,
    status,
    isExpressListing,
  } = detail;
  if (isExpressListing === '1') return memberPayAmount;
  switch (status) {
    case 'NEW':
    case 'CANCEL':
      return estimatedPrice;
    case 'BID':
      return bestPrice;
    case 'ACCEPT_BID':
      return memberPayAmount;
    default:
      return memberPayAmount == 0 ? estimatedPrice : memberPayAmount;
  }
};

const router = useRouter();
const handleClick = () => {
  emit('click', props.data);
  if (isSpecial.value) return router.push({ name: 'NewListing' });
  props.jump &&
    router.push({
      name: 'JobMarketDetail',
      query: { id: props.data.uid, mode: props.market ? 'market' : '' },
    });
};
</script>
<style scoped lang="scss">
.card-con {
  width: 100%;
  height: auto;

  &:nth-child(4n) {
    margin-right: 0;
  }

  .card-item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img-con {
      position: relative;
      width: 100%;
      height: 0;
      flex: 1;
      top: 0;
      left: 0;
      cursor: pointer;
      border-radius: 16px 16px 0 0;

      .img {
        width: 100%;
        height: auto;
        aspect-ratio: 30 / 31;
        transition: transform 0.5s ease;
        object-fit: v-bind(imgDisplay);

        &:hover {
          transform: scale(1.1);
          border-radius: 0;
        }
      }

      .img-car {
        transform: scale(0.6) translateY(30px);

        &:hover {
          transform: scale(0.7) translateY(30px);
        }
      }

      .icon {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        position: absolute;
        top: 15px;
        left: -55px;
        background: $info-color;
        color: #fff;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
