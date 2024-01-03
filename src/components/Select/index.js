import { useState } from "react";
import "./index.css";
let params = [];
const ListSelect = (props) => {
  if (typeof props.list[0] == "object") {
    const dados = props.list[0];
    params = Object.keys(dados)[1]; // Acessando a primeira chave do primeiro item
  }

  return (
    <div>
      <label>{props.title}</label>
      <select
        className="select_input"
        onChange={(evento) => props.handleChange(evento.target.value)}
        value={props.valor}
        disabled={props.disabled === true ? true : false}
        renderValue={(selected) => selected.join}
      >
        <option hidden>Selecione</option>
        {props.list.map((item) => (
          <option
            style={{ padding: "15px" }}
            key={item.id}
            // selected={item.id === props.up ? true : false}
            value={item.id ? item.id : item}
          >
            {item[params] ? item[params] : item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ListSelect;
