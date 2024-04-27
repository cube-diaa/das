'use client'
import ExpertCard from "./ExpertCard";
import style from './style.module.scss'
import expertPhoto from './expertPhotoTest.svg'
import {useInView} from "react-intersection-observer";

export function OurExpertSection() {
    const {ref, inView} = useInView({
        threshold: 0.4,
        triggerOnce: true

    });
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
                 className={`${style.title} ${inView ? "animate__animated animate__fadeInLeft" : ""}`}>Our
                Experts
            </div>
            <div className={style.cardList}>
                {
                    expertsData.map(({name, image, rate}, index) => {
                        return (<ExpertCard rate={rate}
                                            name={name}
                                            key={index}
                                            srcImage={image}/>)

                    })
                }
            </div>
        </div>)
}