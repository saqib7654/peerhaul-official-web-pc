<template>
  <div class="detail-con">
    <div class="container py-80px">
      <div class="bg-#f5f5f5 p-32px rounded-8px">
        <a-row>
          <a-col :span="8">
            <div class="w-full h-full">
              <img
                :src="
                  job.photoOfItemList[0] + '?imageMogr2/thumbnail/1024x2048'
                "
                alt=""
                class="w-full h-full rounded-8px object-cover" />
            </div>
          </a-col>
          <a-col :span="16">
            <div
              class="grid grid-cols-2 ml-16px bg-#FFFFFF p-40px rounded-8px gap-20px h-full">
              <div
                v-if="mode !== 'market'"
                class="position-absolute top-24px right-24px dropdown-con">
                <Dropdown
                  placement="bottomRight"
                  :trigger="['click']"
                  :get-popup-container="getPopupContainer">
                  <!-- <SIcon name="icon_more" class="font-size-6" /> -->
                  <p class="color-#0000ff cursor-pointer">Edit</p>
                  <template #overlay>
                    <Menu>
                      <MenuItem
                        v-for="item in dropdownMenuList"
                        :disabled="item.disabled"
                        :key="item.id"
                        @click="handleClick(item.id)">
                        <div class="flex-y-center">
                          <SIcon :name="item.icon" class="font-size-6" />
                          <span class="ml-4 font-size-4">{{ item.label }}</span>
                        </div>
                      </MenuItem>
                    </Menu>
                  </template>
                </Dropdown>
              </div>

              <div>
                <p class="font-size-5 font-bold mb-24px color-text capitalize">
                  {{ job.descriptiveTitle }}
                </p>

                <div class="flex mb-24px">
                  <div
                    class="font-18px color-#0000ff bg-#f0f2f5 rounded-6px p-x-12px p-y-7px"
                    v-if="price">
                    <span class="color-text">{{ job.amountTitle }}:</span>

                    <p class="text-18px color-#0000ff font-bold m-0 inline-block ml-5px">
                      ${{ job.displayAmount }}
                    </p>
                    <span v-if="job.tipOrBonus" class="font-400">
                      + <span class="color-primary">{{ priceToFloat(job.tipOrBonus)}}</span>
                    </span>
                  </div>
                </div>

                <p class="color-#9E9B9B mb-32px">{{ job.itemDescription }}</p>

                <p class="color-text font-bold">
                  Size:
                  <span class="color-#9E9B9B font-400">
                    {{ job.entireSizeDesc }}
                  </span>

                </p>
              </div>

              <div class="flex flex-col">
                <h2 class="font-size-20px color-#9E9B9B font-400 mb-32px">
                  Delivery Details
                </h2>
                <!-- <div class="mb-4">
                  <span class="label">Order/Ref No:</span>
                  <span>{{ job.orderRefNumber }}</span>
                </div> -->

                <p class="color-text">
                  Delivery Deadline:
                  <span class="color-#9E9B9B">{{
                    delivery.deliveryDeadlineTime ?? 'No deadline'
                  }}</span>
                </p>
                <p class="color-text">
                  Pickup Window:
                  <span class="color-#9E9B9B">
                    {{ extractTime(delivery.pickupStartTime) }} -
                    {{ extractTime(delivery.pickupEndTime) }}</span
                  >
                </p>
                <p class="color-text">
                  Quantity:
                  <span class="color-#9E9B9B">{{ job.quantityOfItems }}</span>
                </p>

                <div class="m-b-6" v-if="job.status === 'READY_PAY'">
                  <AButton type="primary" @click="isShowPayModal = true"
                    >Pay</AButton
                  >
                </div>
                <p class="color-text">
                  Ad View:
                  <span class="text-#0000FF font-bold">
                    {{ job.viewsCount }}
                  </span>
                </p>
                <p class="color-text m-0">
                  Date Posted:
                  <span class="color-#9E9B9B">
                    {{ job.createTime }}
                  </span>
                </p>

                <div>
                  <hr class="mr-100px my-32px border-#EBEDF4" />
                </div>

                <div
                  class="flex-x-between px-32px py-24px bg-#E8EFFB rounded-6px">
                  <div class="border">
                    <a-tooltip placement="top">
                      <template #title>
                        <p class="font-size-14px max-w-100px m-0">
                          {{
                            mode === 'market'
                              ? job.pickupCity === job.dropOffCity &&
                                job.pickupArea
                                ? job.pickupArea
                                : job.pickupCity
                              : job.pickupLocation
                          }}
                        </p>
                      </template>
                      <p
                        class="font-size-14px max-w-100px m-0 line-clamp-3 cursor-pointer">
                        {{
                          mode === 'market'
                            ? job.pickupCity === job.dropOffCity &&
                              job.pickupArea
                              ? job.pickupArea
                              : job.pickupCity
                            : job.pickupLocation
                        }}
                      </p>
                    </a-tooltip>
                  </div>
                  <SIcon
                    name="icon_line_arrow"
                    class="font-size-[17px] p-x-10px" />
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
                        class="font-size-14px max-w-100px m-0 line-clamp-3 cursor-pointer">
                        {{
                          mode === 'market'
                            ? job.pickupCity === job.dropOffCity &&
                              job.dropOffArea
                              ? job.dropOffArea
                              : job.dropOffCity
                            : job.dropOffLocation
                        }}
                      </p>
                    </a-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <DeleteConfirmModal
      v-if="modal.visible"
      :modal="modal"
      @confirm="handleDelete" />
    <NoShowModal
      v-if="noShowModal.visible"
      :modal="noShowModal"
      @confirm="handleNoShow" />
    <PayModal
      v-model:open="isShowPayModal"
      :job-uid="job.uid"
      :amount="price"
      :delivery="job.estimatedPrice"
      @success="$emit('update')" />
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Dropdown, Menu, MenuItem, message, Modal } from 'ant-design-vue';

import PayModal from '@/components/custom/PayModal.vue';
import SIcon from '@/components/SIcon.vue';
import DeleteConfirmModal from '../../components/DeleteConfirmModal.vue';
import NoShowModal from '../../components/NoShowModal.vue';
import { activateApi, deactivateApi } from '@/api/member/job';
import userStore from '@/store/userStore';
import { textCopyFun } from '@/utils/utils';
import { priceTitle } from '@/utils/price-title';
import { priceToFloat } from '@/utils/price-to-float';

import { MessageType } from 'ant-design-vue/es/message/interface';

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
  (e: 'update'): void;
}>();

const store = userStore();

// pay
const unwatch = watch(
  () => props.job,
  (val) => {
    if (
      val?.status === 'READY_PAY' &&
      store.userInfo?.memberId === val?.memberId
    ) {
      Modal.confirm({
        title: 'Payment Required',
        content:
          'This job must be paid before it can be discovered by drivers.',
        onOk: () => {
          isShowPayModal.value = true;
        },
      });
      unwatch();
    }
  },
  { immediate: true }
);
const isShowPayModal = ref(false);

const getPopupContainer = () =>
  document.querySelector('.dropdown-con') as HTMLElement;

// 订单价格和标题
// const priceTitle = computed(() => {
//   if (props.job.isExpressListing === '1') {
//     return 'Express Delivery Cost';
//   }
//   switch (props.job.status) {
//     case 'NEW':
//       return 'Suggest Price';
//     case 'BID':
//       return 'Best Bid';
//     default:
//       return 'Price';
//   }
// });
const price = computed(() => {
  const {
    estimatedPrice,
    bestPrice,
    memberPayAmount,
    status,
    isExpressListing,
  } = props.job;
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
});

// modal
const modal = reactive({
  visible: false,
});
const noShowModal = reactive({
  visible: false,
});

const menuList: {
  id: string;
  label: string;
  icon: string;
  disabled?: boolean;
}[] = [
  { id: '1', label: 'Edit listing', icon: 'icon_edit' },
  { id: '2', label: 'Share listing', icon: 'icon_share' },
  { id: '3', label: 'Deactivate listing', icon: 'icon_deactivate' },
  { id: '4', label: 'Delete listing', icon: 'icon_delete' },
  { id: '5', label: 'Driver No-Show', icon: 'icon_user_delete' },
];
const dropdownMenuList = computed(() => {
  menuList[2] = {
    ...menuList[2],
    icon: props.job.activate === '1' ? 'icon_deactivate' : 'icon_activate',
    label:
      props.job.activate === '1' ? 'Deactivate listing' : 'Activate listing',
    disabled: !['NEW', 'BID', 'READY_PAY'].includes(props.job.status),
  };

  menuList[3].disabled = ['IN_TRANSIT', 'DELIVERED', 'COMPLETE'].includes(
    props.job.status
  );

  return store.token
    ? menuList
    : [{ id: '2', label: 'Share listing', icon: 'icon_share' }];
});

const { execute: deactivate, isLoading: isDeactivating } = useAsyncState(
  async () => {
    const [, res] = await deactivateApi({ uid: props.job.uid });
    if (res?.code === 200) {
      message.success('Deactivate success!');
    }
  },
  null,
  {
    immediate: false,
  }
);
const { execute: activate, isLoading: isActivating } = useAsyncState(
  async () => {
    const [, res] = await activateApi({ uid: props.job.uid });
    if (res?.code === 200) {
      message.success('Activate success');
    }
  },
  null,
  {
    immediate: false,
  }
);
let hideDeactivateLoading: MessageType;
watch([isDeactivating, isActivating], ([deactivating, activating]) => {
  if (deactivating || activating) {
    hideDeactivateLoading = message.loading(
      deactivating ? 'Deactivating...' : 'Activating...'
    );
  } else {
    hideDeactivateLoading?.();
    emit('update');
  }
});

const router = useRouter();
const handleClick = (key: string) => {
  switch (key) {
    case '1':
      router.push({ name: 'NewListing', query: { id: props.job.uid } });
      break;
    case '2':
      textCopyFun(location.href);
      break;
    case '3':
      props.job.activate === '1' ? deactivate() : activate();
      break;
    case '4':
      Object.assign(modal, { visible: true, record: props.job.uid });
      break;
    case '5':
      Object.assign(noShowModal, { visible: true, record: props.job.uid });
      break;
  }
};

const handleDelete = () => {
  modal.visible = false;
};
const handleNoShow = () => {
  noShowModal.visible = false;
};

const extractTime = (dateTimeStr: string) => {
  if (!dateTimeStr) return '--';
  const timeMatch = dateTimeStr.match(/\d{1,2}:\d{2}\s*(?:AM|PM)/i);
  return timeMatch ? timeMatch[0] : '--';
};
</script>
<style scoped lang="scss">
.detail-con {
  .label {
    font-weight: bold;
    margin-right: 5px;
    color: $font-color;
  }

  :deep(.ant-dropdown) {
    width: 300px;

    .ant-dropdown-menu {
      padding: 20px 0;

      .ant-dropdown-menu-item {
        line-height: 40px;
        padding: 0 40px;
        margin-bottom: 20px;

        &.ant-dropdown-menu-item-active {
          background: $info-color;
          color: #fff;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
