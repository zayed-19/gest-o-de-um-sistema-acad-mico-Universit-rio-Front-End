import type { Notificacoes } from "../types/Notificacoes";
import { API_URL } from "./api";

export async function createNotificacoes(data: Notificacoes) {
  try {
    const response = await fetch(`${API_URL}/Notificacoes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Notificacoes: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getNotificacoes() {
  try {
    const response = await fetch(`${API_URL}/Notificacoes`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Notificacoes: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getNotificacoesById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Notificacoes/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Notificacoes por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateNotificacoes(id: number, data: Notificacoes) {
  try {
    const response = await fetch(`${API_URL}/Notificacoes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Notificacoes: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteNotificacoes(id: number) {
  try {
    const response = await fetch(`${API_URL}/Notificacoes/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Notificacoes: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
