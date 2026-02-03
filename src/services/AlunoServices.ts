import type { Aluno } from "../types/Aluno";
import { API_URL } from "./api";

export async function createAluno(data: Aluno) {
  try {
    const response = await fetch(`${API_URL}/Aluno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Aluno: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAlunos() {
  try {
    const response = await fetch(`${API_URL}/Aluno`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Alunos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAlunoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Aluno/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Aluno por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateAluno(id: number, data: Aluno) {
  try {
    const response = await fetch(`${API_URL}/Aluno/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Aluno: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAluno(id: number) {
  try {
    const response = await fetch(`${API_URL}/Aluno/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Aluno: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
