<template>
  <div class="header-con ml-3">
    <Space v-if="isLogin" align="start" :size="32" class="flex-y-center">
      <SIcon
        :class="{
          'c-#F86C00': $route.name === 'Message',
        }"
        @click="$router.push({ name: 'Message' })"
        name="icon_letter"
        class="font-size-7" />
      <APopover
        v-model:open="isNotificationOpen"
        trigger="click"
        placement="bottomRight">
        <ABadge
          color="#F86C00"
          :style="unreadCount > 0 ? {} : { lineHeight: '1' }"
          :count="unreadCount">
          <SIcon
            name="icon_message"
            class="font-size-7"
            :class="{ 'c-#F86C00': isNotificationOpen }" />
        </ABadge>
        <template #content>
          <div class="w-90 h-110 overflow-y-auto of-x-hidden bg-#fff">
            <Notification />
          </div>
        </template>
      </APopover>
      <Dropdown
        placement="bottomRight"
        :getPopupContainer="getPopupContainer"
        :trigger="['click']">
        <img
          class="avatar-img"
          :src="user.userInfo?.profileImg + '?imageMogr2/thumbnail/500x800'" />
        <template #overlay>
          <div class="actions">
            <div
              v-for="item in dropList"
              :key="item.key"
              class="action"
              @click="handleClick(item.key)">
              <SIcon :name="item.icon" class="font-size-5.5 mr-2" />
              <span>{{ item.title }}</span>
            </div>
          </div>
        </template>
      </Dropdown>
    </Space>
    <Space v-else align="start" :size="15" class="flex-y-center">
      <Button type="primary" size="large" @click="handleClick('login')"
        >LOGIN</Button
      >
      <Button type="primary" size="large" @click="handleClick('register')"
        >SIGN UP</Button
      >
    </Space>
    <contextHolder />
    <Setting v-if="user.token" :modal="settingModal" />
  </div>
</template>

<script lang="ts" setup>
import { h, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Modal, Button, Space, Dropdown } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import Notification from './Notification/index.vue';
import { getUnReadCountApi } from '@/api/member/notification';

import SIcon from '@/components/SIcon.vue';
import Setting from '../Setting.vue';

import userStore from '@/store/userStore';

import { logoutApi } from '@/api/login';

const router = useRouter();
const user = userStore();
const isLogin = computed(() => {
  return !!user.token;
});
const isNotificationOpen = ref(false);

const getPopupContainer = () =>
  document.querySelector('.header-con') as HTMLElement;

const dropList = [
  { title: 'My Profile', icon: 'icon_user_file', key: 'profile' },
  { title: 'My Transactions', icon: 'icon_price', key: 'transaction' },
  { title: 'My Banking', icon: 'icon_card', key: 'bank' },
  { title: 'Settings', icon: 'icon_setting', key: 'setting' },
  { title: 'Support', icon: 'icon_headset', key: 'support' },
  { title: 'Logout', icon: 'icon_logout', key: 'logout' },
];

const settingModal = reactive({
  visible: false,
});

const [modal, contextHolder] = Modal.useModal();
const handleClick = (key: string) => {
  switch (key) {
    case 'login':
      router.push({ name: 'Login' });
      break;
    case 'register':
      router.push({ name: 'Register' });
      break;
    case 'logout':
      modal.confirm({
        title: 'Logout Reminder',
        icon: h(ExclamationCircleOutlined),
        content: 'Are you sure you want to log out?',
        onOk() {
          handleLogout();
        },
      });
      break;
    case 'profile':
      router.push({ name: 'MyProfile' });
      break;
    case 'bank':
      router.push({ name: 'Payment' });
      break;
    case 'transaction':
      router.push({ name: 'MyTransaction' });
      break;
    case 'support':
      router.push({ name: 'Support' });
      break;
    case 'setting':
      settingModal.visible = true;
      break;
  }
};
// 退出登录
const handleLogout = async () => {
  const [err, res] = await logoutApi({});
  if (err === null && res.code === 200) {
    user.$reset();
    localStorage.clear();
    router.push('/home');
  }
};

// 未读通知
const { state: unreadCount, execute: getUnreadCount } = useAsyncState(
  async () => {
    if (!user.token) return 0;
    const [, res] = await getUnReadCountApi({});
    return res?.data.unReadCount || 0;
  },
  0,
  {
    resetOnExecute: false,
  }
);
const timer = setInterval(() => {
  getUnreadCount();
}, 5000);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="scss">
.header-con {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  // width: 100%;
  // height: 100%;
  :deep(.ant-space-item) {
    display: flex;
  }

  .avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 1px solid $primary-color;
    cursor: pointer;
  }

  .actions {
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 8px;
    width: 300px;
    overflow: hidden;

    .action {
      cursor: pointer;
      padding: 8px 16px;
      border-bottom: 1px solid #ececec;
      display: flex;
      align-items: center;

      &:last-child {
        border: 0;
      }

      &:hover {
        background: $primary-color;
        color: #fff;
      }
    }
  }
}
</style>
