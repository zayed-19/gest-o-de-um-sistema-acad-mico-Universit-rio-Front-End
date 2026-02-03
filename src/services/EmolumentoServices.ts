import type { Emolumento } from "../types/Emolumento";
import { API_URL } from "./api";

export async function createEmolumento(data: Emolumento) {
  try {
    const response = await fetch(`${API_URL}/Emolumento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Emolumento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEmolumento() {
  try {
    const response = await fetch(`${API_URL}/Emolumento`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Emolumentos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEmolumentoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Emolumento/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Emolumento por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateEmolumento(id: number, data: Emolumento) {
  try {
    const response = await fetch(`${API_URL}/Emolumento/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Emolumento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteEmolumento(id: number) {
  try {
    const response = await fetch(`${API_URL}/Emolumento/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Emolumento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
