import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const construtor = function () {
  // counter starts at 0
  this.tabuada = new ReactiveVar('');
  
}

const metodos = {
  getTabuada: function() {
    let tabuada = '';
    const numero = Template.instance().tabuada.get();    
    for(let i=1; i<=9; i++){
      tabuada += `${numero} X ${i} = ${i*numero} <br />`;
    }
    return tabuada;   
  }
}

const eventos = {
  'keyup #numero': function(event, instance) {
    const campo = document.getElementById('numero').value;
    if(campo > 0 && campo < 10){
      instance.tabuada.set(event.target.value || 1)
    }
  }
}

Template.hello.onCreated( construtor );

Template.hello.helpers( metodos );

Template.hello.events( eventos );
