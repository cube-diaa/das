import {ReactNode} from "react";

export default interface IProps {
    text: string;
    href: string;
    icon?: ReactNode;
    children?: Omit<IProps, "children">[];
}