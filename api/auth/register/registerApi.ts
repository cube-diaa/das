import {RegisterRequest, RegisterResponse} from "@/api/auth/register/interfaces";
import {handleApiResponse} from "@/api/utils";


export default async function registerApi(data: RegisterRequest) {
    const response = await fetch(`http://cpanel-test.dacplat.com/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return handleApiResponse<RegisterResponse>(response);

}