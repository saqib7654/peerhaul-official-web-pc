<template>
  <Drawer v-model:open="modal.visible">
    <Spin :spinning="loading">
      <Form>
        <div class="font-bold font-size-5 mb-4">App Notifications</div>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_box" class="font-size-6 mr-2" />
              <span class="color-#666">Item Picked Up</span>
            </div>
            <Switch v-model:checked="formData.appItemPickedUp" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('appItemPickedUp')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_box" class="font-size-6 mr-2" />
              <span class="color-#666">Item Delivered</span>
            </div>
            <Switch v-model:checked="formData.appItemDelivered" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('appItemDelivered')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_page_search" class="font-size-6 mr-2" />
              <span class="color-#666">Job Search Matches</span>
            </div>
            <Switch v-model:checked="formData.appJobSearchMatches" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('appJobSearchMatches')" />
          </div>
        </FormItem>
        <div class="font-bold font-size-5 mb-4">Email Notifications</div>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_packet" class="font-size-6 mr-2" />
              <span class="color-#666">New Bid Received</span>
            </div>
            <Switch v-model:checked="formData.appNewBidReceived" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('appNewBidReceived')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_msg_dark" class="font-size-6 mr-2" />
              <span class="color-#666">Express Job Accepted</span>
            </div>
            <Switch v-model:checked="formData.emailExpressJobAccepted" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('emailExpressJobAccepted')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_box" class="font-size-6 mr-2" />
              <span class="color-#666">Item Picked Up</span>
            </div>
            <Switch v-model:checked="formData.emailItemPickedUp" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('emailItemPickedUp')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_box" class="font-size-6 mr-2" />
              <span class="color-#666">Item Delivered</span>
            </div>
            <Switch v-model:checked="formData.emailItemDelivered" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('emailItemDelivered')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_page_search" class="font-size-6 mr-2" />
              <span class="color-#666">Job Search Matches</span>
            </div>
            <Switch v-model:checked="formData.emailJobSearchMatches" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('emailJobSearchMatches')" />
          </div>
        </FormItem>
        <FormItem>
          <div class="flex-x-between">
            <div class="flex-y-center">
              <SIcon name="icon_star" class="font-size-6 mr-2" />
              <span class="color-#666">Review Driver</span>
            </div>
            <Switch v-model:checked="formData.emailReviewDriver" checked-children="ON" un-checked-children="OFF"
              checkedValue="1" unCheckedValue="0" @change="updateSetting('emailReviewDriver')" />
          </div>
        </FormItem>
      </Form>
    </Spin>
  </Drawer>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Drawer, Form, FormItem, Switch, Spin, message } from 'ant-design-vue'
import SIcon from '@/components/SIcon.vue';

import { getSettingApi, updateSettingApi } from '@/api/user'
import type { MemberMemberUpdateNotificationSettingRequest as SettingRes } from '@/api/index'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'update:visible', val: boolean): void
}>()

type ModalProps = {
  visible: boolean,
  record?: any
  title?: string
}

withDefaults(defineProps<{ modal: ModalProps }>(), {
  modal: () => {
    return {
      visible: false
    }
  }
})

const loading = ref(false)
const formData = reactive(<SettingRes>{})
const getSetting = async () => {
  loading.value = true
  try {
    const [err, res] = await getSettingApi({})
    if (err === null && res.code === 200) {
      Object.assign(formData, res.data)
    }
  } catch (err) { console.log(err) } finally { loading.value = false }

}
const updateSetting = async (key: keyof SettingRes) => {
  loading.value = true
  try {
    const params: SettingRes = {}
    params[key] = formData[key]
    const [err, res] = await updateSettingApi(params)
    if (err === null && res.code === 200) {
      message.success('Update Successfully')
    } else {
      formData[key] = formData[key] === '1' ? '0' : '1'
    }
  } catch (err) {
    console.log(err)
    formData[key] = formData[key] === '1' ? '0' : '1'
  } finally { loading.value = false }
}
onMounted(() => {
  getSetting()
})
</script>
<style scoped lang="scss"></style>