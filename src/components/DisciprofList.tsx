import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getDisciprof } from "../services/DisciprofService";
import type { Disciprof } from "../types/Disciprof";

interface Props {
  refresh: number;
}

export function DisciprofList({ refresh }: Props) {
  const [lista, setLista] = useState<Disciprof[]>([]);

  useEffect(() => {
    getDisciprof().then(setLista);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista Disciplina–Professor
      </Typography>

      <List>
        {lista.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`ID: ${item.id}`}
              secondary={`Disciplina: ${item.id_disciplina} | Professor: ${item.id_professor}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
