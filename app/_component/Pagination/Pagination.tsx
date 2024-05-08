'use client'
import style from './style.module.scss'
import {paginationProps} from "./paginationProps";
import {ConfigProvider, Pagination as AntdPagination} from "antd";
import {usePathname, useRouter} from "next/navigation";

export default function Pagination(props: paginationProps) {
    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname)
    return (<div className={style.container}>
        <AntdPagination {...props} onChange={(page, pageSize) => {
            router.push(`${pathname}?page=${page}`)
        }}/>
    </div>)
}