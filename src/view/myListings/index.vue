<template>
  <div class="listing-con">
    <Header>
      <div class="w-full flex-x-between overflow-auto">
        <STabs :options="tabsList" v-model:selected="type" />
        <div class="flex-1 flex justify-end">
          <div class="w-80% max-w-240px rounded-10 overflow-hidden">
            <Input
              placeholder="Search"
              size="large"
              class="min-w-120px"
              v-model:value="keywords">
              <template #suffix>
                <SIcon name="icon_search" class="font-size-4" />
              </template>
            </Input>
          </div>
        </div>
      </div>
    </Header>
    <Listings :keywords="keywords" :type="type" />
  </div>
</template>
<script setup lang="ts">
import { Input } from 'ant-design-vue';
import Listings from '../components/custom/Listings.vue';

import SIcon from '@/components/SIcon.vue';
import STabs from '@/components/STabs.vue';
import Header from '../components/Header.vue';

const tabsList = [
  { key: '', label: 'All Listings' },
  { key: 'OPEN_LISTINGS', label: 'Open Listings' },
  { key: 'OPEN_BIDS', label: 'Open Bids' },
  { key: 'ACTIVE_DELIVERIES', label: 'Active Deliveries' },
  { key: 'COMPLETED', label: 'Completed' },
];

const type = ref('');
const keywords = ref('');
</script>
<style scoped lang="scss">
.listing-con {
  .tab-item {
    padding: 0 24px;
    border-radius: 24px;
    border: 1px solid #fff;
    line-height: 36px;
    cursor: pointer;

    &:hover,
    &.active {
      background: #fff;
      color: $info-color;
    }
  }
}
</style>
