'use client'
import style from './style.module.scss'
import {fAQSectionProps} from "@/app/_component/HomePage/FAQSection/fAQSectionProps";
import {Collapse, CollapseProps, ConfigProvider} from "antd";
import {Segmented} from "antd";
import {useState} from "react";

type tabsName = "CLIENT" | "EXPERT" | "GENERAL"

export default function FAQSection({}: fAQSectionProps) {

    const [currentSelectedTab, setCurrentSelectedTab] = useState<tabsName>("CLIENT")

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const selectedContent: {
        [key in tabsName]: CollapseProps['items']
    } = {
        CLIENT: [
            {
                key: '1',
                label: 'This is panel CLIENT 1',
                children: <p>{text}</p>,
            },
            {
                key: '2',
                label: 'This is panel CLIENT 2',
                children: <p>{text}</p>,
            },
            {
                key: '3',
                label: 'This is panel CLIENT 3',
                children: <p>{text}</p>,
            },
        ],
        EXPERT: [
            {
                key: '1',
                label: 'This is panel EXPERT 1',
                children: <p>{text}</p>,
            },
            {
                key: '2',
                label: 'This is panel EXPERT 2',
                children: <p>{text}</p>,
            },
            {
                key: '3',
                label: 'This is panel EXPERT 3',
                children: <p>{text}</p>,
            },
        ],
        GENERAL: [
            {
                key: '1',
                label: 'This is panel GENERAL 1',
                children: <p>{text}</p>,
            },
            {
                key: '2',
                label: 'This is panel GENERAL 2',
                children: <p>{text}</p>,
            },
            {
                key: '3',
                label: 'This is panel GENERAL 3',
                children: <p>{text}</p>,
            },
        ]
    }

    return (<div className={`${style.container} faq-section`}>
        <div className={'main-section-title'}>FAQ</div>
        <div
            style={{
                width: '75%',
            }}>
            <ConfigProvider theme={{
                components: {
                    Segmented: {
                        colorBgContainer: 'white',
                        borderRadius: 0,
                        itemSelectedColor: "white",
                        itemSelectedBg: style.colorPrimary,
                        itemActiveBg: style.colorPrimary
                    }
                }
            }}>
                <Segmented<tabsName>
                    defaultValue={currentSelectedTab}
                    block
                    size={"large"}
                    options={["CLIENT", "EXPERT", "GENERAL"]}
                    onChange={(value) => {
                        setCurrentSelectedTab(value)
                    }}/>
            </ConfigProvider>
        </div>
        <div style={{
            width: '75%',
        }}>
            <Collapse size={"large"} items={selectedContent[currentSelectedTab]} defaultActiveKey={['1']}/>
        </div>
    </div>)
}