Template.corrente.onCreated(function() {
  this.resistencia = new ReactiveVar()
  this.tensao = new ReactiveVar()
});

Template.corrente.helpers ({
  getCorrente() {
    const r = Template.instance().resistencia.get();
    const v = Template.instance().tensao.get();

    let i = v / r
    if (isNaN(i)) return `A corrênte elétrica é:`
    else return `A corrênte elétrica é: ${i}`
  
}
});

Template.corrente.events({
  'click button'(event, template) {
    const r = document.getElementById('r').value
    const v = document.getElementById('v').value
    template.resistencia.set(r);
    template.tensao.set(v);
  }
});
