import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'Resistencia': function(i, v) {
    const r = v / i
    return `A resistencia elétrica é: ${r}`

  }
})
