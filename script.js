const initialInput = document.querySelector("#initial-input");
const quantityInput = document.querySelector("#quantity-input");
const currentInput = document.querySelector("#current-input");
const btn = document.querySelector("#btn");
const message = document.querySelector(".message");

btn.addEventListener("click" , clickHandler);

function clickHandler(){
    let initial = Number(initialInput.value);
    let quantity = Number(quantityInput.value);
    let current = Number(currentInput.value);
    console.log(initial,quantity,current);

    calculateProfitLoss(initial,quantity,current);
}

function calculateProfitLoss(initial,quantity,current){
    if(initial === 0 || quantity === 0 || current === 0){
        message.innerText = "Please fill the fields correctly.";
    }
    else if(initial < 0 || quantity < 0 || current < 0){
        message.innerText = "Please enter valid amounts";
    }
    else{
        if(initial > current){
            let loss = ((initial-current)*quantity).toFixed(2);
            let lossPercentage = ((loss / initial) * 100).toFixed(2);
            // message.classList.add("loss");
            displayMessage(`Hey the loss is ${loss} and percentage is ${lossPercentage}%` , "loss");
        }
        else if(current > initial){
            let profit = ((current - initial)*quantity).toFixed(2);
            let profitPercentage = ((profit/initial)*100).toFixed(2);
            // message.classList.add("profit");
            displayMessage(`Hey the profit is ${profit} and the percentage is ${profitPercentage}%` , "profit");
        }
        else{
            // message.classList.add("neutral");
            displayMessage("No pain , no gain and no gain , no pain." , "neutral");
        }
    }
    
}

function displayMessage(msg , className){
    message.innerHTML = `<p class="${"message " + className}">${msg}</p>`;
}