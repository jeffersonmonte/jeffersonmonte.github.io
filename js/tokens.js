const $ = document.querySelector.bind(document);

const previewImg = $('.preview-img');
const fileChooser = $('.file-chooser');
const fileButton = $('.file-button');
fileButton.onclick = () => fileChooser.click();
var urlImagem;
fileChooser.onchange = e => {
    const fileToUpload = e.target.files.item(0);
    const reader = new FileReader();
    reader.onload = e => previewImg.src = e.target.result;
    reader.readAsDataURL(fileToUpload);
    urlImagem =  e.target.result;
};

function criarNPC()
{
    debugger;
    var nomeNPC = document.getElementById('nomeNPC').value;
    var tamanhoNPC = document.getElementById('tamanhoNPC').value;
    var qtdNPC = document.getElementById('qtdNPC').value;
    
    for(var i = 0; i<qtdNPC; i++)
    {
        var npc = new NPC(tamanhoNPC, previewImg.currentSrc, nomeNPC);  
    }
};

var NPC = function(tamanho, imagem, nome)
{
    this.tamanho = tamanho;
    var mousePosition;
    var offset = [0,0];
    var div;
    var isDown = false;

    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "80px";
    if(tamanho == "medio")
    {
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.backgroundSize = "50px 50px";
    }else if(tamanho == "grande")
    {
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.backgroundSize = "100px 100px";
    }else if(tamanho = "gigante")
    {
        div.style.width = "150px";
        div.style.height = "150px";
        div.style.backgroundSize = "150px 150px";
    }else if(tamanho = "colossal")
    {
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundSize = "200px 200px";
    }
    
    div.style.backgroundImage = "url('"+imagem+"')";
    div.style.backgroundSize = ""+div.style.width+"px"+ div.style.height+"px";
    div.style.color = "blue";

    document.querySelector("#painel-mapa").appendChild(div);

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);
    
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
        
                x : event.clientX,
                y : event.clientY
        
            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

}