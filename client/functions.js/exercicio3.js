Template.hipotenusa.onCreated(function() {
  this.catetoA = new ReactiveVar(0)
  this.catetoB = new ReactiveVar(0)
});


Template.hipotenusa.helpers ({
  getHipotenusa() {
    const a = Template.instance().catetoA.get();
    const b = Template.instance().catetoB.get();
    let calcA = a * a
    let calcB = b * b
    let hipo = calcA + calcB
    return `O valor da Hipotenusa é: ${hipo}`
  }
})

Template.hipotenusa.events({
  'click button'(event, template) {
    const a = document.getElementById('a').value || 1;
    const b = document.getElementById('b').value || 1;
    template.catetoA.set(a);
    template.catetoB.set(b);
  }
});
