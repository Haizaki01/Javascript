/*
 2- Crie uma classe para representar pessoas.
    Para cada pessoa, teremos os atributos: nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
    Instancie uma pessoa chamada José, com o peso de 70kg e 1,75 de altura e peça ao José dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    calcularImc() {
         return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if(imc < 18.5 ) {
            return ("Abaixo do peso")
        } else if(imc >=18.5 && imc < 25) {
            return ("Peso normal")
        } else if(imc >=25 && imc < 30) {
            return ("Acima do peso")
        } else if(imc >=30 && imc < 40) {
            return ("Obesidade")
        } else {
            return ("Obesidade Grave")
        }
    }
}


// A seguir um exemplo de cada fase do If 

const Pessoa1 = new Pessoa("Gustavo", 40, 1.69) //Pessoa abaixo do peso
console.log(Pessoa1.classificarImc());

const Pessoa2 = new Pessoa("Adriana", 58, 1.57) // Pessoa com peso normal
console.log(Pessoa2.classificarImc());

const Pessoa3 = new Pessoa("Rafael", 84, 1.80) // Pessoa acima do peso
console.log(Pessoa3.classificarImc());

const Pessoa4 = new Pessoa ("João", 80, 1.60) // Pessoa com obesidade
console.log(Pessoa4.classificarImc());

const Pessoa5 = new Pessoa("Gabriela", 114, 1.60) //Pessoa com obesidade Grave
console.log(Pessoa5.classificarImc()); 
