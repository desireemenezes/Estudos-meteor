Template.selectLeideOhm.events({
  'change #selectLei'(event, target) {
    Session.set('lei', event.target.value)
  }
})

Template.selectLeideOhm.helpers({
  getLei(lei){
    return Session.get('lei') === lei
  }
})
