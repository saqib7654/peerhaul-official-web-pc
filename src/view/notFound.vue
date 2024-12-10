<template>
    <Result status="404" title="Page Not Found" class="not-found">
        <template #extra>
            <Button type="primary">
                <RouterLink to="/">Back To Home</RouterLink>
            </Button>
        </template>
    </Result>
</template>

<script lang='ts' setup>
import { Result, Button } from 'ant-design-vue';
</script>

<style scoped>
.not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>