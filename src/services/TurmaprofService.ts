import type { Turmaprof } from "../types/Turmaprof";
import { API_URL } from "./api";

export async function createTurmaprof(data: Turmaprof) {
  try {
    const response = await fetch(`${API_URL}/Turmaprof`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Turmaprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurmaprof() {
  try {
    const response = await fetch(`${API_URL}/Turmaprof`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turmaprofs: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTurmaprofById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turmaprof/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Turmaprof por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateTurmaprof(id: number, data: Turmaprof) {
  try {
    const response = await fetch(`${API_URL}/Turmaprof/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Turmaprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTurmaprof(id: number) {
  try {
    const response = await fetch(`${API_URL}/Turmaprof/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Turmaprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
