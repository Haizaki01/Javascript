/*
1- Crie uma classe para representar carros.
    Os carros possuem marca, cor e um gasto médio de combustivel por KM rodado.
    Crie um metodo que dado a quantidade de KM e o preço do combustivel, nos de o valor gasto 
    reais para realizar o percurso.

    class = Padrão a ser seguido para o cadastro de novos carros
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

/*
1 / 4,    1 / 5,    1/ 3.3  = 1L de combustivel por X km rodados
73 = Km até o local desejado
5 = preço do combustivel
*/

const Superfast812 = new Carro('Ferrari', 'Vermelho', 1 / 4);
console.log(Superfast812.calcularGastoDePercurso(73, 5));

const R8 = new Carro("Audi", "Prata", 1 / 5);
console.log(R8.calcularGastoDePercurso(73, 5));

const McLaren720s = new Carro("McLaren", "Design Gulf", 1 / 3.3);
console.log(McLaren720s.calcularGastoDePercurso(73, 5));




