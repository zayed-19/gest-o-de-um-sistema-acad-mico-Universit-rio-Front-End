import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createFatura } from "../services/FaturaService";

interface Props {
  onFaturaAdded: () => void;
}

interface FaturaFormData {
  data_emissao: string; // input date usa string
  valor_total: number;
}

export function FaturaForm({ onFaturaAdded }: Props) {
  const [form, setForm] = useState<FaturaFormData>({
    data_emissao: "",
    valor_total: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "valor_total" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createFatura({
      ...form,
      data_emissao: new Date(form.data_emissao),
    });

    onFaturaAdded();

    setForm({
      data_emissao: "",
      valor_total: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Fatura
      </Typography>

      <TextField
        label="Data de Emissão"
        name="data_emissao"
        type="date"
        value={form.data_emissao}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Valor Total"
        name="valor_total"
        type="number"
        value={form.valor_total}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Fatura
      </Button>
    </Box>
  );
}
