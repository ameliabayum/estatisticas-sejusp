import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Alert,
  AlertTitle,
  Button,
  Typography,
} from "@mui/material";
import SelectAno from "../Select/SelectAno";
import SelectOcorrencia from "../Select/SelectOcorrencia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
import { instance } from "../../constants";


export default function CVLI() {
  // PRIMEIRA BUSCA
  const [valuesSelect, setValuesSelect] = useState({
    ano: ["2022", "2023"],
    ocorrencia: "Todas",
  });
  const [dados, setDados] = useState([]);
  const [ocorrencias, setOcorrencias] = useState([]);

  //BUSCAR OCORREÊNCIAS
  useEffect(() => {
    instance
      .post("/dadosMVI", {
        findName: "CVLI",
      })
      .then(function (response) {
        if (
          response.data.status === "warning" ||
          response.data.status === "error"
        ) {
          toast(response.data.message, {
            type: response.data.status,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setOcorrencias([]);
        } else {
          setOcorrencias(response.data);
        }
      })
      .catch(function (error) {
        toast("Erro ao conectar com o Servidor", {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, [valuesSelect]);

  useEffect(() => {
    instance
      .post(`/dadosMVI`, {
        findName: "CVLI",
        valuesSelect,
      })
      .then(function (response) {
        if (
          response.data.status === "warning" ||
          response.data.status === "error"
        ) {
          toast(response.data.message, {
            type: response.data.status,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setDados([]);
        } else {
          setDados(response.data[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast("Erro ao conectar com o Servidor", {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, [valuesSelect]);
  
  return (
    <>
      {Object.keys(dados).length > 0 ? (
        <Grid container>
          <Grid item md={2} xs={12}>
            <Box>
              <SelectAno
                setValuesSelect={setValuesSelect}
                valuesSelect={valuesSelect}
              />
            </Box>
            <Box>
              <SelectOcorrencia
                ocorrencias={ocorrencias}
                setValuesSelect={setValuesSelect}
                valuesSelect={valuesSelect}
              />
            </Box>
          </Grid>
          <Grid item md={7} xs={12} sx={{}}>
            <Box
              sx={{
                border: "1px solid #c4c4c4",
                borderRadius: "10px",
                mt: 1,
                mx: 1,
                boxShadow: "1px 1px 8px #aaaaaa",
              }}
            >
              <Box
                sx={{
                  background: "#F7F7F7",
                  borderRadius: "10px 10px 0px 0px",
                  borderBottom: "1px solid #c4c4c4",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    px: 1,
                    color: "#3d3d3d",
                    fontWeight: "550",
                  }}
                >
                  Ocorrências
                </Typography>
              </Box>
              <BarChart
                dataOcorrencias={dados.Dados_ocorrencias.ocorrencias_busca}
                dataRegistros={
                  dados.Dados_ocorrencias.ocorrencias_busca_registradas
                }
                widChart={350}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              border: "1px solid #c4c4c4",
              borderRadius: "10px",
              mt: 1,
              boxShadow: "1px 1px 8px #aaaaaa",
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#F7F7F7",
                  borderRadius: "10px 10px 0px 0px",
                  borderBottom: "1px solid #c4c4c4",

                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    px: 1,
                    color: "#3d3d3d",
                    fontWeight: "550",
                  }}
                >
                  Ocorrências no Ano
                </Typography>
              </Box>
              <PieChart
                dataOcorrencias={dados.Dados_ano.ocorrencias_busca_ano}
                dataRegistros={
                  dados.Dados_ano.ocorrencias_busca_registradas_ano
                }
              />
            </Box>
          </Grid>
          <Grid item md={9} xs={12}>
            <Box
              sx={{
                border: "1px solid #c4c4c4",
                borderRadius: "10px",
                mt: 1,
                mx: 1,
                boxShadow: "1px 1px 8px #aaaaaa",
              }}
            >
              <Box
                sx={{
                  background: "#F7F7F7",
                  borderRadius: "10px 10px 0px 0px",
                  borderBottom: "1px solid #c4c4c4",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    px: 1,
                    color: "#3d3d3d",
                    fontWeight: "550",
                  }}
                >
                  Ocorrências nos Meses
                </Typography>
              </Box>
              <LineChart data={dados.comp_meses_ano} />
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              border: "1px solid #c4c4c4",
              borderRadius: "10px",
              mt: 1,
              boxShadow: "1px 1px 8px #aaaaaa",
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#F7F7F7",
                  borderRadius: "10px 10px 0px 0px",
                  borderBottom: "1px solid #c4c4c4",

                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    px: 1,
                    color: "#3d3d3d",
                    fontWeight: "550",
                  }}
                >
                  Ocorrências nos Municipios
                </Typography>
              </Box>
              <BarChart
                dataOcorrencias={
                  dados.Dados_municipio.ocorrencias_busca_municipio
                }
                dataRegistros={
                  dados.Dados_municipio.ocorrencias_busca_registradas_municipio
                }
                widChart={400}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      <ToastContainer />
    </>
  );
}
