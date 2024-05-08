import React from "react";

import Footer from "@/app/_component/Footer";
import dynamic from "next/dynamic";
import 'animate.css';
import {Flex} from "antd";

const Header = dynamic(() => import('@/app/_component/Header/Component'), {ssr: false})
export default function MainLayout({
                                       children
                                   }: {
    children: React.ReactNode;
}) {
    return <div>
        <div>
            <Header/>
        </div>
        {/*<Flex justify={"center"}>*/}
            <div className={'app-content'}>
                {children}
            </div>
        {/*</Flex>*/}
        <Footer/>
    </div>
}