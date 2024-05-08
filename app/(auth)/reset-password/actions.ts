'use server'

import resetPasswordApi from "@/api/auth/resetPassword/resetPasswordApi";
import {resetPasswordRequest} from "@/api/auth/resetPassword/interfaces";

export default async function resetPasswordAction(data: resetPasswordRequest) {
    return resetPasswordApi(data)
}