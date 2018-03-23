Template.corrente.onCreated(function() {
  this.iniciaCorrente = new ReactiveVar()
});

Template.corrente.helpers ({
  getCorrente: function() {
    return Template.instance().iniciaCorrente.get();
  }
})

Template.corrente.events({
  'click button'(event, template) {
    const r = document.getElementById('r').value
    const v = document.getElementById('v').value
    Meteor.call('Corrente' ,r,v,(er, result) => {
      template.iniciaCorrente.set(result);
      })
  }
});
