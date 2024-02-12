function Funcionario (nome, idade, funcao, tempoDeContrato, salario){
    this.nome = nome
    this.idade = idade
    this.funcao = funcao
    this.tempoDeContrato = tempoDeContrato
    this.salario = salario
}

function Estagiário (nome){
    Funcionario.call(this, nome, idade, "Estagiário", tempoDeContrato, salario)
}

function Gerente(nome){
    Funcionario.call(this, nome, 'Gerente', tempoDeContrato, salario)
}

const funcionario1 = new Funcionario('Marcelo', 26, 'Dev Front-End', '2 Anos', 4000)
const funcionario2 = new Funcionario('Fulano', 23, 'Estagiário', '1 Ano', 2000)
const funcionario3 = new Funcionario('Ciclano', 32, 'Gerente', '3 Ano', 6000)

console.log(funcionario1)
console.log(funcionario2)
console.log(funcionario3)