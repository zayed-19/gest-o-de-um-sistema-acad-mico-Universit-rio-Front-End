import type { Disciprof } from "../types/Disciprof";
import { API_URL } from "./api";

export async function createDisciprof(data: Disciprof) {
  try {
    const response = await fetch(`${API_URL}/Disciprof`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Disciprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDisciprof() {
  try {
    const response = await fetch(`${API_URL}/Disciprof`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Disciprofs: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDisciprofById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Disciprof/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Disciprof por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateDisciprof(id: number, data: Disciprof) {
  try {
    const response = await fetch(`${API_URL}/Disciprof/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Disciprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteDisciprof(id: number) {
  try {
    const response = await fetch(`${API_URL}/Disciprof/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Disciprof: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
