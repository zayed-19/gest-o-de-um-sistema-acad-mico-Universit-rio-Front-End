import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createProfessor } from "../services/ProfessorServices";

interface Props {
  onProfessorAdded: () => void;
}

interface ProfessorFormData {
  nome: string;
  bi_passaporte: string;
  telefone: string;
  email: string;
}

export function ProfessorForm({ onProfessorAdded }: Props) {
  const [form, setForm] = useState<ProfessorFormData>({
    nome: "",
    bi_passaporte: "",
    telefone: "",
    email: "",
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

    await createProfessor(form);
    onProfessorAdded();

    setForm({
      nome: "",
      bi_passaporte: "",
      telefone: "",
      email: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Professor
      </Typography>

      <TextField
        label="Nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="BI / Passaporte"
        name="bi_passaporte"
        value={form.bi_passaporte}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Telefone"
        name="telefone"
        value={form.telefone}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Professor
      </Button>
    </Box>
  );
}
