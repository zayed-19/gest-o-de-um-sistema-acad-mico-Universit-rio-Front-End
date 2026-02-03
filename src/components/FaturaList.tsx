import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getFatura } from "../services/FaturaService";
import type { Fatura } from "../types/Fatura";

interface Props {
  refresh: number;
}

export function FaturaList({ refresh }: Props) {
  const [faturas, setFaturas] = useState<Fatura[]>([]);

  useEffect(() => {
    getFatura().then(setFaturas);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Faturas
      </Typography>

      <List>
        {faturas.map((fat) => (
          <ListItem key={fat.id}>
            <ListItemText
              primary={`Fatura ID: ${fat.id}`}
              secondary={`Data: ${new Date(fat.data_emissao).toLocaleDateString()} | Valor Total: ${fat.valor_total}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
