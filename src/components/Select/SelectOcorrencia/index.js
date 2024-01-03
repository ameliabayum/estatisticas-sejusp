import { Box, Button, Grid, Typography } from "@mui/material";
import { BuscarCidades } from "../../../functions";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import RefreshIcon from "@mui/icons-material/Refresh";

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectOcorrencia({ ocorrencias, setValuesSelect, valuesSelect }) {
  const theme = useTheme();
  //Cidades

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValuesSelect((prevValuesSelect) => ({
      ...prevValuesSelect,
      ocorrencia: [value],
    }));
  };

  return (
    <Box sx={{ border: "1px solid #c4c4c4", borderRadius: "8px ", m: 1 }}>
      <Grid
        container
        sx={{
          borderBottom: "1px solid #d4d4d4",
          background: "#f7f7f7",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <Grid item md={6} xs={6} sx={{px:2, py:1}}>
          <Typography
            display={"inline"}
            sx={{ fontSize: "18px", color: "#3d3d3d", fontWeight: "550" }}
          >
            Ocorrência
          </Typography>
        </Grid>
      </Grid>

      <Box p={1}>
        <FormControl fullWidth size="small">
          <Select
            value={valuesSelect.ocorrencia}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
          >
            {ocorrencias.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
