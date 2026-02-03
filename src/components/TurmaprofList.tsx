import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getTurmaprof } from "../services/TurmaprofService";
import type { Turmaprof } from "../types/Turmaprof";

interface Props {
  refresh: number;
}

export function TurmaprofList({ refresh }: Props) {
  const [lista, setLista] = useState<Turmaprof[]>([]);

  useEffect(() => {
    getTurmaprof().then(setLista);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista Turma–Professor
      </Typography>

      <List>
        {lista.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`ID: ${item.id}`}
              secondary={`Turma: ${item.id_turma} | Professor: ${item.id_professor}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
