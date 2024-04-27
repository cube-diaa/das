'use client'
import style from './style.module.scss'
import {Button, Flex, Form, Input} from "antd";
import Image from "next/image";
import messageImage from './image.svg'
import {useInView} from "react-intersection-observer";
import {CheckCircleOutlined} from "@ant-design/icons";

export default function RequestCourseSection() {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true

    });
    return (
        <div className={`${style.container}`}>
            <div className={`${style.formBox} ${inView ? "animate__animated animate__lightSpeedInLeft" : ""}`}
                 ref={ref}>
                <div className={style.title}>Request a list of headings</div>
                <div className={style.description}>Please enter your email address to receive course titles,<br/> the
                    topics
                    will
                    be
                    emailed to you.
                </div>
                <Form className={style.form}>
                    <Form.Item name="email">
                        <Input className={style.input} placeholder="ADC2Y@gmail.com"/>
                    </Form.Item>
                    <Button className={style.sendButton} htmlType={"submit"}>SEND</Button>
                </Form>
                <div
                    style={{
                        fontSize: 12
                    }}>
                    <Flex gap={10}>
                        <CheckCircleOutlined style={{fontSize: 16}}/>
                        <div>
                            Your email has been successfully registered, headlines will be sent to you
                            soon.
                        </div>
                    </Flex>
                </div>
            </div>
            <div className={`${style.imageBox} ${inView ? "animate__animated animate__lightSpeedInRight" : ""}`}
                 ref={ref}>
                <Image src={messageImage} alt={"send message"}/>
            </div>
        </div>)
}