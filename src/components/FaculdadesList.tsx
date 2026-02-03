import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getFaculdade } from "../services/FaculdadeServices";
import type { Faculdades } from "../types/Faculdades";

interface Props {
  refresh: number;
}

export function FaculdadeList({ refresh }: Props) {
  const [faculdades, setFaculdades] = useState<Faculdades[]>([]);

  useEffect(() => {
    getFaculdade().then(setFaculdades);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Faculdades
      </Typography>

      <List>
        {faculdades.map((fac) => (
          <ListItem key={fac.id}>
            <ListItemText
              primary={`Faculdade: ${fac.tipos_faculdades}`}
              secondary={`ID: ${fac.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
