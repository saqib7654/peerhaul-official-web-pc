<template>
    <div class="input-con">
        <GoogleAutocomplete
            :value="location"
            :api-key="GOOGLE_MAP_KEY"
            :isFullPayload="true"
            placeholder="Pickup location"
            @set="getPayload($event)"
        />
        <SIcon name="icon_position" class="font-size-6 ml-a" />
    </div>
</template>

<script lang="ts" setup>
import { GoogleAutocomplete } from 'vue3-google-autocomplete'
import { GOOGLE_MAP_KEY } from '@/enum/common'

type GoogleInputProps = {
    location?: string
    extra?: Record<string, string>
}

defineProps<GoogleInputProps>()
const emit = defineEmits<{
    (e: 'update:location', val: string): void
    (e: 'update:extra', val: Record<string, string>): void
}>()

const getPayload = (payload: any) => {
    const { name = '', ...extra } = payload || {}

    emit('update:location', name)
    emit('update:extra', extra)
}
</script>

<style scoped lang="scss">
.input-con {
    position: relative;
    width: 100%;
    height: 41px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px;

    &:hover {
        border-color: $primary-color;
        box-shadow: 0 0 0 2px rgba(255, 255, 5, 0.1);
    }

    input {
        width: calc(100% - 28px);
        border: 0;

        &:focus-visible {
            outline: 0;
        }

        &::-webkit-input-placeholder {
            color: #d9d9d9;
        }
    }
}
</style>
