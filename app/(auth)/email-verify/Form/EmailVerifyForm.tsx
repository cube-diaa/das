'use client'

import style from './style.module.scss'
import {useTransition} from "react";
import {Button, ConfigProvider, Flex, Form, Input} from "antd";
import {emailVerifyAction} from "../actions";
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";

export function EmailVerifyForm() {
    const [isPending, startTransition] = useTransition()
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    return (<div className={style.container}>
        <FormHeader mainTitle={"Verify Your Email Address"}
                    subTitle={"Please enter the 6-digit verification code we sent to your email address."}/>
        <Form layout="vertical"
              onFinish={(values) => {
                  startTransition(() => {
                      emailVerifyAction()
                  })
              }}>
            <Form.Item
                name={"code"}
                rules={[{
                    required: true
                }]} label="Code">
                <Input placeholder={"Enter Code Here .."}/>
            </Form.Item>
            <ConfigProvider theme={{
                token: {
                    colorPrimary:style.colorPrimary
                }
            }}>
                <Flex>
                    <Button loading={isPending}
                            htmlType={"submit"}
                            style={buttonStyle}
                            type={"primary"}
                            block>{String("Verify").toUpperCase()}</Button>
                </Flex>
            </ConfigProvider>
        </Form>

    </div>)
}