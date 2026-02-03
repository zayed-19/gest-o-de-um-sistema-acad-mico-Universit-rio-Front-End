import type { Matricula } from "../types/Matricula";
import { API_URL } from "./api";

export async function createMatricula(data: Matricula) {
  try {
    const response = await fetch(`${API_URL}/Matricula`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Matricula: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMatricula() {
  try {
    const response = await fetch(`${API_URL}/Matricula`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Matriculas: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMatriculaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Matricula/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Matricula por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateMatricula(id: number, data: Matricula) {
  try {
    const response = await fetch(`${API_URL}/Matricula/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Matricula: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteMatricula(id: number) {
  try {
    const response = await fetch(`${API_URL}/Matricula/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Matricula: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
