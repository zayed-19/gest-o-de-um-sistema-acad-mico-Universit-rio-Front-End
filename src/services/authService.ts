import { API_URL } from "./api";

export async function register(data: { email: string; senha: string }) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro ao cadastrar");
  }

  return await response.json();
}

export async function login(data: { email: string; senha: string }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro ao fazer login");
  }

  return await response.json();
}
