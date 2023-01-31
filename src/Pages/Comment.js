import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Css/comment.css";

const Comentarios = () => {
  const [inputs, setInputs] = useState([]);
  const [listRow, setlistRow] = useState([]);

  const handleChange = (elemento) => {
    const name = elemento.target.name;
    const value = elemento.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    console.log(inputs);

    Axios.post("http://localhost:3001/add", {
      nome: inputs.nome,
      email: inputs.email,
      comentario: inputs.comentario,
    }).then(refreshList, []);

    setInputs((inputs.nome = ""));
    setInputs((inputs.email = ""));
    setInputs((inputs.comentario = ""));
  };

  const refreshList = () => {
    Axios.get("http://localhost:3001").then((response) => {
      setlistRow(response.data);
    });
  };

  useEffect(refreshList, []);

  return (
    <main className="comentarios">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          <p>Nome</p>
          <input
            type="text"
            id="nome"
            name="nome"
            value={inputs.nome}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <p>E-mail</p>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="comentario">
          <p>Comentario</p>
          <input
            type="text"
            id="comentario"
            name="comentario"
            value={inputs.comentario}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Gravar" />
      </form>

      <table id="lista">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Comentario</th>
          </tr>
        </thead>

        <tbody>
          {listRow.map((val) => (
            <tr>
              <td>{val.nome}</td>
              <td>{val.email}</td>
              <td>{val.comentario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Comentarios;
