/* Tudo comentado para não ter variáveis com o mesmo nome.

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

  // Exercício 6.

function calcularMedia () {


    let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
    return soma / 7;
 
}


  function verificarAprovacao() {
 
      if (media >= 6) {
          return "Aprovado!";
      } else {
          return "Reprovado!";
      }
    }


const nota1 = prompt("Digite a primeira nota: ");
const nota2 = prompt("Digite a segunda nota: ");
const nota3 = prompt("Digite a terceira nota: ");
const nota4 = prompt("Digite a quarta nota: ");
const nota5 = prompt("Digite a quinta nota: ");
const nota6 = prompt("Digite a sexta nota: ");
const nota7 = prompt("Digite a sétima nota: ");
 
const media = calcularMedia();
const status = verificarAprovacao();
 
console.log("A média do aluno é:", media.toFixed(2));
console.log("O aluno está:", status);

// Exercício 7 (index.html).

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados do Aluno.</title>
</head>
<body>
    <h1>Dados do Aluno:</h1>
    <div id="dadosAluno"></div>  
    <body style="background-color:rgb(126, 156, 177);"></body>
    <script src="script.js"></script>
 
</body>
</html>
 
// Exercício 7 (script.js).

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let curso = prompt("Digite seu curso: ");
let ano = prompt("Digite o ano que está no curso: ");


const dadosAlunoDiv = document.getElementById("dadosAluno");


const dadosFormatados = `Nome: ${nome}<br> Idade: ${idade}<br> Curso: ${curso}<br> Ano: ${ano}`;
dadosAlunoDiv.innerHTML = dadosFormatados;

*/
