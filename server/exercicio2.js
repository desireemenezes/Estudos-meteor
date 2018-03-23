import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
 'Divisao' : function(numero) {
  let div = '';
  let result = numero;
  do {
        div += `${result} / 2 = ${result / 2} <br />`
        result = result / 2;
        result = result.toFixed(.1);

     } while (result >= 2)

     return div
  }
});
