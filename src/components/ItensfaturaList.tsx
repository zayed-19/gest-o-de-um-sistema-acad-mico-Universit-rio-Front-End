import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getItensfatura } from "../services/ItensfaturaService";
import type { Itensfatura } from "../types/Itensfatura";

interface Props {
  refresh: number;
}

export function ItensfaturaList({ refresh }: Props) {
  const [itens, setItens] = useState<Itensfatura[]>([]);

  useEffect(() => {
    getItensfatura().then(setItens);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Itens da Fatura
      </Typography>

      <List>
        {itens.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`Item ID: ${item.id}`}
              secondary={
                `Valor Total: ${item.valortotal} | Nº Fatura: ${item.nr_fatura} | ` +
                `ID Fatura: ${item.id_fatura} | ID Emolumento: ${item.id_emolumento}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
