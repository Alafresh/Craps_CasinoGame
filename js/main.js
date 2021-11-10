
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var numero = document.getElementById("tiro");
let tiro, i, buff;

window.onload = init;

function init(){
  tiro = document.getElementById("tiro");
  i = 0;
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  return cara;
}

function jugar(){
  let punto1 = tirardado(dado1);
  let punto2 =  tirardado(dado2);
  let total = punto1 + punto2;
  if (i == 0) {
    if (total == 7 || total == 11)
    {
      tiro.innerHTML = "Has ganado la apuesta"
    }
    else if (total == 2 || total == 3 || total == 12)
    {
      tiro.innerHTML = "Has perdido la apuesta"
    }
    else {
      tiro.innerHTML = "Su punto es " + total.toString();
      buff = total;
      i += 1;
    }
  }
  else {
    if (total == buff) {
      tiro.innerHTML = "Has ganado la apuesta"
      i = 0;
    }
    else if (total == 7) {
      tiro.innerHTML = "Has perdido la apuesta";
      i = 0;
    }
    else {
      tiro.innerHTML = "Su punto es " + buff.toString();
      console.log(total);
    }   
  }
}