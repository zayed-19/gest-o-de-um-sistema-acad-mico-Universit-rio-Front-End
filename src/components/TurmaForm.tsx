import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createTurma } from "../services/TurmaServices";

interface Props {
  onTurmaAdded: () => void;
}

interface TurmaFormData {
  nome: string;
  id_curso: number;
}

export function TurmaForm({ onTurmaAdded }: Props) {
  const [form, setForm] = useState<TurmaFormData>({
    nome: "",
    id_curso: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "id_curso" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createTurma(form);
    onTurmaAdded();

    setForm({
      nome: "",
      id_curso: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Turma
      </Typography>

      <TextField
        label="Nome da Turma"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="ID do Curso"
        name="id_curso"
        type="number"
        value={form.id_curso}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Turma
      </Button>
    </Box>
  );
}
