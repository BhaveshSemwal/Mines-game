let ting=new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let totalMines = 0;
let profit=0;
let betAmount=0;
let mulFactor=0.2;
let totalAmount=0;
document.getElementById('go').addEventListener('click', () => {
    totalMines = document.getElementById('input').value;
    console.log(totalMines);
});
function disableAllButtons() {
    let allButtons = document.querySelectorAll('.button');
    allButtons.forEach((button) => {
        button.disabled = true;
    });
}
function gamePlay() {
    let mineBtn = document.querySelectorAll('.button');
    mineBtn.forEach((element) => {
        element.addEventListener('click', () => {
            if (element.innerHTML.trim() === "Mine") { // Compare with string "Mine"
                gameover.play();
                element.classList.add('mine');
                document.getElementById('displayText').innerHTML="Mine Detected!";
                disableAllButtons();
                profit=0;
                document.querySelector('.profitcontainer').innerHTML=`${profit}`
            } else {
                ting.play();
                profit=betAmount*mulFactor;
                element.classList.add('gem');
                mulFactor=mulFactor+0.2;
                document.querySelector('.profitcontainer').innerHTML=`${profit}`
            }
        });
    });
}

document.getElementById('bet').addEventListener('click',()=>{
    betAmount=document.getElementById('betAmount').value;
    console.log(betAmount);
})
document.getElementById('startBtn').addEventListener('click', () => {
    const button = document.querySelectorAll('.button');
    for (let i = 0; i < totalMines; i++) {
        let randomNo = Math.floor(Math.random() * 25);
        // button[randomNo].classList.add('mine');
        button[randomNo].innerHTML = "Mine";
        console.log(randomNo);
    }

    gamePlay();
});

document.querySelector('#widraw').addEventListener('click',()=>{
    mulFactor=mulFactor.toFixed(1);
    disableAllButtons();
    totalAmount=profit;
    WiningAmount=totalAmount-betAmount;
    if(WiningAmount>0){
        document.querySelector('.winning').innerHTML=`Winning Amount: ${profit.toFixed(2)}₹       ( ${mulFactor}X )`;
        document.querySelector('.winprofi').innerHTML=`profit: ${WiningAmount}₹ `;
    }
    else{
        losingAmount=betAmount-profit;
        document.querySelector('.winning').innerHTML=`You Lost : ${losingAmount.toFixed(2)}₹       ( ${mulFactor}X )`;
    }
})
