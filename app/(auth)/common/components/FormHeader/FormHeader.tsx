import style from './style.module.scss'
import formHeaderProps from "@/app/(auth)/common/components/FormHeader/formHeaderProps";

export default function FormHeader({
                                       mainTitle,
                                       subTitle
                                   }: formHeaderProps) {
    return <div className={style.formHeader}>
        <div>{mainTitle}</div>
        <div>{subTitle}</div>
    </div>
}