import { Box } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ dataOcorrencias, dataRegistros }) => {
  const dados = {
    series: dataRegistros,
    options: {
      chart: {
        width: 380,
        type: "pie",
        style: {
          textAlign: "center",
        },
      },
      labels: dataOcorrencias,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  if (dataOcorrencias.length > 0) {
    return (
      <Box sx={{ maxWidth: "400px", m: "auto", mt:5 }}>
        <ReactApexChart
          options={dados.options}
          series={dados.series}
          type="pie"
          width={"100%"}
        />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          height: "430px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 2,
        }}
      >
        Selecione os campos
      </Box>
    );
  }
};

export default PieChart;
