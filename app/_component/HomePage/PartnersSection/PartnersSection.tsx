'use client'
import style from './style.module.scss'
import partnersSectionProps from "./partnersSectionProps";
import {Avatar, Col, Flex, Row} from "antd";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

import p1 from './partnersLogo/p1.svg'
import p2 from './partnersLogo/p2.svg'
import p3 from './partnersLogo/p3.svg'
import p4 from './partnersLogo/p4.svg'
import p5 from './partnersLogo/p5.svg'
import p6 from './partnersLogo/p6.svg'
import p7 from './partnersLogo/p7.svg'
import p8 from './partnersLogo/p8.svg'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useState} from "react";
import {useViewType} from "@/app/hooks/useMediaQuery";

export default function PartnersSection({}: partnersSectionProps) {
    const partnerLogos = [p1, p2, p3, p4, p5, p6, p7, p8]
    const [currenPartnerQuote, setCurrentPartnerQuote] = useState<number>(-1)
    const {isIpad, isMobile} = useViewType()
    const partner = [{
        name: "Bob Goff",
        quote: "The doctor sees all the weakness of mankind; the lawyer all the wickedness, the theologian all the stupidity.",
        avatar: "https://avatar.iran.liara.run/public/1"
    }, {
        name: "Benjamin Franklin",
        quote: "Being a lawyer is not merely a vocation. It is a public trust, and each of us has an obligation to give back to our communities",
        avatar: "https://avatar.iran.liara.run/public/2"
    }, {
        name: "Robert Frost",
        quote: "Well, I don't know as I want a lawyer to tell me what I cannot do. I hire him to tell how to do what I want to do.",
        avatar: "https://avatar.iran.liara.run/public/3"
    }, {
        name: "Charles Lamb",
        quote: "There is no better way of exercising the imagination than the study of law. No poet ever interpreted nature as freely as a lawyer interprets the truth",
        avatar: "https://avatar.iran.liara.run/public/4"
    }]

    function SampleNextArrow(props: any) {
        const {className, style, onClick} = props;
        return (
            <span
                // className={className}
                style={{
                    ...style,
                    display: "inline-block",
                    position: 'absolute',
                    right: -30,
                    top: 30,
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                <FaArrowRight/>
            </span>
        );
    }

    function SamplePrevArrow(props: any) {
        const {className, style, onClick} = props;
        return (
            <span
                // className={className}
                style={{
                    ...style,
                    cursor: "pointer",
                    display: "inline-block",
                    position: 'absolute',
                    left: -30,
                    top: 30,
                }}
                onClick={onClick}
            >
                <FaArrowLeft/>
            </span>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <div className={style.container}>
            <Row>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    xxl={12}
                    className={style.partnerWords}>
                    <Flex vertical align={(isIpad || isMobile) ? "center" : "start"}>
                        <div className={'main-section-title'} style={{
                            marginBottom: 0,
                            color: "white"
                        }}>Partners
                        </div>
                        <div style={{
                            fontStyle: "italic",
                            fontSize: 35,
                            fontWeight: "bold"
                        }}>"
                        </div>
                        <div className={style.quote}>
                            {partner[Number(currenPartnerQuote + 1)].quote}
                        </div>
                        <div className={style.name}>{partner[Number(currenPartnerQuote + 1)].name}</div>
                        <div className={style.sliderContainer}>
                            <Slider {...settings}
                                    afterChange={(currentSlide) => {
                                        setCurrentPartnerQuote(currentSlide === 3 ? -1 : currentSlide)
                                    }}>

                                {
                                    partner.map(({avatar, quote, name}, index) => {
                                            return (<div className={style.slider} key={index}>
                                                <Avatar
                                                    className={`${style.avatar} ${index != currenPartnerQuote + 1 ? style["notInStage"] : ""}`}
                                                    src={avatar} size={48}/>
                                            </div>)
                                        }
                                    )
                                }
                            </Slider>
                        </div>
                    </Flex>

                </Col>
                <Col xs={24}
                     sm={24}
                     md={24}
                     lg={12}
                     xl={12}
                     xxl={12}>
                    <div className={style.partnerLogoSection}>
                        <Row gutter={[(isMobile || isIpad) ? 30 : 10, 30]}>

                            {
                                partnerLogos.map((logo, index) => (
                                        <Col
                                            className={style.partnerLogoWrapper}
                                            xs={6}
                                            sm={3}
                                            md={3}
                                            lg={8}
                                            xl={8}
                                            xxl={8}
                                            key={index}>
                                            <Image draggable={false}
                                                   className={style.partnerLogo}
                                                   src={logo}
                                                   alt={"partner-logo"}/>
                                        </Col>
                                    )
                                )
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}