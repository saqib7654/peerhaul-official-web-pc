<template>
  <div class="w-full flex-center p-y-16px">
    <SList
      class="w-100% p-x-15px custom-listings"
      :data-source="[
        {
          photoOfItemList: [carPng],
          special: true,
          title: isContinue ? 'Continue Editing' : 'New Listing',
          isContinue,
        },
        ...list,
      ]"
      :finished="finished"
      :loading="loading"
      :grid="{ xxxl: 12, xxl: 8, xl: 5, lg: 4, md: 3 }"
      @load="fetchListings">
      <template #renderItem="{ item }">
        <div class="flex-center w-full m-y-5px">
          <CardItem
            class="card-item"
            :data="item"
            :market="market"
            :key="item.uid"
            :jump="!select"
            @click="$emit('select', item)" />
        </div>
      </template>
    </SList>
  </div>
</template>

<script lang="ts" setup>
import { queryPageApi, queryAllJobPageApi } from '@/api/member/job';
import { querySearchPageApi } from '@/api/driver/job';
import { snakeCase } from 'lodash-es';
import SList from '@/components/SList.vue';
import CardItem from '../CardItem.vue';
import carPng from '@/assets/pics/car.png';
import type {
  DriverJobQuerySearchPageRequest as SearchReq,
  MemberJobQueryPageResponse as ListRes,
} from '@/api';

export type SearchInfo = Partial<SearchReq>;
const props = withDefaults(
  defineProps<{
    type?: string;
    search?: SearchInfo;
    select?: boolean;
    keywords?: string;
    market?: boolean;
  }>(),
  {
    type: 'All Listings',
  }
);

defineEmits<{
  (e: 'select', info: NonNullable<ListRes['dataList']>[number]): void;
}>();

const isContinue = !!localStorage.getItem('listing-info');

const {
  list,
  fetch: fetchListings,
  loading,
  finished,
} = useList(async (pageNum) => {
  const type = props.type ? snakeCase(props.type).toUpperCase() : '';

  const [, res] = await (props.search
    ? querySearchPageApi({ ...props.search, pageNum })
    : props.market
    ? queryAllJobPageApi({ type, pageNum, keywords: props.keywords })
    : queryPageApi({ type, keywords: props.keywords, pageNum }));

  return res?.data;
});

watch(
  [() => props.type, () => props.search, () => props.keywords],
  () => {
    fetchListings({ reset: true });
  },
  {
    deep: true,
  }
);
</script>

<style scoped lang="scss">
.custom-listings {
  &:deep(.ant-list-item) {
    padding: 0;
  }

  .card-item {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
