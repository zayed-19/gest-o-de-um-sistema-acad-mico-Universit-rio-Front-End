import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createAvaliacao } from "../services/AvaliacaoService";

interface Props {
  onAvaliacaoAdded: () => void;
}

interface AvaliacaoFormData {
  tipo_de_avaliacao: string;
  nota: number;
  id_aluno: number;
  id_professor: number;
  data_avaliacao: string; // input date usa string
}

export function AvaliacaoForm({ onAvaliacaoAdded }: Props) {
  const [form, setForm] = useState<AvaliacaoFormData>({
    tipo_de_avaliacao: "",
    nota: 0,
    id_aluno: 0,
    id_professor: 0,
    data_avaliacao: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "nota" || name === "id_aluno" || name === "id_professor"
          ? Number(value)
          : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createAvaliacao({
      ...form,
      data_avaliacao: new Date(form.data_avaliacao),
    });

    onAvaliacaoAdded();

    setForm({
      tipo_de_avaliacao: "",
      nota: 0,
      id_aluno: 0,
      id_professor: 0,
      data_avaliacao: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Avaliação
      </Typography>

      <TextField
        label="Tipo de Avaliação"
        name="tipo_de_avaliacao"
        value={form.tipo_de_avaliacao}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Nota"
        name="nota"
        type="number"
        value={form.nota}
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
        label="ID do Professor"
        name="id_professor"
        type="number"
        value={form.id_professor}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Data da Avaliação"
        name="data_avaliacao"
        type="date"
        value={form.data_avaliacao}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Avaliação
      </Button>
    </Box>
  );
}
