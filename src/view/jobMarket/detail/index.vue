<template>
  <div class="detail-con">
    <Header>
      <STabs
        :options="tabsList"
        v-model:selected="tabActive"
        @select="handleChange" />
    </Header>
    <ASpin :spinning="isFetching">
      <component
        ref="comRef"
        :is="componentName"
        :job="jobDetail"
        :mode="$route.query.mode"
        :delivery="deliveryDetail"
        @change="handleChange"
        @update="handleUpdate">
      </component>
    </ASpin>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

import Header from '../../components/Header.vue';
import STabs from '@/components/STabs.vue';
import JobDetail from './subPage/jobDetail.vue';
import Bids from './subPage/bids.vue';
import Manage from './subPage/manage.vue';
import Events from './subPage/events.vue';

import { getJobDetailApi, getDeliveryDetailApi } from '@/api/job';
import type {
  MemberJobDetailResponse as JobDetailRes,
  MemberJobDeliveryDetailResponse as DeliveryDetailRes,
} from '@/api/index';

import userStore from '@/store/userStore';

const store = userStore();
const route = useRoute();
const router = useRouter();

const tabsAll = [
  { key: '1', label: 'Job Details', com: JobDetail },
  { key: '2', label: 'Bids', com: Bids },
  { key: '3', label: 'Manage Delivery', com: Manage },
  { key: '4', label: 'Delivery details & events', com: Events },
];
const tabActive = ref((route.query.tab as string) || '1');
const tabsList = computed(() => {
  return store.token
    ? route.query.mode === 'market'
      ? tabsAll.slice(0, -1)
      : tabsAll
    : [{ key: '1', label: 'Job Details', com: JobDetail }];
});
watch(
  () => route.query.tab,
  (val) => (tabActive.value = val as string)
);
watch(tabActive, (val) =>
  router.replace({ query: { ...route.query, tab: val } })
);

const componentName = computed(
  () => tabsAll.find((item) => item.key === tabActive.value)?.com
);
const handleChange = (act: string) => {
  tabActive.value = act;
};

const loading = ref(false);
const jobDetail = ref<JobDetailRes>({ photoOfItemList: [] });
const getJobDetail = () => {
  return new Promise((resole, reject) => {
    getJobDetailApi({ uid: uid.value })
      .then(([err, res]) => {
        if (err === null && res.code === 200) {
          jobDetail.value = res.data;
          resole(res.data);
        } else {
          reject();
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};
const deliveryDetail = reactive(<DeliveryDetailRes>{});
const getDeliveryDetailFun = () => {
  return new Promise((resole, reject) => {
    getDeliveryDetailApi({ uid: uid.value })
      .then(([err, res]) => {
        if (err === null && res.code === 200) {
          Object.assign(deliveryDetail, res.data);
          resole(res.data);
        } else {
          reject();
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const uid = ref('');
const init = () => {
  uid.value = route.query.id as string;
  loading.value = true;
  Promise.all([getJobDetail(), getDeliveryDetailFun()])
    .then()
    .finally(() => {
      loading.value = false;
    });
};
watch(
  () => route.query.id,
  () => init()
);

const isFetching = ref(false);
const handleUpdate = async () => {
  isFetching.value = true;
  await getJobDetail();
  await getDeliveryDetailFun();
  isFetching.value = false;
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="scss">
.detail-con {
  width: 100%;

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
