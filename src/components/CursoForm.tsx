import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createCurso } from "../services/CursoService";

interface Props {
  onCursoAdded: () => void;
}

interface CursoFormData {
  nome: string;
  duracao: number;
  id_faculdades: number;
  id_coordenador: number;
}

export function CursoForm({ onCursoAdded }: Props) {
  const [form, setForm] = useState<CursoFormData>({
    nome: "",
    duracao: 0,
    id_faculdades: 0,
    id_coordenador: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "duracao" ||
        name === "id_faculdades" ||
        name === "id_coordenador"
          ? Number(value)
          : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createCurso(form);
    onCursoAdded();

    setForm({
      nome: "",
      duracao: 0,
      id_faculdades: 0,
      id_coordenador: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Curso
      </Typography>

      <TextField
        label="Nome do Curso"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Duração (meses)"
        name="duracao"
        type="number"
        value={form.duracao}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID da Faculdade"
        name="id_faculdades"
        type="number"
        value={form.id_faculdades}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID do Coordenador"
        name="id_coordenador"
        type="number"
        value={form.id_coordenador}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Curso
      </Button>
    </Box>
  );
}
