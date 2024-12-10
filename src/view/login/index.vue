<template>
    <div class="wh-full flex-center login-container">
        <div class="overflow-hidden flex form-con">
            <div class="flex-center">
                <router-view @change="val => $router.push({ name: val })"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.login-container {
    background: url('@/assets/pics/login_bg.png') no-repeat left;
    background-size: cover;
    position: relative;

    .form-con {
        position: relative;
        z-index: 1;
    }
}
</style>
