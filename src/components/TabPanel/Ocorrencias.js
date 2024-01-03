import { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SelectAno from "../Select/SelectAno";
import SelectOcorrencia from "../Select/SelectOcorrencia";
import SelectCidade from "../Select/SelectCidade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinearProgress from "@mui/material/LinearProgress";
import SelectForca from "../Select/SelectForca";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
import { instance } from "../../constants";

export default function Ocorrencias() {
  const [valuesSelect, setValuesSelect] = useState({
    ano: ["2022", "2023"],
    ocorrencia: "Todas",
    municipio: "1200401",
  });
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ocorrencias, setOcorrencias] = useState({});
  const [forca, setForca] = useState("PMAC");
  const [forcas, setForcas] = useState(["PMAC", "CBMAC", "PCAC", "PPAC"]);

  //FUNÇÃO APENAS PARA BUSCAR OS DADOS
  function BuscarDados() {
    setLoading(true);
    instance
      .post(`/dadosOcorrencia`, {
        findName: "Ocorrencias",
        Anos: valuesSelect.ano,
        Forca_busca: forca,
        Ocorrencias:
          valuesSelect.ocorrencia == "Todas"
            ? ocorrencias
            : valuesSelect.ocorrencia,
        Municipio: valuesSelect.municipio,
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
          if (response.data[0].Comparativo_ano) {
            setDados(response.data[0]);
            setLoading(false);
          }
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
  }

  // BUSCAR OCORRÊNCIAS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.post("/dadosOcorrencia", {
          findName: "Ocorrencias",
          Forca: forca,
        });
        setOcorrencias(response.data !== undefined ? response.data : []);
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
      }
    };

    fetchData();
  }, [forca]);

  useEffect(() => {
    if (ocorrencias.length > 0) {
      BuscarDados();
    }
  }, [ocorrencias, valuesSelect]);

  return (
    <>
      {loading && (
        <>
          <Box sx={{}}>
            <LinearProgress />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6"> CARREGANDO DADOS</Typography>
          </Box>
        </>
      )}
      {!loading &&
        (Object.keys(dados).length > 0 ? (
          <Grid container>
            <Grid item md={2} xs={12}>
              <Box>
                <SelectCidade
                  setValuesSelect={setValuesSelect}
                  valuesSelect={valuesSelect}
                />
              </Box>
              <Box my={3}>
                <SelectForca
                  forcas={forcas}
                  setForca={setForca}
                  forca={forca}
                />
              </Box>
              <Box my={3}>
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
                  dataOcorrencias={dados.Ocorrencia_pie_tabela.ocorrencias_tipo}
                  dataRegistros={
                    dados.Ocorrencia_pie_tabela.ocorrencias_registradas
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
                  dataOcorrencias={dados.Comparativo_ano.ocorrencia_bar_ano}
                  dataRegistros={
                    dados.Comparativo_ano.ocorrencia_bar_ano_registradas
                  }
                />
              </Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box>
                <SelectAno
                  setValuesSelect={setValuesSelect}
                  valuesSelect={valuesSelect}
                />
              </Box>
            </Grid>
            <Grid item md={10} xs={12}>
              <Box
                sx={{
                  border: "1px solid #c4c4c4",
                  borderRadius: "10px",
                  mt: 1,
                  ml: 1,
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

                <LineChart data={dados.meses_ano} />
              </Box>
            </Grid>
          </Grid>
        ) : (
          ""
        ))}

      <ToastContainer />
    </>
  );
}
