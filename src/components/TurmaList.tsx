import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getTurma } from "../services/TurmaServices";
import type { Turma } from "../types/Turma";

interface Props {
  refresh: number;
}

export function TurmaList({ refresh }: Props) {
  const [turmas, setTurmas] = useState<Turma[]>([]);

  useEffect(() => {
    getTurma().then(setTurmas);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Turmas
      </Typography>

      <List>
        {turmas.map((turma) => (
          <ListItem key={turma.id}>
            <ListItemText
              primary={`Turma: ${turma.nome}`}
              secondary={`ID: ${turma.id} | Curso: ${turma.id_curso}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
