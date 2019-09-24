
var canvasMapa = document.getElementById("mapa");

var tamanhoMesa = document.getElementById('painel-mapa');
var canvasWidth = document.getElementById("mapa").clientWidth;

var canvasHeight = document.getElementById("mapa").clientHeight;

console.log(document.getElementById("mapa").clientHeight);
console.log(document.getElementById("mapa").clientWidth);


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

        controlMapa.width = "4600px";
        controlMapa.height = "4600px";

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


    /*-----------------------------------------------------------------------------------*/

    /* Código para desenhar no mapa */
 function insertTool(element, c)
 {
     element.style.background = c;
     element.style.border = "2px solid #000";
     element.style.width = "40px";
     element.style.height = "40px";
     element.style.float = "left";
     //document.body.appendChild(element);
     document.getElementById('marq').appendChild(element);
 }
 var fireColor = "red", iceColor = "blue", groundColor = "brown", eraseColor = false, activeColor = fireColor;
 var toolColor1 = document.createElement('div');
 var toolColor2 = document.createElement('div');
 var toolColor3 = document.createElement('div');
 var erase = document.createElement('div');
 var mousePressed = false;

 insertTool(toolColor1, fireColor);
 insertTool(toolColor2, iceColor);
 insertTool(toolColor3, groundColor);
 insertTool(erase, "write");

 toolColor1.addEventListener("click", function()
 {
     activeColor = fireColor;
 }, false);
 toolColor2.addEventListener("click", function()
 {
     activeColor = iceColor;
 }, false);
 toolColor3.addEventListener("click", function()
 {
     activeColor = groundColor;
 }, false);
 erase.addEventListener("click", function()
 {
     activeColor = true;
 }, false);

 function getMousePosition(eventoMouse){
     var stgData = canvasMapa.getBoundingClientRect();
     return{
         x: eventoMouse.clientX - stgData.left,
         y: eventoMouse.clientY - stgData.top,
     }
 }

 canvasMapa.addEventListener("mousemove", function(evt){
     var canvasXY = getMousePosition(evt);
     if(activeColor == true){
         clear(canvasXY.x, canvasXY.y, canvasWidth, canvasHeight)
     }else{
         if(mousePressed){
             draw(canvasXY.x, canvasXY.y);
         }
     }
 }, false);

 canvasMapa.addEventListener("mousedown", function(evt){
     var canvasXY = getMousePosition(evt);
     ctxMapa.beginPath();
     ctxMapa.moveTo(canvasXY.x, canvasXY.y);
     mousePressed = true;
 }, false);

 canvasMapa.addEventListener("mouseup", function(evt){
     mousePressed = false;
 }, false);

 function clear(x,y, canvasWidth, canvasHeight){
     console.log("X: "+x+", Y: "+y+", CW: "+canvasWidth+", CH: "+canvasHeight );
    ctxMapa.beginPath();
    ctxMapa.clearRect(x, y, 30, 30);

    ctxMapa.lineCap = "round";
    ctxMapa.closePath();
 }

 function draw(x, y){
    ctxMapa.lineTo(x,y);
    ctxMapa.strokeStyle = activeColor;
    ctxMapa.lineWidth = 10;
    ctxMapa.lineCap = "round";
    ctxMapa.stroke();
 }