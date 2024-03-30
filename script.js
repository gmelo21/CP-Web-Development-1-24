// Código de set-up para Input de usuário no terminal do VS Code. 
const prompt = require('prompt-sync')();

// Exercício 1.

let variavel_undefined;
console.log(variavel_undefined);


let variavel_nula = null;
console.log(variavel_nula);


let variavel_com_valor = 77;
console.log(variavel_com_valor);

// Exercício 2.

let x = 10;
let y = 8;


console.log(x != y);
console.log(x == y);
console.log(x >= y);

// Exercício 3.

function calcularIMC() {
    return parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
  }
  
  
  function verificarPeso() {
    if (imc < 18.5) {
      return "Abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso ideal.";
    } else {
      return "Acima do peso.";
    }
  }
  
let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua altura: ");
  
let imc = calcularIMC();
let statusPeso = verificarPeso();
  
console.log("Seu IMC é: ", imc.toFixed(2));
console.log("Você está ", statusPeso);

// Exercício 4.

function verificarFaixaEtaria() {
    if (idade <= 12) {
      return "Criança.";
    } else if (idade >= 13 && idade <= 18) {
      return "Adolescente.";
    } else if (idade >= 19 && idade <= 60) {
      return "Adulto.";
    } else {
      return "Idoso.";
    }
  }
  
  
let idade = prompt("Digite sua idade: ");
let faixaEtaria = verificarFaixaEtaria();
console.log("Sua faixa etária é de: ", faixaEtaria);

// Exercício 5.

function autentificarUsuario() {
    const nomeUsuarioCadastrado = "admin";
    const senhaCadastrada = "1234";
  
  
    if (nomeUsuarioInput === nomeUsuarioCadastrado && senhaInput === senhaCadastrada) {
      return "Login realizado com sucesso!";
    } else {
      return "Falha de autenticação. Nome de usuário ou senha incorretos.";
    }
  }
  
  
  let nomeUsuarioInput = prompt("Nome de Usuário: ");
  let senhaInput = prompt("Senha: ");
  
  
  const mensagemLogin = autentificarUsuario();
  
  
  console.log(mensagemLogin);
  