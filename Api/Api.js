const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const Comentario = require("./Comentario");

app.post("/add", function (req, res) {
  Comentario.create({
    nome: req.body.nome,
    email: req.body.email,
    comentario: req.body.comentario,
  })
    .then(function () {
      res.send("OK");
    })
    .catch(function () {
      res.send("Erro ao cadastrar");
    });
});

app.get("/", function (req, res) {
  Comentario.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch(function () {
      res.send("Erro ao buscar");
    });
});

app.get("/excluir/:id", function (req, res) {
  Comentario.destroy({
    where: { id: req.params.id },
  })
    .then(function () {
      res.send("OK");
    })
    .catch(function () {
      res.send("Erro ao excluir");
    });
});

app.get("/:id", function (req, res) {
  Comentario.findOne({
    where: { id: req.params.id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch(function () {
      res.send("Erro ao excluir");
    });
});

app.post("/atualizar", function (req, res) {
  const updateAt = new Date();

  Comentario.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      comentario: req.body.comentario,
      updateAt: updateAt,
    },

    { where: { id: req.body.id } }
  )
    .then(function () {
      res.send("OK");
    })
    .catch(function (erro) {
      res.send("Falha ao atualizar post " + erro);
    });
});

app.listen(3001, function () {
  console.log("Api rodando!");
});
