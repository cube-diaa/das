'use client'
import style from './style.module.scss'
import {
    topRatedServicesSectionProps
} from "./topRatedServicesSectionProps";
import ServiceCard from "./ServiceCard/ServiceCard";
import expertPhotoTest from './expertPhotoTest.svg'
import {useInView} from "react-intersection-observer";
import Slider from "react-slick";
import {useViewType} from "@/app/hooks/useMediaQuery";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";

export default function TopRatedServicesSection({}: topRatedServicesSectionProps) {
    const {ref, inView} = useInView({
        threshold: 0.9,
        triggerOnce: true

    });
    const {isIpad, isMobile} = useViewType()
    const expertsData = [{
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 2,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 3,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 4,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 5,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 6,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 4,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 5,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 6,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }]

    function SampleNextArrow(props: any) {
        const {onClick} = props;
        return (
            <span
                // className={className}
                style={{
                    paddingBlock: 16,
                    paddingInline: 6,
                    color: "white",
                    display: "inline-block",
                    position: 'absolute',
                    right: -90,
                    top: "50%",
                    cursor: "pointer",
                    backgroundColor: style.colorSecondary
                }}
                onClick={onClick}
            >
                <IoIosArrowForward/>
            </span>
        );
    }

    function SamplePrevArrow(props: any) {
        const {onClick} = props;
        return (
            <span
                // className={className}
                style={{
                    paddingBlock: 16,
                    paddingInline: 6,
                    color: "white",
                    cursor: "pointer",
                    display: "inline-block",
                    position: 'absolute',
                    left: -90,
                    top: "50%",
                    backgroundColor: style.colorSecondary
                }}
                onClick={onClick}
            >
                <IoIosArrowBack/>
            </span>
        );
    }

    const settings = {
        infinite: false,
        className: style.slider,
        slidesToShow: isMobile ? 1 : isIpad ? 2 : 3,
        rows: isMobile ? 1 : isIpad ? 1 : 2,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        dots: isIpad || isMobile
    };
    return (
        <div
            className={`${style.container}`}>
            <div ref={ref}
                 style={{
                     textAlign: 'center'
                 }}
                 className={`main-section-title ${style.title} ${inView ? "animate__animated animate__lightSpeedInRight" : ""}`}>
                Top Rated Services
            </div>

            <Slider {...settings}>
                {
                    expertsData.map((expert, index) => {
                        return <div key={index} className={style.serviceCardWrapper}>
                            <ServiceCard {...expert}/>
                        </div>

                    })
                }
            </Slider>
            {/*<Row gutter={[10, 60]}>*/}
            {/*    {*/}
            {/*        expertsData.map((expert, index) => {*/}
            {/*            return <Col*/}
            {/*                xs={24}*/}
            {/*                sm={24}*/}
            {/*                md={12}*/}
            {/*                lg={12}*/}
            {/*                xl={8}*/}
            {/*                xxl={8}*/}
            {/*                style={{*/}
            {/*                    display: "flex",*/}
            {/*                    justifyContent: "center"*/}
            {/*                }}*/}
            {/*                key={index}>*/}
            {/*                <ServiceCard {...expert}/>*/}
            {/*            </Col>*/}
            {/*        })*/}
            {/*    }*/}

            {/*</Row>*/}
        </div>
    )
}