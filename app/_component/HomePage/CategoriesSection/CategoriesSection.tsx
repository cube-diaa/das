'use client'
import style from './style.module.scss'
import CategoryCard from "@/app/_component/HomePage/CategoriesSection/CategoryCard";
import Slider from "react-slick";
import {useViewType} from "@/app/hooks/useMediaQuery";
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'
import Image from "next/image";

export default function CategoriesSection() {
    const {isIpad, isLaptop, isMobile, isDesktop} = useViewType()
    const categories = [{
        name: "Contractual services",
        id: "1",
        number: "01"
    }, {
        name: "Dispute Resolution Consultation Expert Determination",
        id: "2",
        number: "02"
    }, {
        name: "Forensic Technical Design",
        id: "3",
        number: "03"
    }, {
        name: "Disruption Service",
        id: "4",
        number: "04"
    }, {
        name: "Dispute Resolution Consultation - Mediation",
        id: "5",
        number: "05"
    }, {
        name: "Planning And Programming",
        id: "6",
        number: "06"
    }, {
        name: "Dispute Resolution Consultation-Determination",
        id: "7",
        number: "07"
    }, {
        name: "Contractual services",
        id: "8",
        number: "08"
    }, {
        name: "Building Information Modelling - BIM",
        id: "9",
        number: "09"
    }]

    function SampleNextArrow(props: any) {
        const {onClick} = props;
        return (
            <span

                style={{
                    display: "inline-block",
                    position: 'absolute',
                    right: -60,
                    top: "50%",
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                    <Image width={50} src={arrowRight} alt={"arrow"}/>
            </span>
        );
    }

    function SamplePrevArrow(props: any) {
        const {onClick} = props;
        return (
            <span
                style={{
                    ...style,
                    cursor: "pointer",
                    display: "inline-block",
                    position: 'absolute',
                    left: -60,
                    top: "50%",
                }}
                onClick={onClick}
            >
                <Image width={50} src={arrowLeft} alt={"arrow"}/>
            </span>
        );
    }

    const settings = {
        className: style.slider,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : isIpad ? 2 : 3,
        rows: isMobile ? 1 : isIpad ? 2 : 3,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        dots: isIpad || isMobile
    };
    return <div className={style.container}>
        <div className={`${style.title} main-section-title`}>Categories</div>
        <div className={style.list}>
            <Slider {...settings}>
                {
                    categories.map((value, index) => {
                        return <CategoryCard key={index} category={value}/>

                    })
                }
            </Slider>
        </div>
    </div>
}