<template>
  <dir class="container bg-[#F5F5F5] px-0 rounded-8px">
    <SList
      class="w-100%"
      :data-source="bidList"
      :loading="loading"
      :finished="finished"
      :grid="{ gutter: 16, column: 1 }"
      @load="fetch"
      v-if="bidList.length > 0">
      <template #renderItem="{ item }">
        <div class="card-item" @click="handleClick(item.uid)">
          <!-- left section -->
          <div class="left-section">
            <div class="image">
              <img :src="item.driverProfileImg" />
            </div>

            <div class="content">
              <div class="content-top">
                <span class="capitalize !font-semibold">{{
                  item.driverName
                }}</span>
                <a-rate :value="item.avgScore" disabled />
              </div>

              <div class="content-bottom">
                <p>
                  Delivery Date:
                  <span> {{ item.deliveryDate }}</span>
                </p>
              </div>
            </div>
          </div>

          <!-- right section -->
          <div
            class="rounded-6px p-x-15px p-y-5px bg-#f0f2f5 h-40px flex justify-center items-center">
            <p
              class="text-18px color-#0000ff font-bold mb-0 flex items-baseline gap-x-5px leading-[1]">
              <span> {{ priceToFloat(item.driverBidAmount) }}</span>
            </p>
          </div>
        </div>
      </template>
    </SList>

    <div v-else class="py-10">
      <AEmpty description="No Bids Recieved" />
    </div>

    <ViewBidModal
      v-model:visible="modal.visible"
      :modal="modal"
      @confirm="openPayment" />
  </dir>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue';

import ViewBidModal from '../../components/ViewBidModal.vue';

import { getJobBidListApi } from '@/api/job';
import SList from '@/components/SList.vue';
import { priceToFloat } from '@/utils/price-to-float';

import { acceptApi } from '@/api/member/jobBid';

type PropsType = {
  job: any;
  delivery: any;
  mode?: string;
};
const props = withDefaults(defineProps<PropsType>(), {
  job: () => {
    return {};
  },
  delivery: () => {
    return {};
  },
});

const emit = defineEmits<{
  (e: 'change', act: string): void;
  (e: 'update'): void;
}>();

const modal = reactive({
  title: 'View Bid',
  visible: false,
  bidUid: '',
  jobStatus: '',
});

const currentBid = ref('');

const handleClick = (bidUid: string) => {
  if (props.mode === 'market') return;
  currentBid.value = bidUid;
  modal.bidUid = bidUid;
  modal.jobStatus = props.job.status;
  modal.visible = true;
};
const openPayment = async () => {
  const [, res] = await acceptApi({ uid: currentBid.value });
  if (res?.code === 200) {
    message.success('accept successful');
    modal.visible = false;
    emit('change', '3');
    emit('update');
  }
};

const {
  list: bidList,
  fetch,
  loading,
  finished,
} = useList(async (pageNum) => {
  if (!props.job.uid) return;
  const [, res] = await getJobBidListApi({ pageNum, jobUid: props.job.uid });
  return res?.data;
});
watch(
  () => props.job.uid,
  () => fetch({ reset: true })
);
</script>
<style scoped lang="scss">
.card-item {
  width: 100%;
  padding: 16px 48px 16px 16px;
  margin: 12px 0;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .left-section {
    display: flex;
    gap: 20px;

    .image {
      img {
        width: 60px;
        height: 60px;
        border-radius: 6px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-top {
        display: flex;
        align-items: center;
        gap: 12px;

        span {
          font-size: 18px;
          font-weight: 500;
          color: black;
        }
      }

      &-bottom {
        p {
          margin: 0;
          font-size: 16px;
          color: #9e9b9b;

          span {
            color: #333333;
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;

    // .price {
    //   font-size: 18px;
    //   color: #0000ff;
    //   padding: 5px 15px;
    //   background-color: #f0f2f5;
    //   border-radius: 6px;
    // }
  }
}
</style>
