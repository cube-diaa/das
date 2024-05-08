import {expertCardProps} from "./expertCardProps";
import Image from "next/image";
import {Rate} from "antd";
import style from './style.module.scss'

export default function ExpertCard({
                                       rate,
                                       name,
                                       srcImage
                                   }: expertCardProps) {
    return (

        <div className={style.container}>

            <div className={style.placeholder}>
                <div>
                    <div>
                        {name}
                    </div>
                    <div>
                        <Rate
                            className={style.rate}
                            style={{
                                fontSize: 12
                            }} disabled value={rate}/>
                    </div>
                    <div>Programmer and Designer</div>
                </div>
            </div>
            <Image draggable={false} className={style.image} src={srcImage} alt={name}/>
            <div className={style.footer}>
                <div className={style.name}>{name}</div>
                <Rate disabled value={rate} className={style.rate}/>
            </div>
        </div>

    )
}