import style from './style.module.scss'
import {serviceCardProps} from "@/app/_component/HomePage/TopReatedServicesSection/ServiceCard/serviceCardProps";
import Image from "next/image";
import {Flex, Rate, Space} from "antd";
import badge from './Icon.svg'
import Link from "next/link";
import {ArrowRightOutlined, ClockCircleOutlined, GoldOutlined, ScheduleOutlined} from "@ant-design/icons";

export default function ServiceCard({
                                        rate,
                                        id,
                                        price,
                                        imageUrl,
                                        expertName,
                                        date
                                    }: serviceCardProps) {
    return (
        <div className={style.container}>
            <div>
                <Image src={imageUrl} alt={expertName}/>
            </div>

            <div className={style.infoCard}>
                <div className={style.badge}>
                    <Image width={15} alt={"page"} src={badge}/>
                </div>
                <div className={style.name}>{expertName}</div>
                <div className={style.description}>
                    <Flex justify={"space-between"}>
                        <div>
                            {expertName}
                        </div>
                        <div style={{
                            marginRight: 30
                        }}>
                            {Number(price).toFixed(2)}$
                        </div>
                    </Flex>
                </div>
                <div><Rate className={style.rate} disabled value={rate}/></div>
                <div className={style.actionbar}>
                    <Space className={style.icons}>

                        <ScheduleOutlined/>
                        <ClockCircleOutlined/>
                        <GoldOutlined/>
                        <div>{date}</div>
                    </Space>
                    <Link href={""} className={style.showButton}>
                        <ArrowRightOutlined/>
                    </Link>
                </div>
            </div>

        </div>
    )
}