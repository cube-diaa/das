'use client'
import style from './style.module.scss'
import heroImage from './heroImage.svg'
import Image from "next/image";
import {Carousel, Flex, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useViewType} from "@/app/hooks/useMediaQuery";
import {useHeroSectionStore} from "@/app/stores/heroSection";
import {useInView} from "react-intersection-observer";

export default function HeroSection() {
    const {isLaptop, isDesktop, isIpad, isMobile} = useViewType()
    const popularSearch1 = ["Contracting consultant", "Lawyer", "Conflict Resolution Consultant"]
    const popularSearch2 = ["Lawyer", "Conflict Resolution Consultant", "Lawyer"]
    const {updateVisibility} = useHeroSectionStore()
    const {ref} = useInView({
        threshold: 0.2,
        onChange: (inView) => {
            updateVisibility(inView)
        }

    });


    const sliders = [{
        title: "The Judicial Office",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod.",
        popularSearch: popularSearch1,
        image: heroImage
    }, {
        title: "The Court of Cassation",
        description: " Adipiscing Elit, Sed Diam Nonummy Nibh Euismod. Lorem Ipsum Dolor Sit Amet, Consectetuer",
        popularSearch: popularSearch2,
        image: heroImage
    }]


    return (
        <div className={'hero-section-slider'}>

            <Carousel
                className={'slider'}
                autoplay={true} speed={1500} effect="fade">
                {sliders.map(({popularSearch, image, title, description}, index) => {
                    return (<div key={index}>
                        <div className={style.container}>
                            <div className={style.searchBox}>
                                <div className={style.title}>{title}</div>
                                <div><span className={style.descriptionPrefix}></span>{description}</div>
                                <div className={style.input} ref={ref}>
                                    <Input addonAfter={<SearchOutlined className={style.icon}/>}
                                           placeholder={"Find & Expert Service"}/>
                                </div>
                                {!isMobile && !isIpad &&
                                    <Flex style={{
                                        width: "100%"
                                    }} vertical={isMobile} justify={isMobile ? "center" : "start"} align={"center"}
                                          gap={10}>
                                        <div>
                                            Popular Searches:
                                        </div>
                                        {
                                            popularSearch.map((item, index) => (<div
                                                key={index}
                                                className={style.searchKeyWords}>
                                                {item}
                                            </div>))}

                                    </Flex>
                                }
                            </div>
                            {
                                (isLaptop || isDesktop) &&
                                <div className={style.image}>
                                    <Image width={800} src={image} alt={"hero"}/>
                                </div>

                            }
                        </div>
                    </div>)
                })}
            </Carousel>
        </div>
    )
}