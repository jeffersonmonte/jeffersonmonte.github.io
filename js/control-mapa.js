/*
var Draw = {
    obj : document.getElementById('control'),
    contexto : document.getElementById('control').getContext("2d"),
    _init:function(){
        Draw.obj.onmousemove = Draw._over;
        Draw.obj.onmousedown = Draw._ativa;
        Draw.obj.onmouseup = Draw._inativa;
        Draw.obj.onselectstart = function () { return false; };
    },
    _over:function(e){
        if(!Draw.ativo) return;
        Draw.contexto.beginPath();
        Draw.contexto.lineTo(Draw.x,Draw.y);
        Draw.contexto.lineTo(e.layerX, e.layerY);
        Draw.contexto.stroke();
        Draw.contexto.closePath();
        Draw.x = e.layerX;
        Draw.y = e.layerY;
    },
    _ativa:function(e){
        Draw.ativo = true;
        Draw.x = e.layerX;
        Draw.y = e.layerY;
    },
    _inativa:function(){
        Draw.ativo = false;
    }   
}
Draw._init();
*/
 /* Código para desenhar no mapa */
 /*
 function insertTool(element, c)
 {
     element.style.background = c;
     element.style.border = "2px solid #000";
     element.style.width = "40px";
     element.style.height = "40px";
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
     var stgData = controlMapa.getBoundingClientRect();
     return{
         x: eventoMouse.clientX - stgData.left,
         y: eventoMouse.clientY - stgData.top,
     }
 }

 controlMapa.addEventListener("mousemove", function(evt){
     var canvasXY = getMousePosition(evt);
     if(activeColor == true){
         clear(canvasXY.x, canvasXY.y, canvasWidth, canvasHeight)
     }else{
         if(mousePressed){
             draw(canvasXY.x, canvasXY.y);
         }
     }
 }, false);

 controlMapa.addEventListener("mousedown", function(evt){
     var canvasXY = getMousePosition(evt);
     ctxControl.beginPath();
     ctxControl.moveTo(canvasXY.x, canvasXY.y);
     mousePressed = true;
 }, false);

 controlMapa.addEventListener("mouseup", function(evt){
     mousePressed = false;
 }, false);

 function clear(x,y, canvasWidth, canvasHeight){
    ctxControl.beginPath();
    ctxControl.clearRect(x, y, canvasWidth, canvasHeight);
    ctxControl.lineWidth = 10;
    ctxControl.lineCap = "round";
    ctxControl.closePath();
 }

 function draw(x, y){
    ctxControl.lineTo(x,y);
    ctxControl.strokeStyle = activeColor;
    ctxControl.lineWidth = 10;
    ctxControl.lineCap = "round";
    ctxControl.stroke();
 }*/