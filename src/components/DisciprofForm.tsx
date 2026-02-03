import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createDisciprof } from "../services/DisciprofService";

interface Props {
  onDisciprofAdded: () => void;
}

interface DisciprofFormData {
  id_disciplina: number;
  id_professor: number;
}

export function DisciprofForm({ onDisciprofAdded }: Props) {
  const [form, setForm] = useState<DisciprofFormData>({
    id_disciplina: 0,
    id_professor: 0,
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

    await createDisciprof(form);
    onDisciprofAdded();

    setForm({
      id_disciplina: 0,
      id_professor: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro Disciplina–Professor
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
        label="ID do Professor"
        name="id_professor"
        type="number"
        value={form.id_professor}
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
