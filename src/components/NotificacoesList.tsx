import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getNotificacoes } from "../services/NotificacoesServices";
import type { Notificacoes } from "../types/Notificacoes";

interface Props {
  refresh: number;
}

export function NotificacoesList({ refresh }: Props) {
  const [notificacoes, setNotificacoes] = useState<Notificacoes[]>([]);

  useEffect(() => {
    getNotificacoes().then(setNotificacoes);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Notificações
      </Typography>

      <List>
        {notificacoes.map((not) => (
          <ListItem key={not.id}>
            <ListItemText
              primary={`Tipo: ${not.tipo_notificacao}`}
              secondary={
                `ID: ${not.id} | ` +
                `Data: ${new Date(not.data_envio).toLocaleDateString()} | ` +
                `Informação: ${not.informacao}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
