'use client'
import SocialMediaList from "@/app/_component/SocialMediaList/SocialMediaList";
import {Button, Divider, Form, Input, Space} from "antd";
import Link from "next/link";
import locationIcon from '@/app/assets/locationIcon.svg'
import phoneIcon from '@/app/assets/phone.svg'
import emailIcon from '@/app/assets/email.svg'
import Image from "next/image";
import logo from '@/app/assets/logo.svg'
import style from './style.module.scss'

const servers = [
    "Contractual Services",
    "Quantum Services",
    "Delay Service",
    "Disruption Service",
    "Planning And Programming",
    "Reporting System",
    "Risk Service",
    "Technical Writing",
    "Forensic Technical Design"
]

const siteMap = [
    {
        label: "Contact Us",
        href: ""
    }, {
        label: "Privacy Policy",
        href: ""
    },
    {
        label: "Terms Of Use",
        href: ""
    },
    {
        label: "About Us Page",
        href: ""
    },
    {
        label: "Careers",
        href: ""
    }
]

const contactUsInfo = [{
    label: "Telimeny 15, Marki, Post Code 05-270, Warsaw, Poland",
    icon: <Image src={locationIcon} alt={"location"}/>
}, {
    label: "+48 732 022 871",
    icon: <Image src={phoneIcon} alt={"phone"}/>
}, {
    label: "europe@bluestoneworldwide.com",
    icon: <Image src={emailIcon} alt={"email"}/>
}]


export default function Footer() {


    return (
        <div className={style.container}>
            <div className={style.footerHead}>
                <Image draggable={false} className={style.logo} src={logo} alt={"logo"}/>
            </div>
            <div className={style.content}>
                <div className={style.item}>
                    <div className={style.title}>Categories</div>
                    <Space direction="vertical" size={9}>
                        {servers.map((server, index) => <div key={index}>{server}</div>)}
                    </Space>
                </div>
                <Divider className={style.verticalDivider} type="vertical"/>

                <div className={style.item}>
                    <div className={style.title}>SITE MAP</div>
                    <Space direction="vertical" size={9}>
                        {siteMap.map(({label, href}, index) => <Link href={href} key={index}>{label}</Link>)}
                    </Space>

                </div>
                <Divider className={style.verticalDivider} type="vertical"/>
                <div className={style.item}>
                    <div className={style.title}>DAC</div>
                    <Space style={{
                        textAlign: "left"
                    }} direction={"vertical"} size={9}>
                        {
                            contactUsInfo.map(({label, icon}, index) => <div key={index}>

                                    <Space size={"middle"}>
                                        <div>{icon}</div>
                                        <div>{label}</div>
                                    </Space>
                                </div>
                            )
                        }
                    </Space>
                    <div className={style.subscriptionNewsLetterBox}>
                        <div className={style.text}>knowing you&apos;re always on the best energy deal.</div>
                        <Form className={style.form}>

                            <Form.Item
                                name={"email"}
                                rules={[{
                                    required: true,
                                }]}>
                                <Input className={style.inputField} placeholder={"Enter your Email Address"}/>
                            </Form.Item>
                            <Button htmlType={"submit"} className={style.sendButton}>SEND</Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Divider className={style.divider}/>
            <div className={style.subFooter}>
                <div>
                    Copyright © 2022 Bluestone Exhibition and Event Pvt. Ltd.. All rights reserved
                </div>
                <div>
                    <SocialMediaList/>
                </div>
            </div>
        </div>
    )
}