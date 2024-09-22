
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber = document.getElementById('cash-out-money-pin').value;

    console.log(cashOut,pinNumber);

    if(pinNumber === '1234'){
        console.log('you are successfully cash out')

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance)
        
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong information , plies try again')
    }


})