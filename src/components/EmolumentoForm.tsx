import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createEmolumento } from "../services/EmolumentoServices";

interface Props {
  onEmolumentoAdded: () => void;
}

interface EmolumentoFormData {
  referencia: number;
  valor: number;
}

export function EmolumentoForm({ onEmolumentoAdded }: Props) {
  const [form, setForm] = useState<EmolumentoFormData>({
    referencia: 0,
    valor: 0,
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

    await createEmolumento(form);
    onEmolumentoAdded();

    setForm({
      referencia: 0,
      valor: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Emolumento
      </Typography>

      <TextField
        label="Referência"
        name="referencia"
        type="number"
        value={form.referencia}
        onChange={handleChange}
        fullWidth
        required
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

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Emolumento
      </Button>
    </Box>
  );
}
