/*
Crie um programa de agendamento de consultas onde o paciente poderá escolher data e hora para 
um agendamento.Crie uma seção para o Medico acompanhar os agendamentos do dia programados com ele. 
Essa seção deve incluir as informações do usuário que agendou e também o horário do agendamento.

*/
let agendamentos = require("../clinics");
const bodyParse = require("body-parser");

module.exports = app => {
  app.get("/", function(req, resp) {
    resp.render("../views/inicial");
  });

<<<<<<< HEAD
  app.get("/agendados", function(req, res) {
    res.send(agendamentos);
  });

  app.use(
    bodyParse.urlencoded({
      extended: true
    })
  );
  app.use(bodyParse.json());

  app.get("/agendamentos", function(req, resp) {
    console.log("criando os agendamentos");
  });

  app.post("/livros", function(req, resp) {
    console.log(req.body);
  });
=======
  app.get("/doug", function(req, res) {
    resp.send(agendamentos);
  });
  app.post('/agendamentos', function(req, resp){
    console.log(resp.send)
  })
>>>>>>> e177f527cefb14b18910c4c2edd952f1e6a7acc4
};
