import { Auth } from "types/auth.type";
import http from "utils/http";
import { LoginSchema, RegisterSchema } from "utils/schema";

export const login = (body: LoginSchema) => {
  return http.post(`/api/login`, body)
}

export const register = (body: RegisterSchema) => {
  return http.post(`/api/login`, body)
}