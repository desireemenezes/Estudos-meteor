Template.palidromo.onCreated(function() {
  this.str = new ReactiveVar()
});

Template.palidromo.helpers ({
  palavra: function () {
      return Template.instance().str.get();

    }
  });

Template.palidromo.events({
  'keyup #palavra'(event, template) {
    const a= document.getElementById('palavra').value;
    Meteor.call('palidromo', a, (e, r) => {
      template.str.set(r);
    })
  }
});
