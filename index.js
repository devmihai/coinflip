let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#toss-button");
let resetBtn = document.querySelector("#reset-button");
let header = document.getElementById("heads-counts")


flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
    }
    setTimeout(updateAdvice, 3000);
    disableButton();
});

function updateAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data=> 
        header.textContent = `${data.slip.advice}`)};


function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    header.textContent = "Do not take an app's advice too serious!";
    disableButton();
})
