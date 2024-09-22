document.getElementById('add-money-btn')
    .addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById("add-money-input").value;
    
    const addMoneyPin = document.getElementById('add-money-pin').value;

    console.log(addMoneyInput,addMoneyPin)

    if(addMoneyPin === '123'){
        console.log('add money to the account')

    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance)
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance) 

    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('wrong password');
    }




    

})