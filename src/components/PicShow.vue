<template>
    <Space direction="vertical">
        <Space align="start" v-for="item in picList">
            <div class="label">{{ item.label }}:</div>
            <Space>
                <Image :height="88" :width="88" class="image" v-for="pic in item.pics" :src="pic" />
            </Space>
        </Space>
    </Space>
</template>

<script lang='ts' setup>
import { Space, Image } from 'ant-design-vue';

type PicShowProps = {
    picList?: {
        label: string
        pics: string[]
    }[]
}

withDefaults(defineProps<PicShowProps>(), {
    picList: () => []
})
</script>

<style scoped>
.label {
    color: #777777;
}

.image {
    border-radius: 8px;
    overflow: hidden;
}
</style>