
var canvas = document.getElementById("mesa");
canvas.width = "540";
canvas.height = "540";
var contexto = canvas.getContext("2d");

var fundoImg = new Image();

function mudaFundo(imagem)
{
    fundoImg.src = "img/fundo/mapa.jpg";
    contexto.drawImage(fundoImg, 0,0);
}

mudaFundo();
