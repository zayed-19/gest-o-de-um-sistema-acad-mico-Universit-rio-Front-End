import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getDiscicurso } from "../services/DiscicursoService";
import type { Discicurso } from "../types/Discicurso";

interface Props {
  refresh: number;
}

export function DiscicursoList({ refresh }: Props) {
  const [lista, setLista] = useState<Discicurso[]>([]);

  useEffect(() => {
    getDiscicurso().then(setLista);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista Disciplina–Curso
      </Typography>

      <List>
        {lista.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`ID: ${item.id}`}
              secondary={`Disciplina: ${item.id_disciplina} | Curso: ${item.id_curso}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
