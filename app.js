document.getElementById('name').addEventListener('blur',validName)
document.getElementById('zip').addEventListener('blur',validZip)
document.getElementById('email').addEventListener('blur',validEmail)
document.getElementById('phone').addEventListener('blur',validPhone)


function validName(){
    let name = document.getElementById('name');
    let re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(name.value)){    
        name.classList.add('is-invalid');
    }
    else{
        name.classList.remove('is-invalid');
    }
}

function validZip(){
    let zip = document.getElementById('zip');
    let re = /^([1-9]{1})([0-9]{5})$/;            //India type pin code 
    if(!re.test(zip.value)){    
        zip.classList.add('is-invalid');
    }
    else{
        zip.classList.remove('is-invalid');
    }    
}

function validEmail(){
    let email = document.getElementById('email');
    let re = /^([0-9a-zA-Z_\-\.]+)@([a-z0-9A-Z_\-\.]+)\.([A-Za-z]{2,5})$/;            //ashu02@gmail.com
    if(!re.test(email.value)){    
        email.classList.add('is-invalid');
    }
    else{
        email.classList.remove('is-invalid');
    }
}

function validPhone(){
    let phone = document.getElementById('phone');              //types of phone numbers
    let re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;           //8087572655  808 757 2655  808-757-2655  808.757.2655
    if(!re.test(phone.value)){    
        phone.classList.add('is-invalid');
    }
    else{
        phone.classList.remove('is-invalid');
    }
}