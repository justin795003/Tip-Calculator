let calcBtn = document.getElementById('calculatebtn');

function calcAmount(){
    let billAmount = document.getElementById('billAmount').value;
    let tipPercentage = document.getElementById('tipPercentage').value;
    totalTip = (billAmount * tipPercentage);
    showTip();
}


function showTip(){
    let displayTip = document.querySelector('.displayTip');
    displayTip.innerHTML = 'Tip Amount: $' +totalTip;
}

//Create Event Listener

calcBtn.addEventListener('click', calcAmount);