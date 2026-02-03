import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getPagamento } from "../services/PagamentoServices";
import type { Pagamento } from "../types/Pagamento";

interface Props {
  refresh: number;
}

export function PagamentoList({ refresh }: Props) {
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);

  useEffect(() => {
    getPagamento().then(setPagamentos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Pagamentos
      </Typography>

      <List>
        {pagamentos.map((pg) => (
          <ListItem key={pg.id}>
            <ListItemText
              primary={`Pagamento ID: ${pg.id}`}
              secondary={
                `Data: ${new Date(pg.data_pagamento).toLocaleDateString()} | ` +
                `Método: ${pg.metodo_pagamento} | ` +
                `Aluno: ${pg.id_aluno} | ` +
                `Emolumento: ${pg.id_emolumento} | ` +
                `Valor: ${pg.valor} | ` +
                `Fatura: ${pg.id_fatura}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
