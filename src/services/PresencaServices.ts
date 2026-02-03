import type { Presenca } from "../types/Presenca";
import { API_URL } from "./api";

export async function createPresenca(data: Presenca) {
  try {
    const response = await fetch(`${API_URL}/Presenca`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Presenca: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPresenca() {
  try {
    const response = await fetch(`${API_URL}/Presenca`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Presencas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPresencaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Presenca/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Presenca por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updatePresenca(id: number, data: Presenca) {
  try {
    const response = await fetch(`${API_URL}/Presenca/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Presenca: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deletePresenca(id: number) {
  try {
    const response = await fetch(`${API_URL}/Presenca/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Presenca: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
