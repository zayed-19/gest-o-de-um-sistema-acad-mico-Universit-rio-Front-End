import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getProfessor } from "../services/ProfessorServices";
import type { Professor } from "../types/Professor";

interface Props {
  refresh: number;
}

export function ProfessorList({ refresh }: Props) {
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    getProfessor().then(setProfessores);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Professores
      </Typography>

      <List>
        {professores.map((prof) => (
          <ListItem key={prof.id}>
            <ListItemText
              primary={`Professor: ${prof.nome}`}
              secondary={
                `ID: ${prof.id} | BI/Passaporte: ${prof.bi_passaporte} | ` +
                `Telefone: ${prof.telefone} | Email: ${prof.email}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
