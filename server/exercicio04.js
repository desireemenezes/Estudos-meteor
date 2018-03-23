import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'palidromo' : function(palid){

      let palavraDigitada = palid
      let palavraModificada = palavraDigitada.split("").reverse().join("");
      if (palavraDigitada.toLowerCase() === palavraModificada.toLowerCase()) {
        return `${palavraDigitada} é um palidromo`
      }else {
        return `${palavraDigitada} não é um palidromo`
      }
  }
});
