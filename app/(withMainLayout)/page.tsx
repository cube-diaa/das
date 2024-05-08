import dynamic from "next/dynamic";


const CategoriesSection = dynamic(() => import('@/app/_component/HomePage/CategoriesSection/CategoriesSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const StatisticsSection = dynamic(() => import("@/app/_component/HomePage/StatisticsSection/StatisticsSection"), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const PartnersSection = dynamic(() => import('@/app/_component/HomePage/PartnersSection/PartnersSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const BlogSection = dynamic(() => import('@/app/_component/HomePage/BlogSection/BlogSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const FAQSection = dynamic(() => import('@/app/_component/HomePage/FAQSection/FAQSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const TopRatedServicesSection = dynamic(() => import('@/app/_component/HomePage/TopReatedServicesSection/TopRatedServicesSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const RequestCourseSection = dynamic(() => import('@/app/_component/HomePage/RequestCourseSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const HeroSection = dynamic(() => import('@/app/_component/HomePage/HeroSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})
const OurExpertSection = dynamic(() => import('@/app/_component/HomePage/OurExpertSection/OurExpertSection'), {
    ssr: false,
    loading: () => {
        return <div className={'section-loading'}></div>
    }
})


export default function Page() {
    return <div>
        <HeroSection/>
        <BlogSection/>
        <CategoriesSection/>
        <TopRatedServicesSection/>
        <RequestCourseSection/>
        <OurExpertSection/>
        <StatisticsSection/>
        <PartnersSection/>
        <FAQSection/>
    </div>
}