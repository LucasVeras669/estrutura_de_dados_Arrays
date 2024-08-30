//Criando uma classe Pessoa
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
      }

      adicionarNaCaixa(carta) {
        
      }
} 

// Criando um construtor Brinquedo
class Brinquedo{
    constructor(tipo, nome, caracteristica){
        this.tipo = tipo;
        this.nome = nome;
        this.caracteristica = caracteristica;
      }
} 

//Criando a personagem Júlia e a Mãe da Júlia
let julia = new Pessoa("Júlia", 6);
let maeDaJulia = new Pessoa("mãe da Júlia", 30);

//Criando as cartas que a Júlia tem
let leao = new Brinquedo("carta", "leão", "foto_leao.png");
let girafa = new Brinquedo("carta", "girafa", "foto_girafa.png");
let efefante = new Brinquedo("carta", "elefante", "foto_efefante.png");

// Criando o modelo da Caixa
class Caixa {
    constructor(){
        this.compartimentos = []
        this.capacidade = 10
    };

}

