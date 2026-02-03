import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createTurmaprof } from "../services/TurmaprofService";

interface Props {
  onTurmaprofAdded: () => void;
}

interface TurmaprofFormData {
  id_turma: number;
  id_professor: number;
}

export function TurmaprofForm({ onTurmaprofAdded }: Props) {
  const [form, setForm] = useState<TurmaprofFormData>({
    id_turma: 0,
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

    await createTurmaprof(form);
    onTurmaprofAdded();

    setForm({
      id_turma: 0,
      id_professor: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro Turma–Professor
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
