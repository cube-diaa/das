'use client';
import {NavBarMenu} from "@/app/_component/NavBarMenu";
import {Affix, Drawer, Flex, Input} from "antd";
import {aboutUsIcon, blogIcon, loginIcon, signUpIcon} from "@/app/_component/Header/constants";
import Image from "next/image";
import logo from '@/app/assets/logo.svg'
import notificationIcon from '@/app/assets/notifications.svg'
import expertIcon from '@/app/assets/expert.svg'
import chatIcon from '@/app/assets/chat.svg'
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useViewType} from "@/app/hooks/useMediaQuery";
import {SearchOutlined, UnorderedListOutlined} from "@ant-design/icons";
import style from './style.module.scss'
import {NavBarItemProps} from "@/app/_component/NavBarItem";
import {useHeroSectionStore} from "@/app/stores/heroSection";

export default function Component() {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter()
    const {isLaptop, isDesktop} = useViewType()
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const {visible: isHeroSectionVisible} = useHeroSectionStore()
    const navItems: NavBarItemProps[] = [{
        id: "about-us",
        onClick: (id) => {
            router.push(id)
        },
        text: "About us",
        icon: aboutUsIcon
    }, {
        id: "blog",
        onClick: (id) => {
            router.push(id)
        },
        text: "Blog",
        icon: blogIcon
    }, ...(isAuth ? [] : [{
        id: "/login",
        onClick: (id: string) => {
            router.push(id)
        },
        text: "Login",
        icon: loginIcon
    }, {
        id: "/sign-up",
        onClick: (id: string) => {
            router.push(id)
        },
        text: "Sign Up",
        icon: signUpIcon
    }, {
        id: "",
        onClick: (id: string) => {
        },
        text: "Become an Expert",
        icon: <Image alt={""} src={expertIcon}/>
    }]), ...(isAuth ? [{
        id: "",
        onClick: (id: string) => {
        },
        text: "Become an Expert",
        icon: <Image alt={""} src={expertIcon}/>
    }, {
        id: "",
        onClick: (id: string) => {
        },
        icon: <Flex gap={16}>
            <Image alt={""} src={notificationIcon}/>
            <Image alt={""} src={chatIcon}/>
        </Flex>
    }] : [])]


    return (<Affix offsetTop={0.1}>
            <div className={style.container}>
                <div className={`${style.item} ${style.logo}`}>
                    <Image
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => router.push('/',{
                            scroll:false,
                        })}
                        draggable={false}
                        alt={"logo"}
                        src={logo}/>
                </div>
                {
                    (isDesktop || isLaptop) ? <>{
                        !isHeroSectionVisible &&
                        <div className={`${style.item} ${style.searchWrapper}`}>
                            <Input className={style.searchInput} suffix={<SearchOutlined className={style.icon}/>}
                                   placeholder={"Find & Expert service"}/>
                        </div>
                    }

                        <div className={`${style.item} ${style.navbar}`}>
                            <NavBarMenu
                                items={navItems}/>
                        </div>
                    </> : <div className={style.menuIcon}>
                        <UnorderedListOutlined
                            onClick={() => setIsDrawerOpen(true)}
                            style={{
                                fontSize: 24
                            }}/>
                    </div>
                }
                <Drawer
                    onClose={() => setIsDrawerOpen(false)}
                    open={isDrawerOpen}
                    styles={{
                        header: {
                            color: "white",
                            backgroundColor: style.colorSecondary
                        },
                        body: {
                            backgroundColor: style.colorSecondary
                        }
                    }}
                >
                    <Flex className={style.mobileMenuWrapper} vertical>
                        {navItems.map(({id, onClick, icon, text}: NavBarItemProps, index) => (
                            <Flex align={"center"} className={style.mobileMenuItem} gap={30} key={index}
                                  onClick={() => {
                                      onClick(id)
                                      setIsDrawerOpen(false)
                                  }}>
                                <div>{icon}</div>
                                <div>{text}</div>
                            </Flex>
                        ))}
                    </Flex>
                </Drawer>
            </div>
        </Affix>
    )
}