import type { Turma } from "../types/Turma";
import { API_URL } from "./api";

export async function createTurma(data: Turma) {
  try {
    const response = await fetch(`${API_URL}/Turma`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Turma: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurma() {
  try {
    const response = await fetch(`${API_URL}/Turma`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turmas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurmaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turma/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turma por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateTurma(id: number, data: Turma) {
  try {
    const response = await fetch(`${API_URL}/Turma/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Turma: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTurma(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turma/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Turma: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
