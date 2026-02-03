import type { Fatura } from "../types/Fatura";
import { API_URL } from "./api";

export async function createFatura(data: Fatura) {
  try {
    const response = await fetch(`${API_URL}/Fatura`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Fatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFatura() {
  try {
    const response = await fetch(`${API_URL}/Fatura`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Faturas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFaturaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Fatura/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Fatura por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateFatura(id: number, data: Fatura) {
  try {
    const response = await fetch(`${API_URL}/Fatura/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Fatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteFatura(id: number) {
  try {
    const response = await fetch(`${API_URL}/Fatura/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Fatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
