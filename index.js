const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const noOfAvailableNotes = [2000, 500, 100, 20, 10, 5, 1];
cashGiven.style.display = "none";

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    cashGiven.style.display = "block";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Do you wanna wash plates?");
        }
    }else{
        showMessage("Invalid Bill Amount");
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
