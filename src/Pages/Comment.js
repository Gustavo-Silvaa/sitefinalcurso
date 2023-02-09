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
    <main id="comentarios">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          <h4>Nome</h4>
          <input
            type="text"
            id="nome"
            name="nome"
            value={inputs.nome}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <h4>E-mail</h4>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="comentario">
          <h4>Comentario</h4>
          <textarea
            type="text"
            id="comentario"
            name="comentario"
            value={inputs.comentario}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="Gravar" />
      </form>

      <div id="lista">
        <div>
          <tr style={{ marginBottom: 15 }} className="tr">
            <th id="listname">Nome</th>
            <th id="listemail">Email</th>
            <th id="listcomment">Comentario</th>
          </tr>
        </div>

        <div>
          {listRow.map((val) => (
            <tr className="tr">
              <td id="listname">{val.nome}</td>
              <td id="listemail">{val.email}</td>
              <td id="listcomment">{val.comentario}</td>
            </tr>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Comentarios;
