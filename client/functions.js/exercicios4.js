Template.palidromo.onCreated(function() {
  this.str = new ReactiveVar('')
});

Template.palidromo.helpers ({
  palavra() {
    const palid = Template.instance().str.get();
    let palavraDigitada = palid
    let palavraModificada = palavraDigitada.split("").reverse().join("");


    if (palavraDigitada.toLowerCase() === palavraModificada.toLowerCase()) {
      return `${palavraDigitada} É um palídromo`
    } else {
      return `${palavraDigitada} não é um palidromo`
    }

    }
  });

Template.palidromo.events({
  'click button'(event, template) {
    const a = document.getElementById('palavra').value;
    template.str.set(a);

  }
});
