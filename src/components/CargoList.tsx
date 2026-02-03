import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createCargo } from "../services/CargoService";

interface Props {
  onCargoAdded: () => void;
}

interface CargoFormData {
  nome: string;
  descricao: string;
}

export function CargoForm({ onCargoAdded }: Props) {
  const [form, setForm] = useState<CargoFormData>({
    nome: "",
    descricao: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createCargo(form);
    onCargoAdded();

    setForm({
      nome: "",
      descricao: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Cargo
      </Typography>

      <TextField
        label="Nome do Cargo"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Descrição"
        name="descricao"
        value={form.descricao}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Cargo
      </Button>
    </Box>
  );
}
