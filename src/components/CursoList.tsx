import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getCurso } from "../services/CursoService";
import type { Curso } from "../types/Curso";

interface Props {
  refresh: number;
}

export function CursoList({ refresh }: Props) {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    getCurso().then(setCursos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Cursos
      </Typography>

      <List>
        {cursos.map((curso) => (
          <ListItem key={curso.id}>
            <ListItemText
              primary={`Curso: ${curso.nome}`}
              secondary={
                `Duração: ${curso.duracao} meses | ` +
                `Faculdade: ${curso.id_faculdades} | ` +
                `Coordenador: ${curso.id_coordenador}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
