<template>
  <div class="p-y-80px">
    <div class="container bg-#F5F5F5 p-32px rounded-8px">
      <div class="flex gap-24px">
        <div class="flex-1">
          <div class="flex justify-between m-b-20px bg-white rounded-6px">
            <div class="p-y-12px p-x-20px flex flex-1">
              <div class="relative w-[68px] h-[90px] m-r-5 rounded-6px">
                <img
                  :src="job.photoOfItemList[0]"
                  alt=""
                  class="w-full h-full object-cover rounded-6px" />
              </div>

              <div class="flex items-center flex-1 max-w-170px">
                <span class="text-[20px] font-bold truncate capitalize">
                  {{ job.descriptiveTitle }}
                </span>
              </div>
            </div>

            <div class="flex-x-between px-32px py-24px">
              <div class="border">
                <a-tooltip placement="top">
                  <template #title>
                    <p class="font-size-14px max-w-100px m-0">
                      {{
                        mode === 'market'
                          ? job.pickupCity === job.dropOffCity && job.pickupArea
                            ? job.pickupArea
                            : job.pickupCity
                          : job.pickupLocation
                      }}
                    </p>
                  </template>
                  <p
                    class="font-size-14px max-w-100px m-0 line-clamp-3 cursor-pointer color-#0000FF">
                    {{
                      mode === 'market'
                        ? job.pickupCity === job.dropOffCity && job.pickupArea
                          ? job.pickupArea
                          : job.pickupCity
                        : job.pickupLocation
                    }}
                  </p>
                </a-tooltip>
              </div>
              <SIcon name="icon_line_arrow" class="font-size-[17px] p-x-10px" />
              <div>
                <a-tooltip placement="top">
                  <template #title>
                    <p class="font-size-14px max-w-100px m-0">
                      {{
                        mode === 'market'
                          ? job.pickupCity === job.dropOffCity &&
                            job.dropOffArea
                            ? job.dropOffArea
                            : job.dropOffCity
                          : job.dropOffLocation
                      }}
                    </p>
                  </template>
                  <p
                    class="font-size-14px max-w-100px m-0 line-clamp-3 cursor-pointer color-#0000FF">
                    {{
                      mode === 'market'
                        ? job.pickupCity === job.dropOffCity && job.dropOffArea
                          ? job.dropOffArea
                          : job.dropOffCity
                        : job.dropOffLocation
                    }}
                  </p>
                </a-tooltip>
              </div>
            </div>
          </div>
          <GoogleMap
            ref="googleMapRef"
            :api-key="GOOGLE_MAP_KEY"
            style="width: 100%; height: 380px"
            :center="center"
            :zoom="mode === 'market' ? 15 : 12">
            <Circle
              v-if="mode === 'market'"
              :options="{
                center: center,
                radius: 300,
                strokeColor: '#F86C00',
                fillColor: '#f86c0096',
              }" />
          </GoogleMap>
        </div>

        <div class="flex-1 max-w-510px bg-white p-x-32px p-y-20px">
          <div
            class="flex gap-24px p-b-20px m-b-32px border-b-1px border-b-solid border-#EBEDF4">
            <div class="w-68px h-68px rounded-full relative overflow-hidden">
              <img
                :src="
                  job.driverProfileImg
                    ? job.driverProfileImg
                    : '/src/assets/pics/logo_mini.png'
                "
                alt=""
                class="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div class="flex-1 flex flex-col justify-center">
              <h3
                v-if="job.driverName"
                class="color-#333333 font-semibold capitalize text-20px m-b-6px">
                {{ job.driverName }}
              </h3>
              <h3
                v-else
                class="color-#333333 font-semibold capitalize text-20px m-b-6px">
                No Driver yet
              </h3>

              <span
                class="color-#9E9B9B underline font-secondary"
                v-if="job.driverName">
                Driver
              </span>
            </div>

            <div class="flex gap-12px items-center">
              <a
                v-if="job.driverCellPhone"
                :href="`tel:${job.driverCellPhone}`"
                class="color-black hover:color-black">
                <div
                  class="w-36px h-36px flex items-center justify-center rounded-full bg-#F0F2F5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.2774 19.3051C16.5402 21.0423 12.0914 19.41 8.34069 15.6593C4.58998 11.9086 2.95768 7.4598 4.69485 5.72262L5.83864 4.57883C6.62826 3.78921 7.92937 3.81008 8.74474 4.62545L10.5164 6.39708C11.3318 7.21246 11.3526 8.51356 10.563 9.30319L10.3173 9.54886C9.891 9.97519 9.84929 10.6629 10.2454 11.143C10.6275 11.606 11.0395 12.0672 11.4861 12.5139C11.9328 12.9605 12.394 13.3725 12.857 13.7546C13.3371 14.1507 14.0248 14.109 14.4511 13.6827L14.6968 13.437C15.4864 12.6474 16.7875 12.6682 17.6029 13.4836L19.3745 15.2553C20.1899 16.0706 20.2108 17.3717 19.4212 18.1614L18.2774 19.3051Z"
                      stroke="#070707"
                      stroke-width="1.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <Timeline v-if="isExpressListing">
            <TimelineItem :class="{ active: activeStatus >= 1 }">
              <div>
                <span class="font-bold font-secondary">Posted & Packed</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.pendingTime">
                  {{ job.pendingTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 2 }">
              <div>
                <span class="font-bold font-secondary">Driver Confirmed</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.pickTime">
                  {{ job.pickTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 3 }">
              <div>
                <span class="font-bold font-secondary">In Transit</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.InTransitTime">
                  {{ job.InTransitTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 4 }">
              <div>
                <span class="font-bold font-secondary">Delivered</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.deliveredTime">
                  {{ job.deliveredTime }}
                </p>
              </div>
            </TimelineItem>
          </Timeline>

          <Timeline v-else>
            <TimelineItem :class="{ active: activeStatus >= 1 }">
              <div>
                <span class="font-bold font-secondary">Driver Confirmed</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.pendingTime">
                  {{ job.pendingTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 2 }">
              <div>
                <span class="font-bold font-secondary">Packed</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.pickTime">
                  {{ job.pickTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 3 }">
              <div>
                <span class="font-bold font-secondary">In Transit</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.InTransitTime">
                  {{ job.InTransitTime }}
                </p>
              </div>
            </TimelineItem>
            <TimelineItem :class="{ active: activeStatus >= 4 }">
              <div>
                <span class="font-bold font-secondary">Delivered</span>
                <p
                  class="text-9px color-#9E9B9B m-0 font-secondary"
                  v-if="job.deliveredTime">
                  {{ job.deliveredTime }}
                </p>
              </div>
            </TimelineItem>
          </Timeline>

          <div v-if="mode !== 'market'" class="text-center m-t-10">
            <ASpace size="large">
              <Button
                v-if="job.status === 'ACCEPT_BID'"
                type="primary"
                size="large"
                @click="
                  () => {
                    if (job.orderStatus === 'FINISH') {
                      isShowPickWindow = true;
                    } else {
                      isShowPayModal = true;
                    }
                  }
                "
                >Prepare for transportation</Button
              >
              <Button
                v-if="
                  [
                    'ACCEPT_BID',
                    'READY_PICKUP',
                    'IN_TRANSIT',
                    'DELIVERED',
                  ].includes(job.status)
                "
                type="primary"
                size="large"
                @click="
                  $router.push({
                    name: 'Message',
                    query: { jobId: job.uid, driverId: job.driverId },
                  })
                "
                >Message driver</Button
              >
              <template v-if="job.status === 'COMPLETE'">
                <Button
                  type="primary"
                  size="large"
                  @click="$emit('change', '4')"
                  >View Delivery</Button
                >
                <Button
                  type="primary"
                  size="large"
                  @click="
                    $router.push({
                      name: 'DriverProfile',
                      query: { uid: job.driverId, job: job.uid },
                    })
                  "
                  >Complete Review</Button
                >
              </template>
            </ASpace>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PayModal
    :job-uid="job.uid"
    :amount="job.memberPayAmount"
    :delivery="job.estimatedPrice"
    v-model:open="isShowPayModal"
    @success="
      () => {
        $emit('update');
        isShowPickWindow = true;
      }
    " />
  <PickupWindowModal
    :delivery="delivery"
    v-model:open="isShowPickWindow"
    @success="$emit('update')" />
</template>
<script setup lang="ts">
import { computed } from 'vue';

import { Space, Timeline, TimelineItem, Button } from 'ant-design-vue';
import { GoogleMap, Circle } from 'vue3-google-map';

import SIcon from '@/components/SIcon.vue';

import PickupWindowModal from '../../components/PickupWindowModal.vue';
import PayModal from '@/components/custom/PayModal.vue';
import { GOOGLE_MAP_KEY } from '@/enum/common';

type PropsType = {
  job: any;
  delivery: any;
  mode: string;
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
  (e: 'change', val: string): void;
  (e: 'update'): void;
}>();

const isShowPayModal = ref(false);
const isShowPickWindow = ref(false);

// Google Map
const googleMapRef = ref();
const center = computed(() => ({
  lat: Number(props.job.pickupLatitude),
  lng: Number(props.job.pickupLongitude),
}));
watch([() => googleMapRef.value?.ready, () => props.job], ([isReady, job]) => {
  if (
    isReady &&
    googleMapRef.value.api &&
    job.pickupLatitude &&
    props.mode !== 'market'
  ) {
    const {
      pickupLatitude,
      pickupLongitude,
      dropOffLatitude,
      dropOffLongitude,
    } = job || {};

    const maps = googleMapRef.value.api;
    const directionsRenderer = new maps.DirectionsRenderer();
    const directionsService = new maps.DirectionsService();

    directionsRenderer.setMap(googleMapRef.value.map);

    directionsService
      .route({
        origin: {
          lat: Number(pickupLatitude),
          lng: Number(pickupLongitude),
        },
        destination: {
          lat: Number(dropOffLatitude),
          lng: Number(dropOffLongitude),
        },
        travelMode: 'DRIVING',
      })
      .then((res: any) => directionsRenderer.setDirections(res));
  }
});

const isExpressListing = computed(() => {
  return props.job.isExpressListing === '1';
});

const jobStatus = shallowReadonly({
  // normal job
  ACCEPT_BID: 1,
  // express job
  PAID: 1,
  // common
  READY_PICKUP: 2,
  IN_TRANSIT: 3,
  DELIVERED: 4,
} as const);

const activeStatus = computed(() => {
  return jobStatus[props.job.status as keyof typeof jobStatus];
});
</script>
<style scoped lang="scss">
:deep(.ant-timeline) {
  .ant-timeline-item {
    .ant-timeline-item-head {
      background-color: #999999;
      border-color: rgba($color: #000000, $alpha: 0);
    }

    &.active {
      .ant-timeline-item-head {
        background-color: $primary-color;
      }
    }
  }
}
// }
</style>
