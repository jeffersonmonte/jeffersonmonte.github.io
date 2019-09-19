
var canvasMapa = document.getElementById("mapa");
var canvasWidth = document.getElementById("painel-mapa").clientWidth;
var canvasHeight = document.getElementById("painel-mapa").clientHeight;


canvasMapa.width = canvasWidth
canvasMapa.height = canvasHeight;
canvasMapa.style.background = "rgba(0,0,0,0.1)";
var ctxMapa = canvasMapa.getContext("2d");

const img = new Image();

var fileTag = document.getElementById("myMap");
fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {
var reader;

if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
    //preview.setAttribute('src', e.target.result);
    carregaImagem(e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
}
}  

carregaImagem();

function carregaImagem(imagem)
{
    if(imagem == null || imagem == undefined)
    {
        img.src = 'img/fundo/Grudd_Haug_Superior.png';
    }else{
        img.src = imagem;
    }
    
    img.onload = () => {
        ctxMapa.drawImage(img, 0, 0);
        /*for(let i = 0; i < canvasWidth; i+=50)
        {
            ctxMapa.beginPath();
            ctxMapa.lineTo(0, 50+i);
            ctxMapa.lineTo(canvasWidth, 50+i);
            ctxMapa.stroke();
        }
        
        for(let i = 0; i < canvasHeight; i+=50)
        {
            ctxMapa.beginPath();
            ctxMapa.lineTo(50+i, 0);
            ctxMapa.lineTo(50+i, canvasHeight);
            ctxMapa.stroke();
        } */
    };
}