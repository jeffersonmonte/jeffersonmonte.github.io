
var canvasMapa = document.getElementById("mapa");
var tamanhoMesa = document.getElementById('painel-mapa');
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

function carregaImagem(imagem, coiso = true)
{
    if(imagem == null || imagem == undefined)
    {
        img.src = 'img/fundo/Grudd_Haug_Superior.png';
    }else{
        img.src = imagem;
    }

    var w = img.width;
    img.onload = () => {
        ctxMapa.drawImage(img, 0, 0);
        if(coiso){
            mudarTamanhoCanvas(img.width, img.height, imagem);
        }
        
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

function mudarTamanhoCanvas(width, height, imagem){
    var tamanhoMesa = document.getElementById('painel-mapa');

    if(width == null || width == undefined || height == null || height == undefined){
        tamanhoMesa.style.width = '4600px';
        tamanhoMesa.style.height = '2350px';

        canvasMapa.style.width = "4600px";
        canvasMapa.style.height = "2350px";
    }else{
        tamanhoMesa.style.width = width+"px";
        tamanhoMesa.style.height = height+"px";

        canvasMapa.width = tamanhoMesa.clientWidth;
        canvasMapa.height = tamanhoMesa.clientHeight;
    }
    carregaImagem(imagem, false);
}


    jQuery("div#painel-mapa").mousedown(function(e){
        jQuery("html, body").mousemove(function(i, v) {
            var h = jQuery(window).height();
            var y = e.clientY - h / 2;
            return v + y * 0.1;
        });
    });
