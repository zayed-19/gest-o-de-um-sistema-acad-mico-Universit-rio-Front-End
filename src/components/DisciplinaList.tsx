import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getDisciplina } from "../services/DisciplinaServices";
import type { Disciplina } from "../types/Disciplina";

interface Props {
  refresh: number;
}

export function DisciplinaList({ refresh }: Props) {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    getDisciplina().then(setDisciplinas);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Disciplinas
      </Typography>

      <List>
        {disciplinas.map((disciplina) => (
          <ListItem key={disciplina.id}>
            <ListItemText
              primary={`Disciplina: ${disciplina.tipo_disciplina}`}
              secondary={`ID: ${disciplina.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
