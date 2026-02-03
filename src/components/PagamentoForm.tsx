import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createPagamento } from "../services/PagamentoServices";

interface Props {
  onPagamentoAdded: () => void;
}

interface PagamentoFormData {
  data_pagamento: string; // input date usa string
  metodo_pagamento: string;
  id_aluno: number;
  id_emolumento: number;
  valor: number;
  id_fatura: number;
}

export function PagamentoForm({ onPagamentoAdded }: Props) {
  const [form, setForm] = useState<PagamentoFormData>({
    data_pagamento: "",
    metodo_pagamento: "",
    id_aluno: 0,
    id_emolumento: 0,
    valor: 0,
    id_fatura: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "id_aluno" ||
        name === "id_emolumento" ||
        name === "valor" ||
        name === "id_fatura"
          ? Number(value)
          : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createPagamento({
      ...form,
      data_pagamento: new Date(form.data_pagamento).toISOString(),
    });

    onPagamentoAdded();

    setForm({
      data_pagamento: "",
      metodo_pagamento: "",
      id_aluno: 0,
      id_emolumento: 0,
      valor: 0,
      id_fatura: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Pagamento
      </Typography>

      <TextField
        label="Data do Pagamento"
        name="data_pagamento"
        type="date"
        value={form.data_pagamento}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Método de Pagamento"
        name="metodo_pagamento"
        value={form.metodo_pagamento}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID do Aluno"
        name="id_aluno"
        type="number"
        value={form.id_aluno}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID do Emolumento"
        name="id_emolumento"
        type="number"
        value={form.id_emolumento}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Valor"
        name="valor"
        type="number"
        value={form.valor}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID da Fatura"
        name="id_fatura"
        type="number"
        value={form.id_fatura}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Registrar Pagamento
      </Button>
    </Box>
  );
}
