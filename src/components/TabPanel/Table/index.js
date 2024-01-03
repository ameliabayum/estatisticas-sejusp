import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F7f7f7",
    color: "#3D3D3D",
    height:"8px",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export default function TabelaDadosOcorrencia({ dados }) {
  function createData(ocorrencia, registradas) {
    return { ocorrencia, registradas };
  }
  if (dados != undefined) {
    const rows = dados;
    let tbody = [];
    if (rows) {
      tbody = rows.filter((_, index) => index !== 0);
    }
    return (
      <Box
        sx={{
          border: "1px solid #c4c4c4",
          borderRadius: "10px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ borderRadius: "10px", height: "518px" }}
        >
          <Table
            sx={{ minWidth: "100%", height: "462px" }}
            ria-label="simple table"
          >
            <TableHead >
                <StyledTableCell>{rows ? rows[0][0] : ""}</StyledTableCell>
                <StyledTableCell align="right">
                  {rows ? rows[0][1] : ""}
                </StyledTableCell>
            </TableHead>
            <TableBody>
              {tbody
                ? tbody.map((row) => (
                  
                    <TableRow
                      key={row.ocorrencia}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row[0]}
                      </TableCell>
                      <TableCell align="right">{row[1]}</TableCell>
                    </TableRow>
                  ))
                : ""}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          borderBottom: "1px solid #c4c4c4",
          borderRight: "1px solid #c4c4c4",
          borderLeft: "1px solid #c4c4c4",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #c4c4c4",
            borderRadius: "10px 10px 0px 0px",
            background: "#F7F7F7",
          }}
        >
          <Typography
            m={1}
            sx={{ fontSize: "18px", color: "#3d3d3d", fontWeight: "550" }}
          >
            Tipo de Ocorrências
          </Typography>
        </Box>
        <Box
          sx={{
            mt: -1,
            height: "480px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Selecione os campos
        </Box>
      </Box>
    );
  }
}
