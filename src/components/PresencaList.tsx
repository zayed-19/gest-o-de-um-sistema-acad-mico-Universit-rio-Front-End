import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getPresenca } from "../services/PresencaServices";
import type { Presenca } from "../types/Presenca";

interface Props {
  refresh: number;
}

export function PresencaList({ refresh }: Props) {
  const [presencas, setPresencas] = useState<Presenca[]>([]);

  useEffect(() => {
    getPresenca().then(setPresencas);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Presenças
      </Typography>

      <List>
        {presencas.map((p) => (
          <ListItem key={p.id}>
            <ListItemText
              primary={`Presença ID: ${p.id}`}
              secondary={
                `Data: ${new Date(p.data_presenca).toLocaleDateString()} | ` +
                `Status: ${p.status} | ` +
                `Aluno: ${p.id_aluno} | ` +
                `Disciplina: ${p.id_disciplina}`
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
