<template>
  <Form layout="vertical" class="code-con">
    <div class="flex-x-between w-80">
      <div class="code-item">
        <InputNumber ref="aRef" v-model:value="formData.a" :bordered="false" :controls="false" :max="9" autofocus
          @change="val => handleChange('a', val)" />
      </div>
      <div class="code-item">
        <InputNumber ref="bRef" v-model:value="formData.b" :bordered="false" :controls="false" :max="9"
          @change="val => handleChange('b', val)" />
      </div>
      <div class="code-item">
        <InputNumber ref="cRef" v-model:value="formData.c" :bordered="false" :controls="false" :max="9"
          @change="val => handleChange('c', val)" />
      </div>
      <div class="code-item">
        <InputNumber ref="dRef" v-model:value="formData.d" :bordered="false" :controls="false" :max="9"
          @change="val => handleChange('d', val)" />
      </div>
    </div>
  </Form>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { Form, InputNumber } from 'ant-design-vue';

const emit = defineEmits<{
  (e: 'change', val: string): void
}>()
const aRef = ref()
const bRef = ref()
const cRef = ref()
const dRef = ref()

const handleChange = (key: string, val: any) => {
  const flag = !!val
  switch (key) {
    case 'a':
      if (flag) {
        aRef.value.blur()
        bRef.value.focus()
      }
      break
    case 'b':
      if (flag) {
        bRef.value.blur()
        cRef.value.focus()
      } else {
        bRef.value.blur()
        aRef.value.focus()
      }
      break
    case 'c':
      if (flag) {
        cRef.value.blur()
        dRef.value.focus()
      } else {
        cRef.value.blur()
        bRef.value.focus()
      }
      break
    case 'd':
      if (!flag) {
        dRef.value.blur()
        cRef.value.focus()
      }
      break
  }
}
const formData = reactive({
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
})

// console.log(key, e, (e.target as HTMLInputElement).value)

watch(
  () => formData,
  () => {
    const { a, b, c, d } = formData
    emit('change', `${a || ''}${b || ''}${c || ''}${d || ''}`)
  },
  { deep: true }
)
onMounted(() => {
  aRef.value.focus()
})
</script>
<style scoped lang="scss">
.code-con {
  .code-item {
    width: 56px;
    border-bottom: 1px solid $font-color;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(.ant-input-number) {
      font-size: 24px;
      text-align: center;
      font-weight: bold;

      input {
        text-align: center;
      }
    }
  }
}
</style>