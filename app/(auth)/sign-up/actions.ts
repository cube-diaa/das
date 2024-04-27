'use server'
import {redirect} from "next/navigation";

export async function signUpAction() {
    redirect('/email-verify')
}