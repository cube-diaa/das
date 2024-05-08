import {handleApiResponse} from "@/api/utils";
import {resetPasswordRequest} from "@/api/auth/resetPassword/interfaces";

export default async function resetPasswordApi(data: resetPasswordRequest) {
    const response = await fetch(`${process.env.API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return handleApiResponse(response);
}