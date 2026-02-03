import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createDisciplina } from "../services/DisciplinaServices";

interface Props {
  onDisciplinaAdded: () => void;
}

interface DisciplinaFormData {
  tipo_disciplina: string;
}

export function DisciplinaForm({ onDisciplinaAdded }: Props) {
  const [form, setForm] = useState<DisciplinaFormData>({
    tipo_disciplina: "",
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

    await createDisciplina(form);
    onDisciplinaAdded();

    setForm({
      tipo_disciplina: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Disciplina
      </Typography>

      <TextField
        label="Tipo de Disciplina"
        name="tipo_disciplina"
        value={form.tipo_disciplina}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Disciplina
      </Button>
    </Box>
  );
}
