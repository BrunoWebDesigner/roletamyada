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

  document.getElementById("imgcase"+num).innerHTML = `<img id='fundoimg${num}' class='imgadd' src='${data.personagens[nome].link}'>`;


     // CONDICIONAL PARA COR DE FUNDO DAS IMAGENS
     var elemento = document.getElementById("fundoimg"+num);
   
     if (data.personagens[nome].raridade == 4) {
   
       elemento.style.backgroundImage = "url('https://rerollcdn.com/STARRAIL/Rarity/4_sm.png')";
     }
     else {
       elemento.style.backgroundImage = "url('https://rerollcdn.com/STARRAIL/Rarity/5_sm.png')";
     }

  };

//FUNÇÕES ATRIBUIR RESERVAS
async function extra(num){
  let response = await fetch("js/data.json");
  let data = await response.json();

  const img1 = [];
  for (let j = 8; j <= 66; j++) {
    img1.push(data.personagens[j]);
  }
  const img2 = [];
  for (let i = 0; i <= 7; i++) {
    img2.push(data.personagens[i]);
  }

  var primeiroLista = img1[Math.floor(Math.random()*img1.length)].nome;
  if(primeiroLista === mudar){
    primeiroLista--;
  }

  var primeiroLista2 = img2[Math.floor(Math.random()*img2.length)].nome;

  document.getElementById("lista"+num).innerHTML =
  "<p> "+ primeiroLista +" </p>" + "<p> "+ primeiroLista2 +" </p>";
   }
