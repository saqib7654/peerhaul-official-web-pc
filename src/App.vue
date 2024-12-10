<script setup lang="ts">
import { computed, } from 'vue'
import { ConfigProvider, } from 'ant-design-vue';
import enGB from 'ant-design-vue/es/locale/en_GB'
import dayjs from 'dayjs'

import theme from '@/style/theme.json'

const dayLang = computed(() => { return 'en' })

dayjs.locale(dayLang.value)
</script>

<template>
    <div class="app">
        <ConfigProvider :theme="theme" :locale="enGB"
            :transformCellText="({ text }) => text || text?.length ? text : '---'">
            <RouterView />
        </ConfigProvider>
    </div>
</template>

<style scoped>
.app {
    height: 100vh;
    width: 100vw;
    position: relative;
}
</style>
