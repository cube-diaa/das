export interface BaseResponse<T, E = unknown> {
    data: T
    message: string
    code: string
    extra_data: E
}
