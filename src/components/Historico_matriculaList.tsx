import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getHistorico_matricula } from "../services/historico_matriculaServices";
import type { Historico_matricula } from "../types/Historico_matricula";

interface Props {
  refresh: number;
}

export function HistoricoMatriculaList({ refresh }: Props) {
  const [historicos, setHistoricos] = useState<Historico_matricula[]>([]);

  useEffect(() => {
    getHistorico_matricula().then(setHistoricos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Históricos de Matrícula
      </Typography>

      <List>
        {historicos.map((hist) => (
          <ListItem key={hist.id}>
            <ListItemText
              primary={`Histórico ID: ${hist.id}`}
              secondary={`Aluno: ${hist.id_aluno} | Matrícula: ${hist.id_matricula}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
