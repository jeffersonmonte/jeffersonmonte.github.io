var stageColor = "rgba(255,255,255,1)";
var stage = document.createElement('canvas');
stage.width = 300;
stage.height = 300;
stage.style.background = stageColor;
stage.style.border = "2px solid";
document.body.appendChild(stage);

function insertTool(element, c){
    element.style.background = c;
    element.style.border = "2px solid #000";
    element.style.width = "40px";
    element.style.height = "40px";
    element.style.cssFloat = "right";
    document.body.appendChild(element);
}

var color1 = "red";
var color2 = "blue";
var activeColor = color1;
var toolColor1 = document.createElement('div');
var toolColor2 = document.createElement('div');
var erase = document.createElement('div'); 

insertTool(toolColor1, color1);
insertTool(toolColor2, color2);
insertTool(erase, "write");

toolColor1.addEventListener("click", function(){
    activeColor = color1;
    console.log(activeColor);
}, false);

toolColor2.addEventListener("click", function(){
    activeColor = color2;
    console.log(activeColor);
}, false);

erase.addEventListener("click", function(){
    activeColor = stageColor;
    console.log(activeColor);
}, false);