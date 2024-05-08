'use server'

import forgotPasswordApi from "@/api/auth/forgotPassword/forgotPasswordApi";
import {forgotPasswordParams} from "@/api/auth/forgotPassword/interfaces";

export default async function sendResetPasswordLinkAction(data: forgotPasswordParams) {
    return forgotPasswordApi(data)
}

