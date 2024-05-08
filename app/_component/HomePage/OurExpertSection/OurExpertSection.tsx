'use client'
import ExpertCard from "./ExpertCard";
import style from './style.module.scss'
import expertPhoto from './expertPhotoTest.svg'
import {useInView} from "react-intersection-observer";
import {Col, Row} from "antd";

export default function OurExpertSection() {
    const {ref, inView} = useInView({
        threshold: 0.4,
        triggerOnce: true

    });


    function BecomeExpertCard() {
        return <div className={style.becomeExpertCard}>
            <div className={style.button}>Become an Expert</div>
        </div>
    }

    const expertsData = [{
        name: "Zac Wolff",
        image: expertPhoto,
        rate: 3
    }, {
        name: "Zac Wolff",
        image: expertPhoto,
        rate: 4
    }, {
        name: "Zac Wolff",
        image: expertPhoto,
        rate: 1
    }, {
        name: "Zac Wolff",
        image: expertPhoto,
        rate: 5
    }, {
        name: "Maik Rond",
        image: expertPhoto,
        rate: 3.5
    }, {
        name: "Zac Wolff",
        image: expertPhoto,
        rate: 1.5
    }, {
        name: "Maik Rond",
        image: expertPhoto,
        rate: 4
    }]
    return (

        <div className={`${style.container}`}>
            <div ref={ref}
                 className={`main-section-title ${inView ? "animate__animated animate__fadeInLeft" : ""}`}>Our
                Experts
            </div>
            <Row gutter={[20, 20]}>
                {
                    expertsData.map(({name, image, rate}, index) => {
                        return (<Col
                                xs={24}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                                xxl={6}
                                key={index}>
                                <ExpertCard rate={rate}
                                            name={name}
                                            key={index}
                                            srcImage={image}/>
                            </Col>
                        )

                    })
                }
                <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    xxl={6}
                    key={"become-expert-card"}>
                    <BecomeExpertCard/>
                </Col>
            </Row>
        </div>
    )
}