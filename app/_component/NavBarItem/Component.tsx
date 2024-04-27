import style from './style.module.scss'
import IProps from "@/app/_component/NavBarItem/props";

export default function Component({
                                      text,
                                      icon,
                                      onClick,
                                      id
                                  }: IProps) {
    return (<div className={style.container}
                 onClick={() => {
                     onClick(id)
                 }}>
        {icon &&
            <div className={style.icon}>{icon}</div>
        }
        {text &&
            <div className={style.text}>{text}</div>
        }
    </div>)
}