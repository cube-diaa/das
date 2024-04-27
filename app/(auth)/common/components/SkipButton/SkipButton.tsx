import skipButtonProps from "./skipButtonProps";
import style from './style.module.scss'
import Link from "next/link";

export default function SkipButton({}: skipButtonProps) {
    return (
        <Link href={"/"} className={style.skipButton}>Skip</Link>
    )
}