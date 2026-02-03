import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createItensfatura } from "../services/ItensfaturaService";

interface Props {
  onItensfaturaAdded: () => void;
}

interface ItensfaturaFormData {
  valortotal: number;
  nr_fatura: number;
  id_fatura: number;
  id_emolumento: number;
}

export function ItensfaturaForm({ onItensfaturaAdded }: Props) {
  const [form, setForm] = useState<ItensfaturaFormData>({
    valortotal: 0,
    nr_fatura: 0,
    id_fatura: 0,
    id_emolumento: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: Number(value),
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createItensfatura(form);
    onItensfaturaAdded();

    setForm({
      valortotal: 0,
      nr_fatura: 0,
      id_fatura: 0,
      id_emolumento: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Itens da Fatura
      </Typography>

      <TextField
        label="Valor Total"
        name="valortotal"
        type="number"
        value={form.valortotal}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Número da Fatura"
        name="nr_fatura"
        type="number"
        value={form.nr_fatura}
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

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Item
      </Button>
    </Box>
  );
}
