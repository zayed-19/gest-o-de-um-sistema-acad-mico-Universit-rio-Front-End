import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createNotificacoes } from "../services/NotificacoesServices";

interface Props {
  onNotificacaoAdded: () => void;
}

interface NotificacaoFormData {
  tipo_notificacao: string;
  data_envio: string; // input date usa string
  informacao: string;
}

export function NotificacoesForm({ onNotificacaoAdded }: Props) {
  const [form, setForm] = useState<NotificacaoFormData>({
    tipo_notificacao: "",
    data_envio: "",
    informacao: "",
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

    await createNotificacoes({
      ...form,
      data_envio: new Date(form.data_envio),
    });

    onNotificacaoAdded();

    setForm({
      tipo_notificacao: "",
      data_envio: "",
      informacao: "",
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Notificação
      </Typography>

      <TextField
        label="Tipo de Notificação"
        name="tipo_notificacao"
        value={form.tipo_notificacao}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Data de Envio"
        name="data_envio"
        type="date"
        value={form.data_envio}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        label="Informação"
        name="informacao"
        value={form.informacao}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar Notificação
      </Button>
    </Box>
  );
}
