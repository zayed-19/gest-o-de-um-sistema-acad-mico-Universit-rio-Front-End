import type { Cargo } from "../types/Cargo";
import { API_URL } from "./api";

export async function createCargo(data: Cargo) {
  try {
    const response = await fetch(`${API_URL}/Cargo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Cargo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCargo() {
  try {
    const response = await fetch(`${API_URL}/Cargo`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Cargos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCargoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Cargo/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Cargo por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateCargo(id: number, data: Cargo) {
  try {
    const response = await fetch(`${API_URL}/Cargo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Cargo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCargo(id: number) {
  try {
    const response = await fetch(`${API_URL}/Cargo/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Cargo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
