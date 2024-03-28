let start = false;
let level = 0;
let box = ["red","yellow","green","blue"];
let h3 = document.querySelector("h3");

let gameSeq = [];
let userSeq = [];


document.addEventListener("click",()=>{
    if(start == false){
        start = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    randBtn();
}

function randBtn(){
    let random = Math.floor((Math.random())*4);
    let randButton = box[random];
    gameSeq.push(randButton);
    let flashButton = document.querySelector(`.${randButton}`);
    flashBtn(flashButton);
}

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}

function userPress(){
    let btn = this;
    flashBtn(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkBtn(userSeq.length - 1);
}

function checkBtn(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,500);
        }
        
    }
    else{
        h3.innerText = "Game Over click any where to start again..."
        setTimeout(reset,1000);
    }
    
}

let boxes = document.querySelectorAll(".boxes");
for(btn of boxes){
    btn.addEventListener("click",userPress);
}

function reset(){
    start= false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}