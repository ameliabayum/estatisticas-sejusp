import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import RefreshIcon from "@mui/icons-material/Refresh";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 50,
    },
  },
};

const anos = ["2019", "2020", "2021", "2022", "2023"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function SelectAno({ valuesSelect, setValuesSelect }) {
  const ano = [];
  if (valuesSelect.ano.length > 0) {
    ano.push(valuesSelect.ano[0], valuesSelect.ano[1]);
  } else {
    ano.push("2022", "2023");
  }
  const theme = useTheme();

  const handleChange = (event) => {
    if (event.target.name == "anoInicial") {
      ano[0] = event.target.value;
    }
    if (event.target.name == "anoFinal") {
      ano[1] = event.target.value;
    }

    if (ano.length > 1) {
      setValuesSelect((prevValuesSelect) => ({
        ...prevValuesSelect,
        ano: ano,
      }));
    }
  };

  const LimparAno = () => {
    setValuesSelect((prevValuesSelect) => ({
      ...prevValuesSelect,
      ano: [],
    }));
  };
  return (
    <Box
      sx={{
        border: "1px solid #c4c4c4",
        borderRadius: "8px ",
        m: 1,
      }}
    >
      <Grid
        container
        sx={{
          borderBottom: "1px solid #d4d4d4",
          background: "#f7f7f7",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <Grid item md={6} xs={6} sx={{ px: 2, py: 1 }}>
          <Typography
            display={"inline"}
            sx={{ fontSize: "18px", color: "#3d3d3d", fontWeight: "550" }}
          >
            Ano
          </Typography>
        </Grid>
        {/* <Grid item md={6} xs={6}  sx={{ textAlign: "right", mt:0.5 }}>
          <Button variant="text" color="success" onClick={LimparAno}>
            <RefreshIcon />
          </Button>
        </Grid> */}
      </Grid>
      <Box p={1}>
        <Typography>Inicio</Typography>
        <FormControl fullWidth size="small">
          <Select
            name="anoInicial"
            value={ano[0]}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => <Chip key={selected} label={selected} />}
            MenuProps={MenuProps}
          >
            {anos.map((item) => (
              <MenuItem
                key={item}
                value={item}
                // style={getStyles(item, anoInicial, theme)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box p={1}>
        <Typography>Final</Typography>
        <FormControl fullWidth size="small">
          <Select
            name="anoFinal"
            value={ano[1]}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => <Chip key={selected} label={selected} />}
            MenuProps={MenuProps}
          >
            {anos.map((item) => (
              <MenuItem
                key={item}
                value={item}
                // style={getStyles(item, valuesSelect.anoFinal, theme)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
