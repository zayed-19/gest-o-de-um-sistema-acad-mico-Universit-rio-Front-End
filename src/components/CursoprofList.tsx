import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getCursoprof } from "../services/CursoprofService";
import type { Cursoprof } from "../types/Cursoprof";

interface Props {
  refresh: number;
}

export function CursoprofList({ refresh }: Props) {
  const [lista, setLista] = useState<Cursoprof[]>([]);

  useEffect(() => {
    getCursoprof().then(setLista);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Cursos por Professor
      </Typography>

      <List>
        {lista.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`ID: ${item.id}`}
              secondary={`Curso: ${item.id_curso} | Professor: ${item.id_professor}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
