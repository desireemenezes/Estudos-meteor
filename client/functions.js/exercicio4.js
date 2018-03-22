Template.palidromo.onCreated(function() {
  this.str = new ReactiveVar()
});

Template.palidromo.helpers ({
  palavra() {
    const palid = Template.instance().str.get();
    let palavraDigitada = palid
    let palavraModificada = palavraDigitada.split("").reverse().join("");
    if (palavraDigitada.toLowerCase() === palavraModificada.toLowerCase()) {
      return `${palavraDigitada} é um palidromo`
    }else {
      return `${palavraDigitada} não é um palidromo`
    }

    }
  });

Template.palidromo.events({
  'keyup #palavra'(event, template) {
    const a = document.getElementById('palavra').value;
    template.str.set(a);

  }
});
