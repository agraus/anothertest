let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.strokeStyle = "maroon";
context.lineWidth = "4";
context.strokeRect(canvas.width/2 -60,200,80,200);


function init(size) {
    context.font = "20px SansSerif";
    context.fillText(size+'%',canvas.width/2+30,canvas.height/2);
    context.translate(0, canvas.height);
    context.scale(1, -1);
    context.fillStyle = "red";
    context.fillRect(canvas.width/2 -58,202,76,size*2);

}
init(80);