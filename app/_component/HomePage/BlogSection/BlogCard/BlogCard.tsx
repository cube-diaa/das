import style from './style.module.scss'
import blogCardProps from "./blogCardProps";
import Image from "next/image";
import {Avatar, Flex, Space} from "antd";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";
import {IoCalendarOutline} from "react-icons/io5";

export default function BlogCard({
                                     blog: {
                                         id,
                                         image,
                                         date,
                                         publisher: {
                                             name,
                                             imageUrl,
                                             id: publisherID
                                         },
                                         title,
                                         description

                                     }
                                 }: blogCardProps) {
    return (<div className={style.container}>
        <div className={style.imageWrapper}>
            <Image src={image} alt={"blog"}/>
        </div>
        <div className={style.blogInfoCard}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            <div className={style.publisherCard}>
                <Flex align={"center"} justify={"space-between"}>
                    <div>
                        <Flex align={"center"} gap={8}>
                            <Avatar size={52} src={imageUrl}/>
                            <div>
                                <div className={style.publisherName}>{name}</div>
                                <div className={style.date}>
                                    <Space>
                                        <IoCalendarOutline/>
                                        <div>
                                            {date}
                                        </div>
                                    </Space>
                                </div>
                            </div>
                        </Flex>
                    </div>
                    <Link href={""} className={style.showButton}>
                        <ArrowRightOutlined/>
                    </Link>
                </Flex>
            </div>
        </div>
    </div>)
}