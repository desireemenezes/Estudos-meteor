Template.formClic.onCreated(function() {
  //const pessoa {nome, data, }
  this.pessoas = new ReactiveVar([]);
});

Template.formClic.helpers ({
  getPessoas(){
    console.log(Template.instance().pessoas.get())
    return Template.instance().pessoas.get()
  }
});

Template.formClic.events({
  'click button'(event, template){
    const nomeP = document.getElementById('nome').value
    const dataP = document.getElementById('date').value
    const profissaoP = document.getElementById('profissao').value

    const pessoa = {nome:nomeP, dataNasc: dataP, profissao: profissaoP}

    const pessoas = template.pessoas.get();
    pessoas.push(pessoa)


    template.pessoas.set(pessoas)
  }
});
