import type { Professor } from "../types/Professor";
import { API_URL } from "./api";

export async function createProfessor(data: Professor) {
  try {
    const response = await fetch(`${API_URL}/Professor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Professor: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProfessor() {
  try {
    const response = await fetch(`${API_URL}/Professor`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Professores: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProfessorById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Professor/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Professor por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateProfessor(id: number, data: Professor) {
  try {
    const response = await fetch(`${API_URL}/Professor/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Professor: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteProfessor(id: number) {
  try {
    const response = await fetch(`${API_URL}/Professor/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Professor: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
