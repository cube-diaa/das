export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
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