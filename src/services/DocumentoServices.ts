import type { Documento } from "../types/Documento";
import { API_URL } from "./api";

export async function createDocumento(data: Documento) {
  try {
    const response = await fetch(`${API_URL}/Documento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Documento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDocumento() {
  try {
    const response = await fetch(`${API_URL}/Documento`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Documentos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDocumentoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Documento/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Documento por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateDocumento(id: number, data: Documento) {
  try {
    const response = await fetch(`${API_URL}/Documento/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Documento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteDocumento(id: number) {
  try {
    const response = await fetch(`${API_URL}/Documento/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Documento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
