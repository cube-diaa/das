import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import('@/app/(auth)/sign-up/Form/SignUpForm'), {
    ssr: false
})


export default function SignUpPage() {
    return (
        <SignUpForm/>
    )
}