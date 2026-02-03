import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createFaculdade } from "../services/FaculdadeServices";

interface Props {
  onFaculdadeAdded: () => void;
}

interface FaculdadeFormData {
  tipos_faculdades: string;
}

export function FaculdadeForm({ onFaculdadeAdded }: Props) {
  const [form, setForm] = useState<FaculdadeFormData>({
    tipos_faculdades: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createFaculdade(form);
    onFaculdadeAdded();

    setForm({
      tipos_faculdades: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Faculdade
      </Typography>

      <TextField
        label="Tipo de Faculdade"
        name="tipos_faculdades"
        value={form.tipos_faculdades}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Faculdade
      </Button>
    </Box>
  );
}
