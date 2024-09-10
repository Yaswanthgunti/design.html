let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keydown", function () {
    if(started==false){
        console.log("game start")
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userseq=[]
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    

    gameFlash(randbtn);
}

function checkAns(idx){

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</br>  Please any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)

        reset();
    }
}

function btnpress (){
    let btn=this;
    userflash(btn)

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");

for(butn of allbtns){
    butn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}