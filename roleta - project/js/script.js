   const img = ["Amber.png","Barbara.png","Collei.png","Kaeya.png","Lisa.png","Noelle.png","Xiangling.png","Traveler.png","Albedo.png","Alhaitham.png","Aloy.png","Andarilho.png","Ayaka.png","Ayato.png","Baizhu.png","Beidou.png","Bennett.png","Candace.png","Childe.png","Chongyun.png","Cyno.png","Dehya.png","Diluc.png","Diona.png","Dori.png","Eula.png","Faruzan.png","Fischl.png","Ganyu.png","Gorou.png","Heizou.png","Hutao.png","Itto.png","Jean.png","Kaveh.png","Kazuha.png","Keqing.png","Klee.png","Kokomi.png","Kuki.png","Layla.png","Mika.png","Mona.png","Nahida.png","Nilou.png","Ningguang.png","Qiqi.png","Raiden.png","Razor.png","Rosaria.png","Sara.png","Sayu.png","Shenhe.png","Sucrose.png","Thoma.png","Tighnari.png","Venti.png","Xiao.png","Xingqiu.png","Xinyan.png","Yae.png","Yanfei.png","Yaoyao.png","Yelan.png","Yoimiya.png","Yunjin.png","Zhongli.png"]

   const img2 = ["Albedo","Alhaitham","Aloy","Andarilho","Ayaka","Ayato","Baizhu","Beidou","Bennett","Candace","Childe","Chongyun","Cyno","Dehya","Diluc","Diona","Dori","Eula","Faruzan","Fischl","Ganyu","Gorou","Heizou","Hutao","Itto","Jean","Kaveh","Kazuha","Keqing","Klee","Kokomi","Kuki","Layla","Mika","Mona","Nahida","Nilou","Ningguang","Qiqi","Raiden","Razor","Rosaria","Sara","Sayu","Shenhe","Sucrose","Thoma","Tighnari","Venti","Xiao","Xingqiu","Xinyan","Yae","Yanfei","Yaoyao","Yelan","Yoimiya","Yunjin","Zhongli"]

   const reservaSegundo = ["Amber","Barbara", "Collei", "Kaeya", "Lisa", "Noelle", "Xiangling", "Traveler"]


   // FUNÇÃO DA ROLETA
   function aleatorio(){
     mudar = Math.floor(Math.random()*img.length);
     document.getElementById("cardbox").innerHTML = "<img class='card1'  height='160px' src='img/personagens2/"+img[mudar]+"'>";
   }

   // FUNÇÕES COLOCAR IMAGEM NOS CASES
   function montarTime1 (){
    var nome = mudar;
    document.getElementById("imgcase1").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime2 (){
    var nome = mudar;
    document.getElementById("imgcase2").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime3 (){
    var nome = mudar;
    document.getElementById("imgcase3").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime4 (){
    var nome = mudar;
    document.getElementById("imgcase4").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime5 (){
    var nome = mudar;
    document.getElementById("imgcase5").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime6 (){
    var nome = mudar;
    document.getElementById("imgcase6").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime7 (){
    var nome = mudar;
    document.getElementById("imgcase7").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   function montarTime8 (){
    var nome = mudar;
    document.getElementById("imgcase8").innerHTML = "<img class='card1'  height='100px' src='img/personagens2/"+img[nome]+"'>";
   }

   //FUNÇÕES ATRIBUIR RESERVAS

   function extra1(){
    var primeiroLista = Math.floor(Math.random()*img2.length);
    var primeirolista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista1").innerHTML =
    "<p> "+img2[primeiroLista]+" </p>" + "<p> "+reservaSegundo[primeirolista2]+" </p>";
   }

   function extra2(){
    var segundoLista = Math.floor(Math.random()*img2.length);
    var segundolista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista2").innerHTML =
    "<p> "+img2[segundoLista]+" </p>" + "<p> "+reservaSegundo[segundolista2]+" </p>";
   }

   function extra3(){
    var terceiroLista = Math.floor(Math.random()*img2.length);
    var terceirolista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista3").innerHTML =
    "<p> "+img2[terceiroLista]+" </p>" + "<p> "+reservaSegundo[terceirolista2]+" </p>";

   }

   function extra4(){
    var quartoLista = Math.floor(Math.random()*img2.length);
    var quartolista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista4").innerHTML =
    "<p> "+img2[quartoLista]+" </p>" + "<p> "+reservaSegundo[quartolista2]+" </p>";
   }

   function extra5(){
    var quintoLista = Math.floor(Math.random()*img2.length);
    var quintoLista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista5").innerHTML =
    "<p> "+img2[quintoLista]+" </p>" + "<p> "+reservaSegundo[quintoLista2]+" </p>";
   }

   function extra6(){
    var sextoLista = Math.floor(Math.random()*img2.length);
    var sextoLista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista6").innerHTML =
    "<p> "+img2[sextoLista]+" </p>" + "<p> "+reservaSegundo[sextoLista2]+" </p>";
   }

   function extra7(){
    var setimoLista = Math.floor(Math.random()*img2.length);
    var setimoLista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista7").innerHTML =
    "<p> "+img2[setimoLista]+" </p>" + "<p> "+reservaSegundo[setimoLista2]+" </p>";
   }

   function extra8(){
    var oitavoLista = Math.floor(Math.random()*img2.length);
    var oitavoLista2 = Math.floor(Math.random()*reservaSegundo.length);
    document.getElementById("lista8").innerHTML =
    "<p> "+img2[oitavoLista]+" </p>" + "<p> "+reservaSegundo[oitavoLista2]+" </p>";
   }

// FUNÇÃO DE SORTEIO
// https://www.youtube.com/watch?v=peIwuzgng8c
/*function getRandom() {
  const random = (num) => Math.floor(Math.random() * num);
  console.log(random(10));
}
*/

// PEGAR INFOS DO JSON
// https://www.youtube.com/watch?v=mmCuNbChZ9I
// https://www.youtube.com/watch?v=PmDtOBtZzhQ&t=457s
/*
let divPersonagens = document.querySelector("#personagens")

fetch("js/data.json").then((response) => {
  response.json().then((data) => {
    data.personagens.map((char) => {
      divPersonagens.innerHTML += `<p> ${char.nome} </p>`;
    })
  })
})
*/

// document.getElementById('xxxx').innerHTML = "Ababababa";
