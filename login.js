document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    

    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '018' && pinNumber === '123'){
        // console.log('you are login')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong information')
    }

})