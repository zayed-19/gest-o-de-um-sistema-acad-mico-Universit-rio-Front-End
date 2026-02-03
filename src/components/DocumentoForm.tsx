import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createDocumento } from "../services/DocumentoServices";

interface Props {
  onDocumentoAdded: () => void;
}

interface DocumentoFormData {
  tipo_documento: string;
}

export function DocumentoForm({ onDocumentoAdded }: Props) {
  const [form, setForm] = useState<DocumentoFormData>({
    tipo_documento: "",
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

    await createDocumento(form);
    onDocumentoAdded();

    setForm({
      tipo_documento: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Documento
      </Typography>

      <TextField
        label="Tipo de Documento"
        name="tipo_documento"
        value={form.tipo_documento}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Documento
      </Button>
    </Box>
  );
}
