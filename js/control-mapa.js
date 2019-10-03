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
        ctxImagemMapa.drawImage(img, 0, 0);
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