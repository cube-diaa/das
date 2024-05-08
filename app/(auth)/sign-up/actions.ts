'use server'
import {RegisterRequest} from "@/api/auth/register/interfaces";
import registerApi from "@/api/auth/register/registerApi";

export async function signUpAction(data: RegisterRequest) {
    return registerApi(data)
}