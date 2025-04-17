export interface User {
    id: string;
    email: string;
    username: string;
}

export interface RegisterFormData {
    email: string;
    username: string;
    password: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}