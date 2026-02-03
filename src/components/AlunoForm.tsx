import { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import { createAluno } from "../services/AlunoServices";

interface Props {
  onAlunoAdded: () => void;
}

interface AlunoFormData {
  nome: string;
  DataNasc: string;
  morada: string;
  genero: string;
  telefone: number;
  idade: number;
  id_turma: number;
}

export function AlunoForm({ onAlunoAdded }: Props) {
  const [form, setForm] = useState<AlunoFormData>({
    nome: "",
    DataNasc: "",
    morada: "",
    genero: "",
    telefone: 0,
    idade: 0,
    id_turma: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "telefone" || name === "idade" || name === "id_turma"
          ? Number(value)
          : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createAluno({
      ...form,
      DataNasc: new Date(form.DataNasc),
    });

    onAlunoAdded();

    setForm({
      nome: "",
      DataNasc: "",
      morada: "",
      genero: "",
      telefone: 0,
      idade: 0,
      id_turma: 0,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Estudante
      </Typography>

      <TextField
        label="Nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Data de Nascimento"
        name="DataNasc"
        type="date"
        value={form.DataNasc}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Gênero"
        name="genero"
        value={form.genero}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        select
      >
        <MenuItem value="Masculino">Masculino</MenuItem>
        <MenuItem value="Feminino">Feminino</MenuItem>
        <MenuItem value="Outro">Outro</MenuItem>
      </TextField>

      <TextField
        label="Morada"
        name="morada"
        value={form.morada}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Telefone"
        name="telefone"
        type="number"
        value={form.telefone}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Idade"
        name="idade"
        type="number"
        value={form.idade}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="ID da Turma"
        name="id_turma"
        type="number"
        value={form.id_turma}
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
