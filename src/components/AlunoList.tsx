import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getAlunos } from "../services/AlunoServices";
import type { Aluno } from "../types/Aluno";

interface Props {
  refresh: number;
}

export function AlunoList({ refresh }: Props) {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    getAlunos().then(setAlunos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Alunos
      </Typography>

      <List>
        {alunos.map((aluno) => (
          <ListItem key={aluno.id}>
            <ListItemText
              primary={`Aluno: ${aluno.nome}`}
              secondary={`ID: ${aluno.id} | Idade: ${aluno.idade} | Turma: ${aluno.id_turma}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
