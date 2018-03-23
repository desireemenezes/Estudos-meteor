Template.resistencia.onCreated(function(){
  this.iniciaResistencia = new ReactiveVar()
});

Template.resistencia.helpers ({
  getResistencia: function() {
    return Template.instance().iniciaResistencia.get();
  }
});

Template.resistencia.events({
  'click button'(event, template) {
    const i = document.getElementById('i').value
    const v = document.getElementById('v').value
    Meteor.call('Resistencia', i, v,(er, result) => {
        template.iniciaResistencia.set(result);
    })
  }
});
