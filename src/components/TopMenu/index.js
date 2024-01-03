import { useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

import { green } from "@mui/material/colors";
import CVLI from "../TabPanel/CVLI";
import "./index.css";
import Ocorrencias from "../TabPanel/Ocorrencias";

export default function TopMenu() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const grre = green[700];
  const data_Atual = new Date();
  return (
    <>
      <Container>
        {/* Titulo TOPO */}
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", color: "#6c6c6c" }}
          >
            Dados e Estatísticas
          </Typography>
          <Typography variant="p" sx={{ fontSize: "12px", fontWeight: 600 }}>
            Atualizado em: {data_Atual.toLocaleDateString()}
          </Typography>
          <div className="navbar-top"></div>
        </Box>
        {/* Menu TOPO */}
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab
            label="CVLI"
            icon={<InfoIcon />}
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            label="Ocorrências"
            icon={<WarningIcon />}
            iconPosition="start"
            {...a11yProps(1)}
          />
        </Tabs>
      </Container>
      <CustomTabPanel value={value} index={0}>
        <CVLI />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Ocorrencias />
      </CustomTabPanel>
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
