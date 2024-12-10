<template>
  <div class="market-con">
    <Header>
      <div>Job Market</div>
      <div class="w-75 rounded-10 overflow-hidden">
        <a-input placeholder="Search" size="large" v-model:value="keywords">
          <template #suffix>
            <SIcon name="icon_search" class="font-size-4" />
          </template>
        </a-input>
      </div>
    </Header>
    <Listings type="Open Listings" market :keywords="keywords" />
  </div>
</template>
<script setup lang="ts">
import Listings from "../components/custom/Listings.vue";
import Header from "../components/Header.vue";
import SIcon from "@/components/SIcon.vue";

const keywords = ref("");
</script>
