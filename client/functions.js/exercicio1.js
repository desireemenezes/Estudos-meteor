const construtor = function () {
  // counter starts at 0
  this.tabuada = new ReactiveVar('');

}

const metodos = {
  getTabuada: function() {
    return Template.instance().tabuada.get();
  }
}

const eventos = {
  'keyup #numero, change #numero': function(event, instance) {
    const campo = document.getElementById('numero').value;
      Meteor.call('CalculaTabuada', campo, (error, result) => {
        instance.tabuada.set(result)

      })
  }
}

Template.tabuada.onCreated( construtor );

Template.tabuada.helpers( metodos );

Template.tabuada.events( eventos );
