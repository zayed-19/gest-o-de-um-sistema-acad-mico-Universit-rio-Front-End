import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createHistorico_matricula } from "../services/historico_matriculaServices";

interface Props {
  onHistoricoAdded: () => void;
}

interface HistoricoFormData {
  id_aluno: number;
  id_matricula: number;
}

export function HistoricoMatriculaForm({ onHistoricoAdded }: Props) {
  const [form, setForm] = useState<HistoricoFormData>({
    id_aluno: 0,
    id_matricula: 0,
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

    await createHistorico_matricula(form);
    onHistoricoAdded();

    setForm({
      id_aluno: 0,
      id_matricula: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Histórico de Matrícula
      </Typography>

      <TextField
        label="ID do Aluno"
        name="id_aluno"
        type="number"
        value={form.id_aluno}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="ID da Matrícula"
        name="id_matricula"
        type="number"
        value={form.id_matricula}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Histórico
      </Button>
    </Box>
  );
}
