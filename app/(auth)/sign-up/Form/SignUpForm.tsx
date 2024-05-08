'use client'
import style from './style.module.scss'
import {signUpFormProps} from "@/app/(auth)/sign-up/Form/signUpFormProps";
import {useState, useTransition} from "react";
import {signUpAction} from "@/app/(auth)/sign-up/actions";
import {Button, ConfigProvider, Flex, Form, Input} from "antd";
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";
import Link from "next/link";
import SkipButton from "@/app/(auth)/common/components/SkipButton/SkipButton";

export default function SignUpForm({}: signUpFormProps) {
    const [isPending, startTransition] = useTransition()
    const [isLinkSent, setIsLinkSent] = useState<boolean>(false)
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    return (<div className={style.container}>
        <FormHeader mainTitle={"Welcome to DAC Platform"}
                    subTitle={"By logging in you are accepting our."}/>
        {!isLinkSent ? <><Form layout="vertical"
                               onFinish={(values) => {
                                   startTransition(async () => {
                                       signUpAction(values).then((value) => {
                                           setIsLinkSent(true)
                                       }).catch((err) => {
                                           alert(err)
                                       })
                                   })
                               }}>
            <Form.Item
                rules={[{
                    message: "Please Enter Your First Name",
                    required: true,
                }]}
                label={<div className={style.label}>Full Name</div>}
                name={"first_name"}>
                <Input placeholder={"Enter Full Name"}/>
            </Form.Item>
            <Form.Item
                rules={[{
                    message: "Please Enter Your SurName",
                    required: true,
                }]}
                label={<div className={style.label}>Surname</div>}
                name={"last_name"}>
                <Input placeholder={"Sure Name"}/>
            </Form.Item>
            <Form.Item
                rules={[{
                    message: "Please Enter Your Email",
                    required: true,
                }]}
                label={<div className={style.label}>Email Address</div>}
                name={"email"}>
                <Input placeholder={"Email"}/>
            </Form.Item>
            <Form.Item
                rules={[{
                    message: "Please Enter Password",
                    required: true,
                }]}
                label={<div className={style.label}>Password</div>}
                name={"password"}>
                <Input.Password placeholder={"Password"}/>
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
        </Form></> : <div className={style.sendVerificationMessage}>We Are Sent Verification Link to Your Email , Please Check Your Inbox.</div>}

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