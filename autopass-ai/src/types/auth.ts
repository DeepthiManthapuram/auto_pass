export type UserRole =
  | "owner"
  | "passenger";

export interface AuthUser {
  id: string;
  role: UserRole;
  phone: string;
  token: string;
}

export interface LoginRequest {
  phone: string;
}

export interface OtpRequest {
  otp: string;
}