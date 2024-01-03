import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ dataOcorrencias, dataRegistros, widChart }) => {
 
  const dados_ocorrencias = {
    series: [
      {
        name: "Total de Ocorrências",
        data: dataRegistros,
      },
    ],
    options: {
      chart: {
        type: "bar",
      },

      colors: ["#008FFB"],
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },

      stroke: {
        width: 1,
      },
      xaxis: {
        categories: dataOcorrencias,
      },
    },
  };
  if (dataOcorrencias.length > 0) {
    return (
      <Box p={1}>
        <ReactApexChart
          options={dados_ocorrencias.options}
          series={dados_ocorrencias.series}
          type="bar"
          height={widChart}
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
export default BarChart;
