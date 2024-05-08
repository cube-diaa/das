'use client'
import style from './style.module.scss'
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";
import {Button, Form, Input} from "antd";
import {useState, useTransition} from "react";
import sendResetPasswordLinkAction from "@/app/(auth)/forgot-password/actions";

export default function ForgotPasswordForm() {
    const [isPending, startTransition] = useTransition()
    const [emailSend, setIsEmailSend] = useState<boolean>(false)
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    return (<div className={style.container}>
        <FormHeader mainTitle={"Welcome to DAC Platform"}
                    subTitle={"Forgot Password?"}/>
        <Form layout={"vertical"}
              validateTrigger={["onBlur"]}
              onFinish={(values) => {
                  startTransition(() => {
                      sendResetPasswordLinkAction(values).then((data) => {
                          setIsEmailSend(true)
                      }).catch((error) => {
                          alert(error)
                      })
                  })
              }}>
            {!emailSend ?
                (<>
                        <Form.Item
                            hasFeedback
                            name={"email"}
                            rules={[{
                                type:"email",
                                required: true,
                            }]}
                            label={<div className={style.label}>Email Address</div>}>
                            <Input placeholder="Enter your email"/>
                        </Form.Item>
                        <Button
                            style={buttonStyle}
                            loading={isPending}
                            htmlType={"submit"}
                            type={"primary"}
                            block>{String("Reset Password").toUpperCase()}</Button>
                    </>
                ) : <div className={style.message}>We Are Sent Verification Link to Your Email , Please Check Your Inbox.</div>
            }
        </Form>
    </div>)
}