import type { Pagamento } from "../types/Pagamento";
import { API_URL } from "./api";

export async function createPagamento(data: Pagamento) {
  try {
    const response = await fetch(`${API_URL}/Pagamento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar Pagamento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPagamento() {
  try {
    const response = await fetch(`${API_URL}/Pagamento`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Pagamentos: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPagamentoById(id: number) {
  try {
    const response = await fetch(`${API_URL}/Pagamento/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar Pagamento por ID: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updatePagamento(id: number, data: Pagamento) {
  try {
    const response = await fetch(`${API_URL}/Pagamento/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar Pagamento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deletePagamento(id: number) {
  try {
    const response = await fetch(`${API_URL}/Pagamento/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar Pagamento: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
