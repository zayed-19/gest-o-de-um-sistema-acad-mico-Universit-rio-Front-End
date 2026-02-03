import type { Cursoprof } from "../types/Cursoprof";
import { API_URL } from "./api";

export async function createCursoprof(data: Cursoprof) {
  try {
    const response = await fetch(`${API_URL}/Cursoprof`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Cursoprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCursoprof() {
  try {
    const response = await fetch(`${API_URL}/Cursoprof`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Cursoprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCursoprofById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Cursoprof/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Cursoprof por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateCursoprof(id: number, data: Cursoprof) {
  try {
    const response = await fetch(`${API_URL}/Cursoprof/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Cursoprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCursoprof(id: number) {
  try {
    const response = await fetch(`${API_URL}/Cursoprof/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Cursoprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
