import style from './style.module.scss'
import {categoryCardProps} from "./categoryCardProps";

export default function CategoryCard({
                                         category: {
                                             number,
                                             name,
                                             id
                                         }
                                     }: categoryCardProps) {
    return <div className={style.container}>
        <div className={style.number}>
            {number}
        </div>
        <div className={style.name}>
            {name}
        </div>
    </div>
}