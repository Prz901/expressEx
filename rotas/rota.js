/*
Crie um programa de agendamento de consultas onde o paciente poderá escolher data e hora para 
um agendamento.Crie uma seção para o Medico acompanhar os agendamentos do dia programados com ele. 
Essa seção deve incluir as informações do usuário que agendou e também o horário do agendamento.

*/
let agendamentos = require("../clinics");

module.exports = app => {
  app.get("/", function(req, res) {
    res.render("../views/inicial");
  });

  app.get("/doug", function(req, res) {
    res.send(agendamentos);
  });
};
