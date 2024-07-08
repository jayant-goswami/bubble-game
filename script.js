var timer = 60;
var rn = 0;
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#yourscore").textContent = score;
}



function getnewhit(){
    rn = Math.floor(Math.random()*10);
document.querySelector("#newhit").textContent = rn;

}

function makebubble(){
    var clutter = "";
    for(var i = 1 ; i <= 168 ; i++){
        var number = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${number}</div>`;  
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = "<h1> Game Over </h1>"
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",
    function(data){
        var clickednumber = Number(data.target.textContent);
    if(clickednumber === rn){
        increaseScore();
        makebubble();
        getnewhit();
    }
    
    
    }
)

makebubble();
runtimer();
getnewhit();
