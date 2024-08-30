
// Criando uma classe da PersonagemPrincipal.
class PersonagemPrincipal {
  constructor(nome, idade, caixa) {
    this.nome = nome;
    this.idade = idade;
    this.caixa = null;
  }

  receberCaixa(caixa) {
    this.caixa = caixa;
    console.log(`${this.nome} recebeu uma caixa de sua mãe.`);
  }

  adicionarNaCaixa(caixa, carta) {
    caixa.compartimentos.push(carta);
    console.log(
      `A carta do(a) ${carta.nome} foi adicionado(a) com sucesso dentro da caixa.`
    );
  }

  organizar(caixa, carta) {
    if (caixa.compartimentos.length < caixa.capacidade) {
      this.adicionarNaCaixa(caixa, carta);
    } else {
      console.log(
        `${personagemPrincipal.nome} percebeu que a caixa chegou no limite, e parou de colocar, ela agora está pensando se deve comprar outra.`
      );
    }
  }
}

// Criando uma classe da Mãe da Júlia.
class MaeDaJulia {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  entregarCaixa() {
    console.log(
      `${this.nome} entregou a caixa para a ${personagemPrincipal.nome}.`
    );
    return new Caixa();
  }
}

// Criando um construtor Brinquedo.
class Brinquedo {
  constructor(tipo, nome, caracteristica) {
    this.tipo = tipo;
    this.nome = nome;
    this.caracteristica = caracteristica;
  }
}

// Criando o modelo da Caixa.
class Caixa {
  constructor() {
    this.compartimentos = [];
    this.capacidade = 10;
  }
}

// Criando a personagem Júlia e mãe da Júlia.
let personagemPrincipal = new PersonagemPrincipal("Júlia", 6);
let maeDaJulia = new MaeDaJulia("Mãe da Júlia", 31);

// Criando as cartas que a Júlia possui.
let leao = new Brinquedo("carta", "leão", "foto_leao.png");
let girafa = new Brinquedo("carta", "girafa", "foto_girafa.png");
let efefante = new Brinquedo("carta", "elefante", "foto_efefante.png");
let gato = new Brinquedo("carta", "gato", "foto_gato.png");
let rato = new Brinquedo("carta", "rato", "foto_rato.png");
let papagaio = new Brinquedo("carta", "papagaio", "foto_papagaio.png");
let andorinha = new Brinquedo("carta", "andorinha", "foto_andorinha.png");
let beijaFlor = new Brinquedo("carta", "beijaFlor", "foto_beijaFlor.png");
let tatu = new Brinquedo("carta", "tatu", "foto_tatu.png");
let leoa = new Brinquedo("carta", "leoa", "foto_leoa.png");
let cobra = new Brinquedo("carta", "cobra", "foto_cobra.png");
let baleia = new Brinquedo("carta", "baleia", "foto_baleia.png");

// Mostrando a coleção de cartas da Júlia.
console.log(
  `Todas as cartas que a ${personagemPrincipal.nome} possui são essas: ${leao.nome}, ${girafa.nome}, ${gato.nome}, ${rato.nome}, ${papagaio.nome}, ${andorinha.nome}, ${beijaFlor.nome}, ${tatu.nome}, ${leoa.nome}, ${cobra.nome}, ${baleia.nome}, ${efefante.nome}. Ela logou percebeu que era difícil encontrar alguma carta específica, pois elas estavam desorganizadas.`
);

// Criando a caixa.
let caixa = new Caixa();

// Mãe entrega a Caixa.
maeDaJulia.entregarCaixa();
// Júlia recebe a caixa.
personagemPrincipal.receberCaixa(caixa);

// Júlia organiza as cartas na caixa
personagemPrincipal.organizar(caixa, leao);
personagemPrincipal.organizar(caixa, girafa);
personagemPrincipal.organizar(caixa, efefante);
personagemPrincipal.organizar(caixa, gato);
personagemPrincipal.organizar(caixa, rato);
personagemPrincipal.organizar(caixa, papagaio);
personagemPrincipal.organizar(caixa, andorinha);
personagemPrincipal.organizar(caixa, beijaFlor);
personagemPrincipal.organizar(caixa, tatu);
personagemPrincipal.organizar(caixa, leoa);
personagemPrincipal.organizar(caixa, cobra);

// Júlia encontra a carta que ela precisa com rapidez.

