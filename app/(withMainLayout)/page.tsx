import {OurExpertSection} from "@/app/_component/HomePage/OurExpertSection/OurExpertSection";
import dynamic from "next/dynamic";
import RequestCourseSection from "@/app/_component/HomePage/RequestCourseSection";
import TopRatedServicesSection from "@/app/_component/HomePage/TopReatedServicesSection/TopRatedServicesSection";
import FAQSection from "@/app/_component/HomePage/FAQSection";

const HeroSection = dynamic(() => import('@/app/_component/HomePage/HeroSection'), {
    ssr: false
})


export default function Page() {
    return <div>
        <HeroSection/>
        <TopRatedServicesSection/>
        <RequestCourseSection/>
        <OurExpertSection/>
        <FAQSection/>
    </div>
}