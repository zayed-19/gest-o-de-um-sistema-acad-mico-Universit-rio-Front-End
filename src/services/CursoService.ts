import type { Curso } from "../types/Curso";
import { API_URL } from "./api";

export async function createCurso(data: Curso) {
  try {
    const response = await fetch(`${API_URL}/Curso`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Curso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCurso() {
  try {
    const response = await fetch(`${API_URL}/Curso`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Cursos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCursoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Curso/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Curso por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateCurso(id: number, data: Curso) {
  try {
    const response = await fetch(`${API_URL}/Curso/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Curso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCurso(id: number) {
  try {
    const response = await fetch(`${API_URL}/Curso/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Curso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
