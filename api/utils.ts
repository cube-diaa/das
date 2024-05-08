import {BaseResponse} from "@/api/types";

export async function handleApiResponse<T, E = unknown>(response: Response): Promise<BaseResponse<T, E>> {

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
    }
    return response.json();
}

