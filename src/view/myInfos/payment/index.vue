<template>
    <div class="payment-con">
        <Header>Banking</Header>
        <Spin :spinning="loading">
            <div class="w-36% p-y-22 ma flex-col-center min-h-150">
                <div class="font-bold font-size-6 mb-6">My Cards</div>
                <Row v-if="cardList.length" :gutter="24" class="w-full p-x-4">
                    <Col :span="24" v-for="item in cardList" :key="item.uid">
                        <DebitCard
                            deletable
                            :card="item"
                            @delete="handleClick({ act: 'del', ...item })"
                        />
                    </Col>
                </Row>
                <div class="mb-6">
                    <Button
                        type="primary"
                        size="large"
                        @click="handleClick({ act: 'add' })"
                        >Add New Card</Button
                    >
                </div>
                <Space>
                    <span>View</span>
                    <span class="link-text" @click="handleClick({ act: 'faq' })"
                        >Payment FAQs</span
                    >
                    <span>and</span>
                    <span
                        class="link-text"
                        @click="handleClick({ act: 'terms' })"
                        >Terms & Conditions</span
                    >
                </Space>
            </div>
        </Spin>
        <ModifyPaymentModal
            v-if="modifyModal.visible"
            :modal="modifyModal"
            @confirm="handleConfirm"
        />
        <contextHolder />
    </div>
</template>
<script setup lang="ts">
import { h, ref, onMounted, reactive } from 'vue'
import { Button, Space, Row, Col, Modal, message, Spin } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import DebitCard from '@/components/custom/DebitCard.vue'
import { useRouter } from 'vue-router'

import Header from '../../components/Header.vue'
import ModifyPaymentModal from './components/ModifyPaymentModal.vue'

import { getCardListApi, deleteCardApi } from '@/api/user'
import type { MemberCardQueryPageResponse as CardListRes } from '@/api/index'

const router = useRouter()
const [modal, contextHolder] = Modal.useModal()

const loading = ref(false)
const cardList = ref(<CardListRes>[])
const getList = async () => {
    loading.value = true
    try {
        const [err, res] = await getCardListApi({})
        if (err === null && res.code === 200) {
            cardList.value = res.data
        }
    } catch (err: any) {
        message.error(err.message)
    } finally {
        loading.value = false
    }
}

const modifyModal = reactive({
    title: 'Add Debit / Credit card',
    state: 0,
    visible: false,
    record: undefined
})

const handleClick = ({ act, ...record }: any) => {
    switch (act) {
        case 'faq':
            router.push({ name: 'Faq' })
            break
        case 'terms':
            router.push({ name: 'Terms' })
            break
        case 'del':
            modal.confirm({
                title: 'Delete Reminder',
                icon: h(ExclamationCircleOutlined),
                content: 'Are you sure you want to delete this card?',
                onOk() {
                    deleteFun(record.uid)
                }
            })
            break
        case 'add':
            Object.assign(modifyModal, { visible: true })
            break
    }
}
const deleteFun = async (uid: string) => {
    loading.value = true
    try {
        const [err, res] = await deleteCardApi({ uid })
        if (err === null && res.code === 200) {
            message.success('Delete Successfully')
            getList()
        }
    } catch (err: any) {
        message.error(err.message)
    } finally {
        loading.value = false
    }
}

const handleConfirm = () => {
    modifyModal.visible = false
    getList()
}

onMounted(() => {
    getList()
})
</script>
<style scoped lang="scss">
.payment-con {
    line-height: 1.2;

    .link-text {
        color: $info-color;
        border-bottom: 1px solid $info-color;
        cursor: pointer;
    }
}
</style>
