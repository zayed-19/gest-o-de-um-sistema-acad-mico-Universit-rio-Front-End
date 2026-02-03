import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createPresenca } from "../services/PresencaServices";

interface Props {
  onPresencaAdded: () => void;
}

interface PresencaFormData {
  data_presenca: string; // input date usa string
  status: string;
  id_aluno: number;
  id_disciplina: number;
}

export function PresencaForm({ onPresencaAdded }: Props) {
  const [form, setForm] = useState<PresencaFormData>({
    data_presenca: "",
    status: "",
    id_aluno: 0,
    id_disciplina: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "id_aluno" || name === "id_disciplina" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createPresenca({
      ...form,
      data_presenca: new Date(form.data_presenca),
    });

    onPresencaAdded();

    setForm({
      data_presenca: "",
      status: "",
      id_aluno: 0,
      id_disciplina: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Registrar Presença
      </Typography>

      <TextField
        label="Data da Presença"
        name="data_presenca"
        type="date"
        value={form.data_presenca}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Status (Presente / Ausente)"
        name="status"
        value={form.status}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID do Aluno"
        name="id_aluno"
        type="number"
        value={form.id_aluno}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
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
        Registrar
      </Button>
    </Box>
  );
}
