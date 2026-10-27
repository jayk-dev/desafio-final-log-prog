// declarar as classes
class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    


    atacar() {
        let ataque ="";

        if (this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }
        else if (this.tipo === "mago"){
            ataque = "magia"
        }
        else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }
        else {
            ataque = "ataque desconhecido"
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Harry", 12, "guerreiro");
let heroi2 = new Heroi("Hassum", 109, "monge");
let heroi3 = new Heroi("Dumbledore", 120, "mago");
let heroi4 = new Heroi("Sseshomaru",40, "ninja");

let herois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}