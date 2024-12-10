<template>
    <!-- {{ data }}
  {{ labelData }}
  {{ valueData }}
  {{ fileNames }} -->
    <div ref="chartRef" class="chart-con"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, shallowRef, watch, computed, nextTick } from 'vue'
import * as echarts from 'echarts'

export type PropsType = {
    extends: {
        title: string
        color: any
    }
    data: any
    fileNames?: { label: string; value: string }
}

const props = withDefaults(defineProps<PropsType>(), {
    extends: () => {
        return { color: '#646FFF', title: '标题' }
    },
    data: () => [],
    fileNames: () => {
        return { label: 'label', value: 'value' }
    }
})
const chartRef = ref()
const myChart = shallowRef()
const labelData = computed(() => {
    return props.data.map((item: any) => {
        return item[props.fileNames.label]
    })
})
const valueData = computed(() => {
    return props.data.map((item: any) => {
        return item[props.fileNames.value]
    })
})
const option = computed(() => {
    return {
        // title: {
        //   text: props.extends.title
        // },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: labelData.value,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                },
                splitLine: {
                    show: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                minInterval: 1,
                splitLine: {
                    show: true
                }
            }
        ],
        series: [
            {
                name: props.extends.title,
                type: 'bar',
                barWidth: '60%',
                data: valueData.value,
                itemStyle: {
                    color: props.extends.color
                }
            }
        ]
    }
})
const initChart = async () => {
    await nextTick()
    myChart.value.setOption(option.value)
    myChart.value.resize()
}
watch(
    () => props.data,
    () => {
        if (props?.data?.length) {
            initChart()
        }
    },
    { deep: true }
)
onMounted(() => {
    myChart.value = echarts.init(chartRef.value)
})
</script>
<style lang="scss" scoped>
.chart-con {
    width: 100%;
    height: 100%;
}
</style>
