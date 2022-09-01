var efusiva = document.getElementById("efusiva");
var explosiva = document.getElementById("explosiva");
var mista = document.getElementById("mista");
var adormecido = document.getElementById("adormecido");

function estage0(){
    vlc.src = "./images/vulcao.png"
}


function estage1(){
    vlc.src = "./images/efusiva.png"
}

function estage2(){
    vlc.src = "./images/explosiva.png"
}

function estage3(){
    vlc.src = "./images/mista.png"
}




efusiva.addEventListener("click", estage1);
explosiva.addEventListener("click", estage2);
mista.addEventListener("click", estage3);
adormecido.addEventListener("click", estage0);