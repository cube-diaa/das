import {statisticsItemProps} from "./statisticsItemProps";
import style from './style.module.scss'
import {Flex} from "antd";
import Image from "next/image";
import CountUp from "react-countup";

export default function StatisticsItem({text, value, percentage, icon, id, suffix}: statisticsItemProps) {
    return <div className={style.container}>
        <Flex align={"center"} gap={30}>
            <div className={`${style.icon} ${style[id]}`}>
                <Image draggable={false}
                       className={style.img}
                       src={icon}
                       alt={text}/>
            </div>
            <Flex vertical>

                <div className={style.value}><CountUp
                    suffix={suffix}
                    duration={10}
                    start={0}
                    end={value}/></div>
                <div className={style.text}>{String(text)}</div>
            </Flex>

        </Flex>
    </div>
}