import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'Hipotenusa' : function(a, b){
    const calcA = a * a
    const calcB = b * b
    const hipo = calcA + calcB
    return `O valor da Hipotenusa é: ${hipo}`
  }
})
