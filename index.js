const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const returnBalance = document.querySelector('#return');

const noOfAvailableNotes = [2000, 500, 100, 20, 10, 5, 1];
hideMessage();

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    console.log(~~billAmount.value + ~~cashGiven.value);
    hideMessage();
    if(~~billAmount.value > 0){
        if(~~cashGiven.value > ~~billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            returnBalance.innerText = 'Rs. '+amountToBeReturned;
            calculateChange(amountToBeReturned);
        }else if(~~cashGiven.value === ~~billAmount.value){
            showMessage("No change require to be given");
        }else{
            showMessage("Do you wanna wash plates?");
        }
    }else{
        showMessage("Cash given should be greater than zero!");
    }
});

function calculateChange(amount){
    for(let i=0;i<noOfAvailableNotes.length;i++){
        const numberOfNotes = Math.trunc(amount/noOfAvailableNotes[i]);
        amount %= noOfAvailableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}
