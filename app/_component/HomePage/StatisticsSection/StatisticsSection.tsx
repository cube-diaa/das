'use client'
import style from './style.module.scss'
import {statisticsSectionProps} from "./statisticsSectionProps";
import CountUp from "react-countup";
import projectsIcon from './assets/projects.svg'
import doneTasksIcon from './assets/doneTasks.svg'
import expertsIcon from './assets/experts.svg'
import StatisticsItem from "@/app/_component/HomePage/StatisticsSection/StatisticsItem";
import {Col, Row} from "antd";

export default function StatisticsSection({}: statisticsSectionProps) {
    const values = [{
        key: "project",
        text: "projects",
        value: 120,
        suffix: "+",
        percentage: 0,
        icon: projectsIcon
    }, {
        key: "expert",
        text: "expert",
        value: 1,
        suffix: "K+",
        percentage: 0,
        icon: expertsIcon
    }, {
        key: "task",
        text: "done task",
        value: 568,
        suffix: "",
        percentage: 0,
        icon: doneTasksIcon
    }, {
        key: "hour",
        text: "paid hours",
        value: 4,
        suffix: "K+",
        percentage: 0,
        icon: projectsIcon
    }]


    return (<div className={style.container}>
        <div className={'main-section-title'}
             style={{
                 textTransform: "uppercase",
                 textAlign: "center"
             }}>Statistics
        </div>

        <Row className={style.content} gutter={[20, 20]}>
            {
                values.map(({value, percentage, suffix, text, icon, key}, index) => {
                    return <Col xs={24}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                                xxl={6}
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}
                    >
                        <StatisticsItem icon={icon}
                                        suffix={suffix}
                                        id={key}
                                        value={value}
                                        text={text}
                                        percentage={percentage}
                                        key={index}/>
                    </Col>
                })
            }
        </Row>


        <div className={style.description}>
            <div>
                Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy
                Nibh Euismod Tincidunt Ut Laoreet Dolore Magna Aliquam Erat Volutpat. Ut Wisi Enim Ad Minim Veniam, Quis
            </div>
        </div>
    </div>)
}