<template>
  <Layout class="layout">
    <LayoutHeader class="header p-inline-0! flex-center">
      <div class="w-full p-x-25px p-l-16px h-full flex-x-between items-center">
        <div>
          <img
            class="w-62.5 h-19.5 cursor-pointer"
            :src="LOGO"
            @click="
              $router.push({
                name: user.token ? 'MyListings' : 'Home',
              })
            " />
        </div>
        <div class="flex items-center">
          <div class="w-80">
            <Menu />
          </div>
          <Header />
        </div>
      </div>
    </LayoutHeader>
    <LayoutContent class="content">
      <div :class="`view ${isShowFooter ? '' : 'without-footer'}`">
        <RouterView />
      </div>
      <Footer v-if="isShowFooter" />
    </LayoutContent>
  </Layout>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { Layout, LayoutHeader, LayoutContent } from 'ant-design-vue';
import Header from './components/Header/index.vue';
import Menu from './components/Menu/index.vue';
import Footer from './components/Footer/index.vue';
import userStore from '@/store/userStore';

import LOGO from '@/assets/pics/logo.png';

const routerNameList = ['Support', 'Message'];
let router = useRouter();
const isShowFooter = computed(() => {
  const { name } = router.currentRoute.value;
  return !routerNameList.includes(name as string);
});

const user = userStore();
const route = useRoute();
watch(
  () => route.name,
  (val) => {
    if (val === 'Layout') {
      router.push({ name: user.token ? 'MyListings' : 'Home' });
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;

  .ant-layout-header {
    height: 92px;
  }
}

.header {
  background-color: #ffffff;
  box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
  position: relative;
}

.sider {
  // background: $primary-color url('@/assets/pics/menu_bg.png') no-repeat;
  background-size: cover;
  overflow-y: auto;
  // background: linear-gradient(180deg, $sub-color 0%, $primary-color 100%);

  .logo {
    @include flex-center-center;
    padding: 20px 0 15px;
    font-size: 26px;
    color: #ffffff;
  }

  .info {
    border-bottom: 0.5px solid #d8d8d8;
    margin-bottom: 16px;
    padding: 12px 24px;
    font-size: 18px;
    color: #ffffff;

    .avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid #ffbb67;
      margin-right: 12px;
    }
  }
}

.content {
  overflow: auto;

  .view {
    box-sizing: border-box;
    min-height: calc(100vh - 450px);
    background: #ffffff;

    &.without-footer {
      min-height: calc(100vh - 92px);
    }
  }
}
</style>
