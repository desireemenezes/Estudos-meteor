Template.selectExercicio.events({
  'change #exercicioSelector'(event, target) {
    Session.set('exercicio', event.target.value)
  }
})
