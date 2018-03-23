import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'Corrente': function(r, v) {
    const i = v / r
    return `A corrênte elétrica é: ${i}`
  }
})
