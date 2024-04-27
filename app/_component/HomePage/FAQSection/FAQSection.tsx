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


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
    ];
    return (<div className={style.container}>
        <div className={style.title}>FAQ</div>
        <div
            style={{
                width: '75%',
            }}>
            <ConfigProvider theme={{
                components: {
                    Segmented: {
                        itemSelectedColor: "white",
                        itemSelectedBg: style.colorPrimary,
                        itemActiveBg: style.colorPrimary
                    }
                }
            }}>
                <Segmented<string>
                    defaultValue={"CLIENT"}
                    block
                    size={"large"}
                    options={["CLIENT", "EXPERT", "GENERAL"]}
                    onChange={(value) => {
                    }}/>
            </ConfigProvider>
        </div>
        <div style={{
            width: '75%',
        }}>
            <Collapse size={"large"} items={items} defaultActiveKey={['1']}/>
        </div>
    </div>)
}