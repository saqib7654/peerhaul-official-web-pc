<template>
  <div class="system-table-area">
    <a-table :columns="props.columns" :data-source="data" class="system-table" :pagination="false" :scroll="scroll"
      :row-key="rowKey" :loading="loading" align="center" :row-selection="showRowSelection
        ? {
          selectedRowKeys: props.selectedList.length > 0 ? selected : selectedRowKeys,
          onChange: onSelectChange,
          preserveSelectedRowKeys: true, // 这个属性是保留分页之前选中的数据
          getCheckboxProps: getCheckboxProps,
          type: selectType,
        }
        : undefined
        ">
      <!-- <template #emptyText>
        <div>
          <a-empty :description="nullDescription" image="https://enkgo-prd-1256352532.cos.ap-nanjing.myqcloud.com/icon/noData.png" />
        </div>
      </template> -->
      <template v-for="item in Object.keys(slotValue)" :key="item" #[item]="{ column, record }">
        <slot :name="item" :column="column" :record="record"></slot>
      </template>
    </a-table>
    <div v-if="props.total" class="pagination-area">
      <div class="detail">
        <!--        <span class="detail-text">显示</span>-->
        <!--        <ASelect v-model:value="pageSize" class="detail-select" @change="pageSizeChange">-->
        <!--          <ASelect.Option :value="10">10条/页</ASelect.Option>-->
        <!--          <ASelect.Option :value="20">20条/页</ASelect.Option>-->
        <!--          <ASelect.Option :value="50">50条/页</ASelect.Option>-->
        <!--          <ASelect.Option :value="100">100条/页</ASelect.Option>-->
        <!--        </ASelect>-->
        <!--        <span class="detail-text">-->
        <!--          <span>当前</span>-->
        <!--          <span class="number">{{ currentBegin }}</span>-->
        <!--          <span>/</span>-->
        <!--          <span class="number">{{ currentEnd }}</span>-->
        <!--          <span>条，共</span>-->
        <!--          <span class="number">{{ props.total }}</span>-->
        <!--          <span>条</span>-->
        <!--        </span>-->
      </div>
      <ConfigProvider>
        <a-pagination v-model:current="current" v-model:page-size="pageSize" class="pagination"
          :show-total="total => `Total ${total} Pieces`" :show-size-changer="false" :total="props.total" show-quick-jumper
          @change="pageChange"></a-pagination>
      </ConfigProvider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Table as ATable,
  Pagination as APagination,
  Select as ASelect,
  ConfigProvider,
  Empty as AEmpty,
} from 'ant-design-vue';
import { ColumnsType } from 'ant-design-vue/lib/table/Table';
import { withDefaults, ref, useSlots, computed, watch, onMounted } from 'vue';
import { TableProps } from 'ant-design-vue/lib/vc-table/Table';
import { SelectValue } from 'ant-design-vue/lib/select';

// import userStore from '@/store/userStore';
// const store = userStore();

type Row = string | number | object;
interface Props {
  /** 表格数据 */
  data: TableProps['data'];
  /** 表格列信息 */
  columns: ColumnsType;
  /** 数据总条数 */
  total: number;
  /** 当前页 */
  page: number;
  /** 每页条数 */
  pageSize?: number;
  /** 表格是否可滚动，也可以指定滚动区域的宽、高 */
  scroll?: {
    /** 当分页、排序、筛选变化后是否滚动到表格顶部 */
    scrollToFirstRowOnChange?: boolean;
    /** 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content' */
    x?: number | true | string;
    /** 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 */
    y?: number | string;
  };
  /** loading加载状态 */
  loading?: boolean;
  /** 是否开启行选择 */
  showRowSelection?: boolean;
  /** rowKey */
  rowKey?: string;
  /** 为空时提示语 */
  nullDescription?: string;
  /** 选择框可选中的状态 */
  statusList?: [];
  selectType?: string,
  selectedList?: Row[],
}
interface Emits {
  /**
   * 页数变化
   * @param e 指令
   * @param page 页数
   * @param size 一页条数
   *  */
  (e: 'pageChange', page: number, size: number): void;
  (e: 'rowSelectChange', value: Row[], value1: Row[]): void;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  columns: () => [],
  total: 0,
  page: 1,
  pageSize: 10,
  scroll: () => ({}),
  loading: false,
  rowKey: '',
  nullDescription: '暂无数据',
  statusList: () => [],
  selectType: '',
  selectedList: () => [],
});
const emits = defineEmits<Emits>();

/** 分页 当前页数 */
const current = ref<number>(props.page);
/** 分页 一页条数 */
const pageSize = ref<number>(props.pageSize);
/** 分页 总数 */
// const total = ref<number>(props.total);
/**
 * 分页器操作 页数改变
 * @param page 当前页
 * @param size 当前一页条数
 */
const pageChange = (page: number, size: number) => {
  current.value = page;
  emits('pageChange', page, size);
};
/** 插槽内容对象 */
const slotValue = useSlots();
/** 当前第几条 开始 */
const currentBegin = computed(() => (!props.total ? 0 : (current.value - 1) * pageSize.value + 1));
/** 当前第几条 结束 */
const currentEnd = computed(() => {
  if (!props.total) return 0;
  return Math.min(current.value * pageSize.value, props.total);
});
/**
 * 左侧条数设置
 * @param value 条数
 */
const pageSizeChange = (value: SelectValue) => {
  current.value = 1;
  pageSize.value = value as number;
  pageChange(1, pageSize.value);
};
/** 监听page，设置组件当前页 */
watch(
  () => props.page,
  newVal => {
    if (newVal) {
      current.value = newVal;
    }
  },
);
const selected = ref<Row[]>([]);
onMounted(() => {
  selected.value = props.selectedList;
})

/** 已选中的行 */
const selectedRowKeys = ref<Row[]>([]);
/** 已选中的当前行数据 */
const selectedRowsInfo = ref<Row[]>([]);
/** 选中事件 */
const onSelectChange = (selectedKeys: Row[], selectedRows: []): void => {
  selected.value = selectedKeys;
  selectedRowKeys.value = selectedKeys;
  selectedRowsInfo.value = selectedRows
  emits('rowSelectChange', selectedRowKeys.value, selectedRowsInfo.value);
};
/** 设置数据禁止选中 */
const getCheckboxProps = (record: any) => ({
  disabled: props.statusList.length > 0 &&
    !(props.statusList.includes(record.invoiceStatus)
      || props.statusList.includes(record.orderStatus)
      || props.statusList.includes(record.taskStatus)), // Column configuration not to be checked
});
</script>
<style lang="scss" scoped>
.system-table-area {

  :deep(.system-table) {
    width: 100%;
    margin-bottom: 10px;

    .ant-table-thead>tr>th {
      /*padding: 13px 16px;*/
      // font-size: 16px;
      // font-family: Inter-Medium, Inter;
      // font-weight: 500;
      // color: #333;
      // line-height: 19px;
      // background-image: url("./img/thBackgroundImg.webp");
    }

    // .ant-table-tbody>tr>td {
    //   font-size: 14px;
    //   font-family: Inter-Medium, Inter;
    //   font-weight: 500;
    //   color: #333333;
    //   line-height: 21px;
    // }
  }

  :deep(.ant-table-tbody >tr:last-child>td, ) {
    border-bottom: 1px dashed #f0f0f0 !important;
  }

  :deep(.ant-table-tbody >tr>td) {
    border-top: 1px dashed #f0f0f0 !important;
  }

  :deep(.ant-table-cell, ) {
    border-bottom: none;
  }

  :deep(.ant-table-cell::before) {
    display: none;
  }

  .pagination-area {
    display: flex;
    justify-content: space-between;

    .detail {
      display: flex;
      align-items: center;
      font-size: 14px;
      letter-spacing: 0;
      line-height: 12px;
      color: #666666;

      &-select {
        margin: 0 10px;

        :deep(.ant-select-selector) {
          border-radius: 4px;
          height: 28px;
        }

        :deep(.ant-select-selector .ant-select-selection-search-input) {
          height: 28px;
        }

        :deep(.ant-select-selector .ant-select-selection-item) {
          line-height: 28px;
        }
      }

      &-text {
        color: #666666;

        .number {
          color: #376cf3;
        }
      }
    }

    .pagination {
      :deep(.ant-pagination-prev) {
        height: 28px;
        line-height: 28px;
      }

      :deep(.ant-pagination-prev .ant-pagination-item-link) {
        border-radius: 4px;
      }

      :deep(.ant-pagination-disabled .ant-pagination-item-link) {
        background-color: #f5f5f5;
        border-color: #dddddd;
        color: #dddddd;
      }

      :deep(.ant-pagination-next) {
        height: 28px;
        line-height: 28px;
      }

      :deep(.ant-pagination-next .ant-pagination-item-link) {
        border-radius: 4px;
      }

      :deep(.ant-pagination-item) {
        border-radius: 4px;
        height: 28px;
        line-height: 28px;
        border-color: #dddddd;
      }

      :deep(.ant-pagination-item-active) {
        a {
          color: #ffffff;
        }

        background: #6691ff;
        font-weight: normal;
      }

      :deep(.ant-pagination-options-quick-jumper) {
        margin-left: 0;
        color: #666666;

        input {
          width: 30px;
          border-radius: 4px;
          height: 28px;
          line-height: 28px;
          padding: 4px 4px;
        }
      }
    }
  }
}
</style>
