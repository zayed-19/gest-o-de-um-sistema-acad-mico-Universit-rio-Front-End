import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getEmolumento } from "../services/EmolumentoServices";
import type { Emolumento } from "../types/Emolumento";

interface Props {
  refresh: number;
}

export function EmolumentoList({ refresh }: Props) {
  const [emolumentos, setEmolumentos] = useState<Emolumento[]>([]);

  useEffect(() => {
    getEmolumento().then(setEmolumentos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Emolumentos
      </Typography>

      <List>
        {emolumentos.map((emo) => (
          <ListItem key={emo.id}>
            <ListItemText
              primary={`Referência: ${emo.referencia}`}
              secondary={`ID: ${emo.id} | Valor: ${emo.valor}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
