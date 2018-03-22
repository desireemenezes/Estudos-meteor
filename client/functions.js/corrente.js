Template.corrente.onCreated(function() {
  this.resistencia = new ReactiveVar(1)
  this.tensao = new ReactiveVar(1)
});

Template.corrente.helpers ({
  getCorrente() {
    const r = Template.instance().resistencia.get();
    const v = Template.instance().tensao.get();

    let i = v / r
    return `A corrênte elétrica é: ${i}`
  }
})

Template.corrente.events({
  'click button'(event, template) {
    const r = document.getElementById('r').value || 1;
    const v = document.getElementById('v').value || 1;
    template.resistencia.set(r);
    template.tensao.set(v);
  }
});
