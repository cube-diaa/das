'use client'
import style from './style.module.scss'
import {
    topRatedServicesSectionProps
} from "./topRatedServicesSectionProps";
import ServiceCard from "./ServiceCard/ServiceCard";
import expertPhotoTest from './expertPhotoTest.svg'
import {Col, Row} from "antd";
import {useInView} from "react-intersection-observer";

export default function TopRatedServicesSection({}: topRatedServicesSectionProps) {
    const {ref, inView} = useInView({
        threshold: 0.9,
        triggerOnce: true

    });
    const expertsData = [{
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }, {
        id: 1,
        expertName: "Stella Kane",
        price: 50.00,
        rate: 2,
        imageUrl: expertPhotoTest,
        date: "4 August 2021"
    }]

    return (
        <div
            className={`${style.container}`}>
            <div ref={ref}
                 className={`${style.title} ${inView ? "animate__animated animate__lightSpeedInRight" : ""}`}>Top Rated
                Services
            </div>
            <Row gutter={[10, 60]}>
                {
                    expertsData.map((expert, index) => {
                        return <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={8}
                            xxl={8}
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                            key={index}>
                            <ServiceCard {...expert}/>
                        </Col>
                    })
                }

            </Row>
        </div>
    )
}