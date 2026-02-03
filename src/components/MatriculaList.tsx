import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getMatricula } from "../services/MatriculaServices";
import type { Matricula } from "../types/Matricula";

interface Props {
  refresh: number;
}

export function MatriculaList({ refresh }: Props) {
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);

  useEffect(() => {
    getMatricula().then(setMatriculas);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Matrículas
      </Typography>

      <List>
        {matriculas.map((mat) => (
          <ListItem key={mat.id}>
            <ListItemText
              primary={`Matrícula ID: ${mat.id}`}
              secondary={
                `Ano Lectivo: ${mat.ano_lectivo} | ` +
                `Data: ${new Date(mat.data_matricula).toLocaleDateString()} | ` +
                `Estado: ${mat.estado_matricula} | ` +
                `Aluno: ${mat.id_aluno}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
