'use client'
import style from './style.module.scss'
import {signUpFormProps} from "@/app/(auth)/sign-up/Form/signUpFormProps";
import {useTransition} from "react";
import {signUpAction} from "@/app/(auth)/sign-up/actions";
import {Button, ConfigProvider, Flex, Form, Input} from "antd";
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";
import Link from "next/link";
import SkipButton from "@/app/(auth)/common/components/SkipButton/SkipButton";

export default function SignUpForm({}: signUpFormProps) {
    const [isPending, startTransition] = useTransition()
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    return (<div className={style.container}>
        <FormHeader mainTitle={"Welcome to DAC Platform"}
                    subTitle={"By logging in you are accepting our."}/>
        <Form layout="vertical"
              onFinish={(values) => {
                  startTransition(() => {
                      signUpAction()
                  })
              }}>
            <Form.Item
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>Full Name</div>}
                name={"full_name"}>
                <Input placeholder={"Enter Full Name"}/>
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>Surname</div>}
                name={"sure_name"}>
                <Input placeholder={"Sure Name"}/>
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>Email Address</div>}
                name={"email"}>
                <Input placeholder={"Email"}/>
            </Form.Item>

            <ConfigProvider theme={{
                token: {
                    colorPrimary: style.colorPrimary
                }
            }}>
                <Flex>
                    <Button loading={isPending}
                            htmlType={"submit"}
                            style={buttonStyle}
                            type={"primary"}
                            block>{String("Verify your email address").toUpperCase()}</Button>
                </Flex>
            </ConfigProvider>
        </Form>
        <div className={style.formFooter}>
            By logging in you are accepting our
            <div>
                <Link className={'link'} href={""}>Terms and Conditions</Link> and <Link className={'link'} href={""}>Privacy
                Policy</Link>
            </div>
        </div>
        <SkipButton/>
    </div>)
}