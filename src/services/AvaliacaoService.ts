import type { Avaliacao } from "../types/Avaliacao";
import { API_URL } from "./api";

export async function createAvaliacao(data: Avaliacao) {
  try {
    const response = await fetch(`${API_URL}/Avaliacao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Avaliação: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAvaliacoes() {
  try {
    const response = await fetch(`${API_URL}/Avaliacao`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Avaliações: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAvaliacaoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Avaliacao/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Avaliação por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateAvaliacao(id: number, data: Avaliacao) {
  try {
    const response = await fetch(`${API_URL}/Avaliacao/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Avaliação: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAvaliacao(id: number) {
  try {
    const response = await fetch(`${API_URL}/Avaliacao/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Avaliação: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
