let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let timestamp = Date.now();
let delay = 0;

function Queue(){
    this.elements = [];
}
Queue.prototype.push = function (element) {
    this.elements.unshift(element);
}
Queue.prototype.pop = function() {
    return this.elements.pop();
}
Queue.prototype.get_size = function() {
   return  this.elements.length;
}
function init(){
    context.strokeStyle = "maroon";
    context.lineWidth = "4";
    context.strokeRect(canvas.width/2 -60,200,80,204);
}
function update_rectangle(size,delay) {
    timestamp= Date.now();
    context.save();
    context.font = "20px SansSerif";
    context.clearRect(canvas.width/2+30,canvas.height/2-30,50,50);
    context.clearRect(canvas.width/2-60,canvas.height-80,100,50);
    context.fillText(size+'%',canvas.width/2+30,canvas.height/2);
    context.fillText('Queue: '+q.get_size(),canvas.width/2-60,canvas.height-50);
    context.translate(0, canvas.height);
    context.scale(1, -1);
    context.clearRect(canvas.width/2 -58,198,76,200);
    context.fillStyle = "red";
    context.fillRect(canvas.width/2 -58,198,76,size*2);
    context.restore();
    setTimeout(function(){update_rectangle},delay);
}
function getData(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
            setTimeout(function(){getData(callback)},2000);
        }

    };
    xhttp.open('GET', '/get_data.php',true);
    xhttp.send();
}


init();
let q = new Queue();
getData(function(response){
    q.push(response);
    if(q.get_size()>0 && (Date.now() - timestamp)>=delay){
        let element = q.pop();
        delay = element.delay;
        update_rectangle(element.value,element.delay);
    }
});

