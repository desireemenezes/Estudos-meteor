Template.tensao.onCreated(function() {
  this.iniciaTensao = new ReactiveVar()

})

Template.tensao.helpers({
  getTensao : function() {
    return Template.instance().iniciaTensao.get();
  }
})

Template.tensao.events ({
  'click button' (event, template){
    const i = document.getElementById('i').value
    const r = document.getElementById('r').value
    Meteor.call('Tensao', r, i, (er, result) => {
      console.log(result);
      template.iniciaTensao.set(result);
  })
  }
})
