import axios from "axios";
export async function BuscarCidades() {
  try {
    const response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ac/municipios"
    );
    return response.data.map((item) => [{ id: item.id,  nome: item.nome }]);
  } catch (error) {
  }
}
