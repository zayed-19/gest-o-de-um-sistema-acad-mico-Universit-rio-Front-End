import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getAvaliacoes } from "../services/AvaliacaoService";
import type { Avaliacao } from "../types/Avaliacao";

interface Props {
  refresh: number;
}

export function AvaliacaoList({ refresh }: Props) {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  useEffect(() => {
    getAvaliacoes().then(setAvaliacoes);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Avaliações
      </Typography>

      <List>
        {avaliacoes.map((avaliacao) => (
          <ListItem key={avaliacao.id}>
            <ListItemText
              primary={`Avaliação ID: ${avaliacao.id}`}
              secondary={
                `Tipo: ${avaliacao.tipo_de_avaliacao} | ` +
                `Nota: ${avaliacao.nota} | ` +
                `Aluno: ${avaliacao.id_aluno} | ` +
                `Professor: ${avaliacao.id_professor}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
