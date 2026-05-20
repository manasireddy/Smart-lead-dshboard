export type UserRole =
  | "Admin"
  | "Sales";

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginBody {
  email: string;
  password: string;
}