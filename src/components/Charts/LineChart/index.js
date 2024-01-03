import { Box } from "@mui/material";
import Chart from "react-google-charts";

 const LineChart = ({data, options}) => {
  console.log("33",data)
  if (data.length > 0) {
    return (
      <Box sx={{ borderRadius: "8px ", p: 2 }}>
        <Chart
          chartType="Line"
          data={data}
          width={"100%"}
          options={options}
          height={"430px"}
        />
      </Box>
    );
    
  }else{
    return (
      <Box
        sx={{
          height: "430px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Selecione os campos
      </Box>
    );
  }
  
};

export default LineChart;