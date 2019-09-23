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