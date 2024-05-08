'use server'
import loginApi from "@/api/auth/login/loginApi";
import {LoginRequest} from "@/api/auth/login/interfaces";
import {cookies} from 'next/headers'

export async function loginAction(data: LoginRequest) {
    return loginApi(data).then(async (res) => {
        cookies().set("dasToken", res.extra_data.token)
        return res
    })
}