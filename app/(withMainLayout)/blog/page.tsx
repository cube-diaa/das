import {BlogModel} from "@/app/models/blogModel";
import blogImage1 from "@/app/_component/HomePage/BlogSection/Group 120.svg";
import blogImage2 from "@/app/_component/HomePage/BlogSection/Group 1666.svg";
import {Col, Flex, Row} from "antd";
import style from './style.module.scss'
import {BsGrid} from "react-icons/bs";
import {BsGrid1X2} from "react-icons/bs";
import BlogCard from "@/app/_component/HomePage/BlogSection/BlogCard";
import Pagination from "@/app/_component/Pagination";


export default function BlogPage({
                                     searchParams: {
                                         page
                                     }
                                 }: {
    searchParams: {
        page: number
        // grid: "small" | "big"
    }
}) {


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
    }, {
        id: 4,
        title: "The Judicial Office",
        description: "The Judicial Office is a unique branch of the civil service, independent from the …",
        image: blogImage1,
        date: "4 August 2021",
        publisher: {
            name: "Angel Armstrong",
            imageUrl: "https://avatar.iran.liara.run/public/3",
            id: 4
        }
    },
        {
            id: 5,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 5
            }
        },
        {
            id: 6,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 6
            }
        },
        {
            id: 7,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 7
            }
        },
        {
            id: 8,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 8
            }
        },
        {
            id: 9,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 9
            }
        },
        {
            id: 10,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 10
            }
        },
        {
            id: 11,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 11
            }
        },
        {
            id: 12,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 12
            }
        },
        {
            id: 13,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 13
            }
        },
        {
            id: 14,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 14
            }
        },
        {
            id: 15,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 15
            }
        },
        {
            id: 16,
            title: "The Judicial Office",
            description: "The Judicial Office is a unique branch of the civil service, independent from the …",
            image: blogImage1,
            date: "4 August 2021",
            publisher: {
                name: "Angel Armstrong",
                imageUrl: "https://avatar.iran.liara.run/public/3",
                id: 16
            }
        }]
    return (<div className={style.container}>
        <div className={style.pageHeader}>
            <div>
                <div className={style.title}>BLOG</div>
                <div className={style.breadcrumbs}>Home / Blog</div>
            </div>
            {/*<div className={style.actions}>*/}
            {/*    <Flex align={"center"} gap={20}>*/}
            {/*        <BsGrid className={`${style.icon}   ${grid == "small" ? style['active'] : ""}`}/>*/}
            {/*        <BsGrid1X2 className={`${style.icon}  ${grid == "big" ? style['active'] : ""}`}/>*/}
            {/*    </Flex>*/}

            {/*</div>*/}
        </div>
        <Row gutter={[25, 100]}>
            {blogs.map((value, index) => {
                return <Col
                    key={index}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={8}
                    xxl={6}
                >
                    <BlogCard blog={value}/>
                </Col>
            })}

        </Row>
        <div
            className={style.paginationContainer}>
            <Pagination defaultCurrent={page} total={50}/>
        </div>

    </div>)
}