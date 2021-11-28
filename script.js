const initialInput = document.querySelector("#initial-input");
const quantityInput = document.querySelector("#quantity-input");
const currentInput = document.querySelector("#current-input");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");

btn.addEventListener("click" , clickHandler);

function clickHandler(){
    let initial = Number(initialInput.value);
    let quantity = Number(quantityInput.value);
    let current = Number(currentInput.value);
    console.log(initial,quantity,current);

    calculateProfitLoss(initial,quantity,current);
}

function calculateProfitLoss(initial,quantity,current){
    if(initial > current){
        let loss = (initial-current)*quantity;
        let lossPercentage = (loss / initial) * 100;
        displayMessage(`Hey the loss is ${loss} and percentage is ${lossPercentage}%`);
    }
    else if(current > initial){
        let profit = (current - initial)*quantity;
        let profitPercentage = (profit/initial)*100;
        displayMessage(`Hey the profit is ${profit} and the percentage is ${profitPercentage}`);
    }
    else{
        displayMessage("No pain , no gain and no gain , no pain.");
    }
}

function displayMessage(msg){
    message.innerText = msg;
}