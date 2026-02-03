import type { Disciplina } from "../types/Disciplina";
import { API_URL } from "./api";

export async function createDisciplina(data: Disciplina) {
  try {
    const response = await fetch(`${API_URL}/Disciplina`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Disciplina: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDisciplina() {
  try {
    const response = await fetch(`${API_URL}/Disciplina`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Disciplinas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDisciplinaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Disciplina/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Disciplina por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateDisciplina(id: number, data: Disciplina) {
  try {
    const response = await fetch(`${API_URL}/Disciplina/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Disciplina: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteDisciplina(id: number) {
  try {
    const response = await fetch(`${API_URL}/Disciplina/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Disciplina: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
