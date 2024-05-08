import {handleApiResponse} from "@/api/utils";
import {forgotPasswordParams} from "@/api/auth/forgotPassword/interfaces";

export default async function forgotPasswordApi(params: forgotPasswordParams) {
    const response = await fetch(`${process.env.API_URL}/auth/forget-password?email=${params.email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return handleApiResponse(response);

}