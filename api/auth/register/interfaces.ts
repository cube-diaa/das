export interface RegisterResponse {
    id: number
    email: string
    first_name: string
    last_name: string
    country: string
    nationality: string
    time_zone: string
    role: any
    permissions: any

}


export interface RegisterRequest {
    email: string
    password: string
    first_name: string
    last_name: string
}