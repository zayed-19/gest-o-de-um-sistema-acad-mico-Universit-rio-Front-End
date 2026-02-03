import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createMatricula } from "../services/MatriculaServices";

interface Props {
  onMatriculaAdded: () => void;
}

interface MatriculaFormData {
  ano_lectivo: string;
  data_matricula: string; // input date usa string
  estado_matricula: string;
  id_aluno: number;
}

export function MatriculaForm({ onMatriculaAdded }: Props) {
  const [form, setForm] = useState<MatriculaFormData>({
    ano_lectivo: "",
    data_matricula: "",
    estado_matricula: "",
    id_aluno: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "id_aluno" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createMatricula({
      ...form,
      data_matricula: new Date(form.data_matricula),
    });

    onMatriculaAdded();

    setForm({
      ano_lectivo: "",
      data_matricula: "",
      estado_matricula: "",
      id_aluno: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Matrícula
      </Typography>

      <TextField
        label="Ano Lectivo"
        name="ano_lectivo"
        value={form.ano_lectivo}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Data da Matrícula"
        name="data_matricula"
        type="date"
        value={form.data_matricula}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        label="Estado da Matrícula"
        name="estado_matricula"
        value={form.estado_matricula}
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

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Matrícula
      </Button>
    </Box>
  );
}
