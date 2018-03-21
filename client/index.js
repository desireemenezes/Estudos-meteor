const verificaTemplateSelecionado = function(exercicio) {
  return Session.get('exercicio') === exercicio;
}

const getNomeTemplate = function() {
  return Session.get('exercicio');
}


//registerHelper variavel global
Template.registerHelper('exercicios', verificaTemplateSelecionado )

Template.registerHelper('nomeExercicio', getNomeTemplate )
