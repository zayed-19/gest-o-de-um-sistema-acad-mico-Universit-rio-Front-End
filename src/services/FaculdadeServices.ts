import type { Faculdades } from "../types/Faculdades";
import { API_URL } from "./api";

export async function createFaculdade(data: Faculdades) {
  try {
    const response = await fetch(`${API_URL}/Faculdade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Faculdade: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFaculdade() {
  try {
    const response = await fetch(`${API_URL}/Faculdade`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Faculdades: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFaculdadeById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Faculdade/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Faculdade por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateFaculdade(id: number, data: Faculdades) {
  try {
    const response = await fetch(`${API_URL}/Faculdade/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Faculdade: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteFaculdade(id: number) {
  try {
    const response = await fetch(`${API_URL}/Faculdade/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Faculdade: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
