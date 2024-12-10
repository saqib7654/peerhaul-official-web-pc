<template>
    <div class="w-full h-18 flex-center header-con">
        <div
            class="w-100% p-x-25px h-full flex-x-between color-white flex-items-center font-size-5.5"
        >
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.header-con {
    background: url(@/assets/pics/login_bg.png) no-repeat center;
    background-size: cover;
}
</style>
