<template>
  <div class="pagination">
    <div class="total-info">Total {{ total }} Pieces</div>
    <div class="action">
      <div :class="['pre', isFirstPage ? 'disabled' : '']" @click="handlePre">{{ '<' }}</div>
          <div class="current">
            {{ `${currentPage}/${totalPage}` }}
          </div>
          <div :class="['next', isLastPage ? 'disabled' : '']" @click="handleNext">{{ '>' }}</div>
      </div>
      <div class="jump">
        <span>Jump To</span>
        <Input class="input" v-model:value="jumpVal" @press-enter="handleJump" />
        <span>Page</span>
      </div>
    </div>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
import { Input } from 'ant-design-vue'

export type PaginationProps = {
  total: number
  pageSize?: number
}

const props = withDefaults(defineProps<PaginationProps>(), {
  pageSize: 10
})

const emit = defineEmits<{
  (e: 'pre', val: number): void
  (e: 'next', val: number): void
  (e: 'to', val: number): void
  (e: 'change', val: number): void
}>()

const currentPage = ref(1);
const jumpVal = ref('');
const totalPage = computed(() => Math.ceil(props.total / props.pageSize));
const isLastPage = computed(() => currentPage.value === totalPage.value);
const isFirstPage = computed(() => currentPage.value === 1);

const handleNext = () => {
  if (isLastPage.value) return

  currentPage.value += 1
  emit('next', currentPage.value)
  emit('change', currentPage.value)
}

const handlePre = () => {
  if (isFirstPage.value) return

  currentPage.value -= 1
  emit('pre', currentPage.value)
  emit('change', currentPage.value)
}

const handleJump = () => {
  let jumpPage = Number(jumpVal.value) || 1
  jumpPage = Math.min(Math.max(jumpPage, 1), totalPage.value)

  currentPage.value = jumpPage
  jumpVal.value = String(jumpPage)
  emit('to', currentPage.value)
  emit('change', currentPage.value)
}
</script>

<style scoped>
.pagination {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  /* 小字号 */
  font-family: PingFangSCMedium-Medium;
  font-size: 12px;
  font-weight: normal;
  line-height: 100%;
  letter-spacing: 0em;

  /* 深 */
  color: #333333;

  .action {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 24px;

    .pre,
    .next,
    .current {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 26px;
      text-align: center;
      line-height: 26px;
      background-color: #FFFFFF;
      border: 1px solid #E6E6E6;
      border-radius: 5px;
    }

    .pre,
    .next {
      width: 26px;
      cursor: pointer;
    }

    .current {
      width: 56px;
      margin: 0 10px;
      cursor: default;
    }
  }

  .jump {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .input {
      height: 26px;
      width: 26px;
      margin: 0 8px;
      padding: 0;
      text-align: center;
    }
  }
}

.disabled {
  opacity: 0.5;
}
</style>