import type { Historico_matricula } from "../types/Historico_matricula";
import { API_URL } from "./api";

export async function createHistorico_matricula(data: Historico_matricula) {
  try {
    const response = await fetch(`${API_URL}/Historico_matricula`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Historico_matricula: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getHistorico_matricula() {
  try {
    const response = await fetch(`${API_URL}/Historico_matricula`);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar Historico_matriculas: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getHistorico_matriculaById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Historico_matricula/${id}`);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar Historico_matricula por ID: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateHistorico_matricula(
  id: number,
  data: Historico_matricula,
) {
  try {
    const response = await fetch(`${API_URL}/Historico_matricula/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Erro ao atualizar Historico_matricula: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteHistorico_matricula(id: number) {
  try {
    const response = await fetch(`${API_URL}/Historico_matricula/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Historico: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
