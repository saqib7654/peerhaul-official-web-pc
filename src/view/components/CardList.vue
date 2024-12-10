<template>
    <div class="card-list">
        <div class="creat-card card-item" @click="handleClick">
            <SIcon name="icon_logo" class="font-size-25" />
            <div class="font-size-4 color-info-color font-bold text-center">
                CREATE NEW LISTING
            </div>
        </div>
        <Empty v-if="!list?.length" class="ml-20 mt-20" />
        <template v-else>
            <CardItem v-for="(item, i) in list" :key="i" :data="item" />
        </template>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Empty } from 'ant-design-vue'
import SIcon from '@/components/SIcon.vue'
import CardItem from './CardItem.vue'
type PropsType = {
    list: any[]
}
withDefaults(defineProps<PropsType>(), {
    list: () => []
})

const router = useRouter()
const handleClick = () => {
    router.push({ name: 'NewListing' })
}
</script>
<style scoped lang="scss">
.card-list {
    padding: 88px 64px;
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: auto;

    .creat-card {
        cursor: pointer;
        box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
        border-radius: 16px;
        width: 160px;
        height: 230px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0 26px;
        margin-right: 144px;
        margin-bottom: 28px;
    }
}
</style>
