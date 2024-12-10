<template>
  <div>
    <Header>Terms And Conditions</Header>
    <div class="font-size-4 w-268 ma p-y-22 color-#3d3d3d line-height-normal condition-con">
      <div class="font-bold m-y-8 font-size-6">Terms & Conditions</div>
      <div class="font-bold mb-4">Liability Notice:</div>
      <div class="mb-8">Please refer to the Peer Haul Terms & Conditions for a comprehensive statement of
        liabilities. Some key features of the Peer Haul liability policy include:</div>
      <div class="item">Peer Haul Inc. assumes no liability whatsoever for lost, damaged, stolen, missing, or otherwise
        compromised or devalued goods.</div>
      <div class="item">The end user accepts all liability for appropriate packaging, and for any damage to or loss of
        goods, except in the case of clearly demonstrated gross negligence by the driver.</div>
      <div class="item">The following protections can be considered by the end user:</div>
      <div class="item ml-8">The end user accepts all liability for appropriate packaging, and for any damage to or loss
        of goods, except in the case of clearly demonstrated gross negligence by the driver.</div>
      <div class="item ml-8">Consider the qualifications of the driver when selecting the winning bid; driver selection is
        your responsibility.</div>
      <div class="item ml-8">In case of unaccounted disappearance of the driver & associated loss of goods(where the goods
        have not been photo documented by the driver as delivered), a police report can be filed by the user with evidence
        of pickup from the app utilized.</div>
      <div class="item ml-8">In the case of a motor vehicle accident, the driver will be liable for damage to the goods,
        up to the declared value. The claim will be processed through the driver’s insurance.</div>
      <div class="item ml-8">In the case of a motor vehicle accident, the driver will be liable for damage to the goods,
        up to the declared value. The claim will be processed through the driver’s insurance.</div>
      <div class="item ml-8">Optional: You can require the driver to self-insure the goods against clearly demonstrable
        gross negligence by the driver, up to 25% of the declared value.</div>
      <div class="item ml-8">What if:</div>
      <div class="item ml-16">Car accident</div>
      <div class="item ml-16">Driver’s insurance pays.</div>
      <div class="item ml-16">How to manage / process this?</div>
      <div class="item ml-8">Driver steals item (never drops it off):</div>
      <div class="item ml-16">Car accident</div>
      <div class="item ml-16">Driver’s insurance pays.</div>
      <div class="item ml-16">How to manage / process this?</div>
      <div class="item ml-8">Item stolen after documented delivery:</div>
      <div class="item ml-16">User accepts loss</div>
      <div class="item ml-8">Item stolen after documented delivery:</div>
      <div class="item ml-16">Inadequate packaging: User liable</div>
      <div class="item ml-16">Weather damage (open truck or etc): User liable</div>
      <div class="item ml-16">Gross negligence by driver?</div>
      <div class="item">Optional: Specify minimum driver qualification who can bid (note:allowing less qualified drivers
        to bid does not obligate you to accept their bid)</div>
      <div class="item ml-8">Open to all drivers (ID verification</div>
      <div class="item ml-8">Trusted drivers (background check orgood rating (from PeerHaul or another driving service)
      </div>
      <div class="item ml-8">Elite / business partnerdrivers (background check, top rating& service record,
        deliveryinsured by driver).</div>
      <div class="item">Value:</div>
      <div class="item ml-8">Declared Value:</div>
      <div class="item ml-8">Note: Declared value should be aligned with fair market value in order to be considered
        credible. Note that packaging is the responsibility of the user, and drivers are not liable for damage resulting
        from inadequate packaging.</div>
      <div class="item">Proof of condition photos:</div>
      <div class="item ml-8">Upload photos to document the condition of the item. These won’t show in the public listing,
        but will be visible to the driver you select and will be available in case of any dispute over shipping damage.
      </div>
      <div class="mt-10 text-center">
        <span>Can't find what you're looking for? </span>
        <span class="color-info cursor-pointer" @click="goPage">Email us</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import Header from '../../components/Header.vue'
let router = useRouter()
const goPage = () => {
  router.push({ name: 'MyListings' })
}
</script>
<style setup lang="scss">
.condition-con {
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: $info-color;
      margin-right: 8px;
    }
  }
}
</style>