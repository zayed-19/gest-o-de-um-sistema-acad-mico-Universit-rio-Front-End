import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createDiscicurso } from "../services/DiscicursoService";

interface Props {
  onDiscicursoAdded: () => void;
}

interface DiscicursoFormData {
  id_disciplina: number;
  id_curso: number;
}

export function DiscicursoForm({ onDiscicursoAdded }: Props) {
  const [form, setForm] = useState<DiscicursoFormData>({
    id_disciplina: 0,
    id_curso: 0,
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

    await createDiscicurso(form);
    onDiscicursoAdded();

    setForm({
      id_disciplina: 0,
      id_curso: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro Disciplina–Curso
      </Typography>

      <TextField
        label="ID da Disciplina"
        name="id_disciplina"
        type="number"
        value={form.id_disciplina}
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
        Cadastrar
      </Button>
    </Box>
  );
}
