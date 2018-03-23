import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
 'CalculaTabuada' : function(numero) {

   if(numero > 0 && numero < 10){
     let tabuada = ''
     for(let i=1; i<=9; i++){
       tabuada += `${numero} X ${i} = ${i*numero} <br />`;
     }
     return tabuada;
   } else {
     return `<p class="text-warning"> Numero invalido ${numero} </p>`
   }
 }
});
