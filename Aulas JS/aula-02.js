var titulo = document.querySelector("h1")

// console.log(titulo.textContent)

// titulo.textContent = "Novo texto aqui no JS!"

// titulo.textContent

// console.log(document.querySelectorAll(".welcome")[1])


// function mostrarAlerta() {
//    alert("dnjks;ndcjkndljnjlksdnclksndcjkl")
// }

// var botao = document.querySelector("#botao")

// botao.onclick = mostrarAlerta;

// Exemplo de getElementById
console.log(document.getElementById('saudacao'));

document.getElementById('saudacao').textContent = "dsncjksdn"

// Exemplo de querySelector
// let texto = document.querySelector('p');
// texto.style.color = 'blue';


// Exemplo de setAttribute/removeAttribute
document.querySelector('#nome').setAttribute('type', 'text');

console.log(document.querySelector('#nome'))
//document.querySelector('#nome').removeAttribute('name');


// Exemplo de como "pegar" o valor de um input
//document.querySelector('#nome').value;

// E quando o valor do input é um número?
//document.querySelector('#nome').valueAsNumber;

// Exemplo de como alterar o texto de um elemento
document.getElementById('saudacao').innerText = 'Mudei o texto!'; 

// Exemplo pra adicionar/remover uma classe
//document.getElementById('saudacao').className = "green";
document.getElementById('saudacao').classList.add('green');
document.getElementById('saudacao').classList.remove('red');
//console.log(document.getElementById('saudacao'))

// Exemplo adicionar/remover um elemento
let div = document.createElement('div');

div.innerText = 'Div criada!';


document.body.append(div); 

document.getElementById('saudacao').remove();


function mostrarMensagem() {
  alert('Oi Lorena!');
}