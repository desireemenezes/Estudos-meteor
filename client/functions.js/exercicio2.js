Template.divisao.onCreated(function() {this.divisao = new ReactiveVar()});

Template.divisao.helpers({
getDivisao: function() {
  return Template.instance().divisao.get();
  }
})

Template.divisao.events({
  'click button'(event, template) {
    const num = document.getElementById('divisao').value;
    Meteor.call('Divisao', num , (error, result) => {
    template.divisao.set(result)

    })
  }
});
