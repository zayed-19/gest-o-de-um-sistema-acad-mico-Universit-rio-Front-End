import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createCursoprof } from "../services/CursoprofService";

interface Props {
  onCursoprofAdded: () => void;
}

interface CursoprofFormData {
  id_curso: number;
  id_professor: number;
}

export function CursoprofForm({ onCursoprofAdded }: Props) {
  const [form, setForm] = useState<CursoprofFormData>({
    id_curso: 0,
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

    await createCursoprof(form);
    onCursoprofAdded();

    setForm({
      id_curso: 0,
      id_professor: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Curso do Professor
      </Typography>

      <TextField
        label="ID do Curso"
        name="id_curso"
        type="number"
        value={form.id_curso}
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
