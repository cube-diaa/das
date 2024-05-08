'use client'
import style from './style.module.scss'
import {useTransition} from "react";
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";
import {Button, Form, Input} from "antd";
import resetPasswordFormProps from "./resetPasswordFormProps";
import resetPasswordAction from "@/app/(auth)/reset-password/actions";
import {useRouter, useSearchParams} from "next/navigation";

export default function ResetPasswordForm({}: resetPasswordFormProps) {
    const [isPending, startTransition] = useTransition()
    const params = useSearchParams()
    const router = useRouter()
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    return (<div className={style.container}>
        <FormHeader mainTitle={"Welcome to DAC Platform"}
                    subTitle={"Set Your New Password"}/>
        <Form
            layout={"vertical"}
            onFinish={(values) => {
                startTransition(() => {
                    resetPasswordAction({
                        email: String(params.get("email")),
                        password: values.password
                    }).then((res) => {
                        router.replace("/login")
                    }).catch((error) => {
                        alert(error)
                    })
                })
            }}
        >
            <Form.Item
                hasFeedback
                name={"password"}
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>New Password</div>}
            >
                <Input.Password placeholder={'enter your new password'}/>
            </Form.Item>
            <Form.Item
                hasFeedback
                dependencies={['password']}
                name={"confirmPassword"}
                rules={[{
                    required: true,

                },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
                label={<div className={style.label}>Confirm Password</div>}
            >
                <Input.Password placeholder={'enter confirm password'}/>
            </Form.Item>
            <Button loading={isPending}
                    htmlType={"submit"}
                    style={buttonStyle}
                    type={"primary"}
                    block>{String("Reset").toUpperCase()}</Button>
        </Form>

    </div>)
}