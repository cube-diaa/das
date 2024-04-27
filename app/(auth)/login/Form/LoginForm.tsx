'use client'
import {Button, ConfigProvider, Flex, Form, Input, Space} from "antd";
import googleIcon from '@/app/assets/googleIcon.svg'
import appleIcon from '@/app/assets/appleIcon.svg'
import linkedInIcon from '@/app/assets/linkedInIcon.svg'
import Image from "next/image";
import {useTransition} from "react";
import {loginAction} from "@/app/(auth)/login/actions";
import FormHeader from "@/app/(auth)/common/components/FormHeader/FormHeader";
import Link from "next/link";
import SkipButton from "@/app/(auth)/common/components/SkipButton/SkipButton";
import {useGoogleLogin} from "@react-oauth/google";
import {useLinkedIn} from "react-linkedin-login-oauth2";
import style from './style.module.scss'

export default function LoginForm() {
    const [isPending, startTransition] = useTransition()
    const buttonStyle = {
        paddingBlock: 14,
        height: 'fit-content'
    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    const {linkedInLogin} = useLinkedIn({
        clientId: '782zed3kzeoyy5',
        redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`,
        onSuccess: (code) => {
            console.log(code);
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return (<div className={style.container}>

        <FormHeader mainTitle={"Welcome to DAC Platform"}
                    subTitle={"Login to your account."}/>
        <Form layout="vertical"
              onFinish={(values) => {
                  startTransition(() => {
                      loginAction()
                  })
              }}>
            <Form.Item
                name={"email"}
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>Email Address</div>}>
                <Input placeholder="Enter your email"/>
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[{
                    required: true,
                }]}
                label={<div className={style.label}>Password</div>}>
                <Input.Password placeholder="Enter your password"/>
            </Form.Item>

            <Space
                style={{
                    width: '100%',
                }} direction="vertical"
                size={"middle"}>
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
                                block>{String("Continue").toUpperCase()}</Button>
                    </Flex>
                </ConfigProvider>


                <Button
                    onClick={() => login()}
                    style={{
                        ...buttonStyle,
                        borderColor: "#958982"
                    }} type={"text"} block>
                    <Flex gap={15}>
                        <Image src={googleIcon} alt={"google-icon"}/>
                        <div>Sign up with Google</div>
                    </Flex>
                </Button>

                <ConfigProvider theme={{
                    token: {
                        colorPrimary: "#000000"
                    }
                }}>


                    <Button style={buttonStyle} type={"primary"} block>
                        <Flex gap={15}>
                            <Image src={appleIcon} alt={'apple-icon'}/>
                            <div>
                                Login using your Apple
                            </div>
                        </Flex>
                    </Button>
                </ConfigProvider>
                <ConfigProvider theme={{
                    token: {
                        colorPrimary: "#1F88BE"
                    }
                }}>


                    <Button onClick={() => linkedInLogin()} style={buttonStyle} type={"primary"} block>
                        <Flex gap={15}>
                            <Image src={linkedInIcon} alt={"linkedIn-icon"}/>
                            <div>
                                Sign up with LinkedIn
                            </div>
                        </Flex>
                    </Button>

                </ConfigProvider>
            </Space>
        </Form>
        <div className={style.formFooter}>
            <div>By logging in you are accepting our</div>
            <div><Link className={'link'} href={""}>Terms and Conditions</Link> and <Link className={'link'} href={""}>Privacy
                Policy</Link></div>
            <div>Do not have an account? then <Link className={'link'} href={"/sign-up"}>Sign Up</Link> now!</div>
        </div>
        <SkipButton/>
    </div>)
}