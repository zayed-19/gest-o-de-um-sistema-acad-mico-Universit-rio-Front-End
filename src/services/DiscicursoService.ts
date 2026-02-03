import type { Discicurso } from "../types/Discicurso";
import { API_URL } from "./api";

export async function createDiscicurso(data: Discicurso) {
  try {
    const response = await fetch(`${API_URL}/Discicurso`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Discicurso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDiscicurso() {
  try {
    const response = await fetch(`${API_URL}/Discicurso`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Discicursos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDiscicursoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Discicurso/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Discicurso por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateDiscicurso(id: number, data: Discicurso) {
  try {
    const response = await fetch(`${API_URL}/Discicurso/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Discicurso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteDiscicurso(id: number) {
  try {
    const response = await fetch(`${API_URL}/Discicurso/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Discicurso: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
