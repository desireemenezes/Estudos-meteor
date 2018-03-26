Template.login.onCreated(function(){
  //const logins = [email, senha]
 //const pessoas = {nome, date, email, password, profissao}
  this.loginDeAcesso = new ReactiveVar([]);
});

Template.login.helpers({
    getLogin(){
      return Template.instance.loginDeAcesso.get();
    }
});

Template.login.events({
  'click button'(e, t){
    const loginEmail = document.getElementById('email').value
    const loginPassword = document.getElementById('password').value

    const pessoas = Session.get('listaDePessoas')

    //falta fazer o for.
    pessoas[i].login === loginEmail && pessoas[i].password === loginPassword

    const loginConj = []
  }
});
