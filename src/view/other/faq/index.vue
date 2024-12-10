<template>
    <div class="pb-22 faq-con">
        <Header>FAQ & Contact Us</Header>
        <div class="w-300 ma mt-22 bg-#F7F7FA p-8 mb-12">
            <div class="font-size-6 font-bold mb-12 text-center">
                Frequently Asked Questions
            </div>
            <Collapse class="fa-collapse" :bordered="false" expandIconPosition="end">
                <CollapsePanel :show-arrow="false" v-for="item in list" :key="item.uid">
                    <template #header>
                        <div v-html="item.question"></div>
                    </template>
                    <div v-html="item.answer"></div>
                </CollapsePanel>
            </Collapse>
        </div>
        <div class="w-300 ma flex-col-center">
            <SIcon name="icon_drop_us" class="font-size-48" />
            <div class="font-size-7 mt-2 font-bold mb-12">
                Drop Us a Message
            </div>
            <Form layout="vertical" class="w-full" hideRequiredMark>
                <Row :gutter="16">
                    <Col :span="12">
                        <div class="flex-col justify-between h-200px" style="margin-bottom: -24px;">
                            <FormItem v-bind="validateInfos.name">
                                <Input
                                    v-model:value="formData.name"
                                    class="w-full h-50px"
                                    size="large"
                                    placeholder="First Name*"
                                />
                            </FormItem>
                            <FormItem v-bind="validateInfos.subject">
                                <Input
                                    v-model:value="formData.subject"
                                    class="w-full h-50px"
                                    size="large"
                                    placeholder="Subject*"
                                />
                            </FormItem>
                            <FormItem v-bind="validateInfos.email">
                                <Input
                                    v-model:value="formData.email"
                                    class="w-full h-50px"
                                    size="large"
                                    placeholder="Email*"
                                />
                            </FormItem>
                        </div>
                    </Col>
                    <Col :span="12">
                            <FormItem class="h-full" v-bind="validateInfos.message">
                                <Textarea
                                    v-model:value="formData.message"
                                    class="w-full h-198px!"
                                    size="large"
                                    :rows="7"
                                    placeholder="Your Message *"
                                />
                            </FormItem>
                    </Col>
                </Row>
                <FormItem class="text-center">
                    <Button type="primary" size="large" @click="handleConfirm"
                        >Send Message</Button
                    >
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import {
    Collapse,
    CollapsePanel,
    Button,
    Form,
    FormItem,
    Input,
    Textarea,
    Row,
    Col
} from 'ant-design-vue'
import Header from '../../components/Header.vue'
import SIcon from '@/components/SIcon.vue'
import { queryPageApi } from '@/api/admin/faq'

const { list } = useList(async pageNum => {
    const [, res] = await queryPageApi({ pageNum, pageSize: 100 })

    return res?.data
})

const useForm = Form.useForm
const formData = reactive({
    uid: '',
    name: undefined,
    subject: undefined,
    email: undefined,
    message: undefined
})
const formRules = reactive({
    name: [{ required: true, message: 'Name is required.', trigger: 'blur' }],
    subject: [{ required: true, message: 'Enter Subject.', trigger: 'blur' }],
    email: [
        { required: true, message: 'Email is required. ', trigger: 'blur' }
    ],
    message: [{ required: true, message: 'Enter Message. ', trigger: 'blur' }]
})
const { validate, validateInfos } = useForm(formData, formRules)
const handleConfirm = () => {
    validate().then(() => {
        submit()
    })
}
const submit = () => {}
</script>
<style scoped lang="scss">
.faq-con {
    :deep(.ant-collapse) {
        .ant-collapse-item {
            margin-bottom: 24px;
            border: 0;
        }

        .ant-collapse-header {
            background: $primary-color;
            color: #fff;
            border-radius: 8px 8px 0 0;
            font-size: 16px;
            padding: 10px 12px;
        }

        .ant-collapse-content {
            background: $sub-color;
            font-size: 14px;
        }
    }

    :deep(.ant-collapse-header-text) {
        h1, h2, h3, h4, h5 {
            margin: 0;
        }
    }
}
</style>
