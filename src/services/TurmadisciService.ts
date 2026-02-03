import type { Turmadisci } from "../types/Turmadisci";
import { API_URL } from "./api";

export async function createTurmadisci(data: Turmadisci) {
  try {
    const response = await fetch(`${API_URL}/Turmadisci`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Turmadisci: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurmadisci() {
  try {
    const response = await fetch(`${API_URL}/Turmadisci`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turmadiscis: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurmadisciById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turmadisci/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turmadisci por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateTurmadisci(id: number, data: Turmadisci) {
  try {
    const response = await fetch(`${API_URL}/Turmadisci/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Turmadisci: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTurmadisci(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turmadisci/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Turmadisci: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
