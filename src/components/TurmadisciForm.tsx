import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createTurmadisci } from "../services/TurmadisciService";

interface Props {
  onTurmadisciAdded: () => void;
}

interface TurmadisciFormData {
  id_turma: number;
  id_disciplina: number;
}

export function TurmadisciForm({ onTurmadisciAdded }: Props) {
  const [form, setForm] = useState<TurmadisciFormData>({
    id_turma: 0,
    id_disciplina: 0,
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

    await createTurmadisci(form);
    onTurmadisciAdded();

    setForm({
      id_turma: 0,
      id_disciplina: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro Turma–Disciplina
      </Typography>

      <TextField
        label="ID da Turma"
        name="id_turma"
        type="number"
        value={form.id_turma}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="ID da Disciplina"
        name="id_disciplina"
        type="number"
        value={form.id_disciplina}
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
