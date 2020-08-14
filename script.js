window.onload = function() {
   let proprietario;
   let locador;
   locador = "João";
//    console.log(locador);
//    console.log(proprietario);
    proprietario = locador;
//    console.log("DEPOIS DE COPIAR")
//    console.log(locador);
//    console.log(proprietario);
   alert(proprietario);
   let nossoPlaneta = "Terra";
   let nomeVisitante = "Joao";
   let valor = 150;
   if (valor >= 100 && valor <= 200) {
        console.log("Está entre 100 e 200")
   } 
   else {
        console.log("Não está entre 100 e 200");   
   }
   /** QUESTÃO 8 **/
   if (!(valor >=100 && valor <=200)) {
        console.log("Não está entre 100 e 200");     
   }
   else {
        console.log("Está entre 100 e 200");
   }

   if (valor<100 || valor > 200) {
        console.log("Não está entre 100 e 200");     
   }
   else {
      console.log("Está entre 100 e 200");
   }

   let usuario = prompt("Qual o seu usuário?");
   checarUsuario(usuario);
}

function checarUsuario(usuario) {
    if (usuario == "Admin") {
        let senha = prompt ("Qual sua senha?");
        checarSenha(senha);      
    }
    else {
        if ( usuario == "undefined") {
            alert("Cancelado");
        }
        else {
            alert("Não conheço você");
        }          
    }
}

function checarSenha(senha) {
    if (senha == "UniBH") {
      alert("Bem vindo");
    }
    else {
        if ( senha == "undefined") {
            alert("Cancelado");
        }
        else {
            alert("Senha incorreta!");
        }          
    }
}