Template.resistencia.onCreated(function(){
  this.corrente = new ReactiveVar()
  this.tensao = new ReactiveVar()
});

Template.resistencia.helpers ({
  getResistencia() {
    const i = Template.instance().corrente.get();
    const v = Template.instance().tensao.get();

    let r = v / i
    if (isNaN(r)) return `A corrênte elétrica é:`
    else return `A corrênte elétrica é: ${r}`

}
});

Template.resistencia.events({
  'click button'(event, template) {
    const i = document.getElementById('i').value
    const v = document.getElementById('v').value
    template.corrente.set(i);
    template.tensao.set(v);
  }
});
