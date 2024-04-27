import {ReactNode} from "react";

export default interface IProps {
    text?: ReactNode
    icon?: ReactNode
    id: string
    onClick: (id: string) => void
}