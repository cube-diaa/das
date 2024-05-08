import {LoginRequest, LoginResponse} from "@/api/auth/login/interfaces";
import {handleApiResponse} from "@/api/utils";

export default async function loginApi(data: LoginRequest) {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return handleApiResponse<LoginResponse, {
        token: string
    }>(response);

}