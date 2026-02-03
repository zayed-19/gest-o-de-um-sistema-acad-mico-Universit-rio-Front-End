import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getTurmadisci } from "../services/TurmadisciService";
import type { Turmadisci } from "../types/Turmadisci";

interface Props {
  refresh: number;
}

export function TurmadisciList({ refresh }: Props) {
  const [lista, setLista] = useState<Turmadisci[]>([]);

  useEffect(() => {
    getTurmadisci().then(setLista);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista Turma–Disciplina
      </Typography>

      <List>
        {lista.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`ID: ${item.id}`}
              secondary={`Turma: ${item.id_turma} | Disciplina: ${item.id_disciplina}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
