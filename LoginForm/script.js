var email = document.getElementById('mail');
var password = document.getElementById('psw');

function validate() {
    if(email.value === '') {
        document.getElementById('error-mail').innerHTML = 'Fill in email!'
        return false;
    } else {
        document.getElementById('error-mail').innerHTML = ''
    }
    if(password.value === '') {
        document.getElementById('error-password').innerHTML = 'Fill in password!'
        return false;
    } else {
        document.getElementById('error-password').innerHTML = ''
    }
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    if(!mailFormat.test(email.value)) {
        document.getElementById('invalid-mail').innerHTML = 'Invalid email!'
        return false;
    } else {
        document.getElementById('invalid-mail').innerHTML = ''
    }
    if(!passwordFormat.test(password.value)) {
        document.getElementById('invalid-password').innerHTML = 'Invalid password!'
        return false;
    } else {
        document.getElementById('invalid-password').innerHTML = ''
    }
    return true;
}

$('#myForm').on('submit', function(e) {

    e.preventDefault();
    validate();

    if(validate()){
        window.location.replace('welcomeUser.html');
    }
});


    

    

    