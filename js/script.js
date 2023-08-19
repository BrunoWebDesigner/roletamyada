// FUNÇÃO DA ROLETA
let divCardbox = document.querySelector("#cardbox");

async function aleatorio(){
  let response = await fetch("js/data.json");
  let data = await response.json();

  mudar = Math.floor(Math.random() * Object.keys(data.personagens).length);
  divCardbox.innerHTML = `<img class='card1' height='250px' src='${data.personagens[mudar].link2}'>`;
  };

// FUNÇÕES COLOCAR IMAGEM NOS CASES
async function montarTime(num){
  let response = await fetch("js/data.json");
  let data = await response.json();

  var nome = mudar;

  document.getElementById("imgcase"+num).innerHTML = `<img id='fundoimg${num}' class='imgadd' src='${data.personagens[nome].link}'>`

     // CONDICIONAL PARA COR DE FUNDO DAS IMAGENS
     var elemento = document.getElementById("fundoimg"+num);
   
     if (data.personagens[nome].raridade == 4) {
   
       elemento.style.backgroundImage = "url('https://rerollcdn.com/STARRAIL/Rarity/4_sm.png')";
     }
     else {
       elemento.style.backgroundImage = "url('https://rerollcdn.com/STARRAIL/Rarity/5_sm.png')";
     }
  };

// FUNÇÃO PARA EXCLUIR IMAGEM
function desmontarTime (num){
  document.getElementById("imgcase"+num).innerHTML = `<img id='fundoimg${num}' class='imgadd' src='img/case2.png' onclick='extra(${num})'>`;

  document.getElementById("lista"+num).innerHTML = `<div id='lista${num}'></div>`;
};


//FUNÇÕES ATRIBUIR RESERVAS
async function extra(num){
  let response = await fetch("js/data.json");
  let data = await response.json();

  const img1 = [];
  for (let j = 9; j <= 68; j++) {
    img1.push(data.personagens[j]);
  }
  const img2 = [];
  for (let i = 0; i <= 8; i++) {
    img2.push(data.personagens[i]);
  }
  var teste = mudar;

  var primeiroLista = img1[Math.floor(Math.random()*img1.length)].nome;
  if(primeiroLista === teste){
    var primeiroLista = primeiroLista - 1;
  }

  var primeiroLista2 = img2[Math.floor(Math.random()*img2.length)].nome;

  document.getElementById("lista"+num).innerHTML =
  "<p> "+ primeiroLista +" </p>" + "<p> "+ primeiroLista2 +" </p>" + `<img class='botaox' src='img/botaox.png' onclick='desmontarTime(${num})' height= '20' width= '20'>`;
   }