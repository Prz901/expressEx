/*
Crie um programa de agendamento de consultas onde o paciente poderá escolher data e hora para 
um agendamento.Crie uma seção para o Medico acompanhar os agendamentos do dia programados com ele. 
Essa seção deve incluir as informações do usuário que agendou e também o horário do agendamento.


*/
let agendamentos = require("./clinics");
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/doug", function(req, res) {
  res.send(agendamentos);
});

app.get("/batata", function(req, res) {
  res.send("!!!!!");
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
