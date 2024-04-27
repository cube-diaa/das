import IProps from "@/app/_component/NavBarMenu/props";
import {NavBarItem} from "@/app/_component/NavBarItem";
import style from './style.module.scss'

export default function Component({items}: IProps) {
    return (<div className={style.container}>
        {
            items.map((item, index: number) => {
                return <NavBarItem key={index} {...item}/>
            })
        }
    </div>)
}