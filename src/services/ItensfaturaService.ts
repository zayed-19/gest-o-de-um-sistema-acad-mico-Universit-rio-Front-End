import type { Itensfatura } from "../types/Itensfatura";
import { API_URL } from "./api";

export async function createItensfatura(data: Itensfatura) {
  try {
    const response = await fetch(`${API_URL}/Itensfatura`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Itensfatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItensfatura() {
  try {
    const response = await fetch(`${API_URL}/Itensfatura`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Itensfaturas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItensfaturaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Itensfatura/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Itensfatura por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateItensfatura(id: number, data: Itensfatura) {
  try {
    const response = await fetch(`${API_URL}/Itensfatura/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Itensfatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteItensfatura(id: number) {
  try {
    const response = await fetch(`${API_URL}/Itensfatura/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Itensfatura: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
