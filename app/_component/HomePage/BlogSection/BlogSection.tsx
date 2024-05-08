'use client'
import style from './style.module.scss'
import {BlogModel} from "@/app/models/blogModel";
import blogImage1 from './Group 120.svg'
import blogImage2 from './Group 1666.svg'
import {Avatar, Col, Flex, Row, Space} from "antd";
import Image from "next/image";
import {useViewType} from "@/app/hooks/useMediaQuery";
import BlogCard from "@/app/_component/HomePage/BlogSection/BlogCard";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";
import {IoCalendarOutline} from "react-icons/io5";
const blogs: BlogModel[] = [{
    id: 1,
    title: "The Judicial Office",
    description: "The Judicial Office is a unique branch of the civil service, independent from the …",
    image: blogImage1,
    date: "4 August 2021",
    publisher: {
        name: "Angel Armstrong",
        imageUrl: "https://avatar.iran.liara.run/public/1",
        id: 1
    }
}, {
    id: 2,
    title: "Social justice",
    description: "“Social justice” means that we are all invested in a vision of equality, while believing ...",
    image: blogImage2,
    date: "4 August 2021",
    publisher: {
        name: "Angel Armstrong",
        imageUrl: "https://avatar.iran.liara.run/public/2",
        id: 2
    }
}, {
    id: 3,
    title: "The Judicial Office",
    description: "The Judicial Office is a unique branch of the civil service, independent from the …",
    image: blogImage1,
    date: "4 August 2021",
    publisher: {
        name: "Angel Armstrong",
        imageUrl: "https://avatar.iran.liara.run/public/3",
        id: 3
    }
}]
export default function BlogSection() {
    const {isMobile, isIpad} = useViewType()

    function MasterBlogCard({id, date, publisher, image, title, description}: BlogModel) {
        return <div className={style.masterBlogCard}>
            <div className={style.imageContainer}>
                <Image src={image} alt={"img"}/>
            </div>
            <div className={style.content}>
                <div className={`${style.sectionTitle} main-section-title`}><span>__</span>BLOG
                </div>
                <div className={style.masterBlogCardInfo}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>“The bedrock of our democracy is the rule of law and that means
                        we have to have an independent judiciary, judges who can make decisions independent of the
                        political winds that are blowing.”
                    </div>
                    <div className={style.publisherInfo}>
                        <Flex align={"center"} justify={"space-between"}>
                            <div>
                                <Flex align={"center"} gap={8}>
                                    <Avatar size={52} src={publisher.imageUrl}/>
                                    <div>
                                        <div className={style.publisherName}>{publisher.name}</div>
                                        <Space>
                                            <IoCalendarOutline/>
                                            <div>
                                                {date}
                                            </div>
                                        </Space>
                                    </div>
                                </Flex>
                            </div>
                            <Link href={""} className={style.showButton}>
                                <ArrowRightOutlined/>
                            </Link>
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div className={style.container}>
            <Row gutter={[30, 30]}>
                {!isMobile && !isIpad ?
                    <Col span={24}>
                        <MasterBlogCard {...blogs[0]}/>
                    </Col> :
                    <div className={`${style.mobileSectionTitle} animate__animated animate__backInRight`}>Blog</div>
                }
                {
                    blogs.map((blog, index) =>
                        <Col key={index}
                             xs={24}
                             sm={24}
                             md={24}
                             lg={12}
                             xl={8}
                             xxl={8}>
                            <BlogCard blog={blog}/>
                        </Col>
                    )

                }
            </Row>
        </div>
    )
}