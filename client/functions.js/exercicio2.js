Template.divisao.onCreated(function() {this.divisao = new ReactiveVar(2)});

Template.divisao.helpers({
getDivisao() {
  let div = '';
  const numero = Template.instance().divisao.get();
  let result = numero;
  do {
        div += `${result} / 2 = ${result / 2} <br />`
        result = result / 2;
        result = result.toFixed(.1);

     } while (result >= 2)

     return div
  }
})

Template.divisao.events({
  'click button'(event, template) {
    const num = document.getElementById('divisao').value;
    template.divisao.set(num);
  }
});
