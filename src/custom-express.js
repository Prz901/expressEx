const express = require("express");
const app = express();

const rotas = require("../rotas/rota");
rotas(app);

module.exports = app;
