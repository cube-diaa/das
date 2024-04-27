import React from "react";

import Footer from "@/app/_component/Footer";
import dynamic from "next/dynamic";
import 'animate.css';
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
        <div className={'app-content'}>
            {children}
        </div>
        <Footer/>
    </div>
}