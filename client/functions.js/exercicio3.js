Template.hipotenusa.onCreated(function() {
  this.hipotenusa = new ReactiveVar(0)

});


Template.hipotenusa.helpers ({
  getHipotenusa: function () {
    return Template.instance().hipotenusa.get();
  }

  })

Template.hipotenusa.events({
  'click button'(event, template) {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    Meteor.call('Hipotenusa', a, b, (er, r) => {
        template.hipotenusa.set(r);
      })
    }
});
