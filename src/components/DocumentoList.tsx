import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { getDocumento } from "../services/DocumentoServices";
import type { Documento } from "../types/Documento";

interface Props {
  refresh: number;
}

export function DocumentoList({ refresh }: Props) {
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  useEffect(() => {
    getDocumento().then(setDocumentos);
  }, [refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Documentos
      </Typography>

      <List>
        {documentos.map((doc) => (
          <ListItem key={doc.id}>
            <ListItemText
              primary={`Documento: ${doc.tipo_documento}`}
              secondary={`ID: ${doc.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
