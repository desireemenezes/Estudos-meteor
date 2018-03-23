import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'Tensao': function(i, r) {
    const v = i * r
    return `A corrênte elétrica é: ${v}`
  }
})
