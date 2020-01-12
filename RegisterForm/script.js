let userName = document.getElementById('name');
let password = document.getElementById('psw');
let name = document.getElementById('fill-name');
let special = document.getElementById('no-special-characters')
let psw = document.getElementById('fill-password');
let invalidPsw = document.getElementById('invalid-password');
let age = document.getElementById('select-age');
let bio = document.getElementById('fill-biography');
let select = document.getElementById('select-job');
let checkbox = document.getElementById('select-checkbox');

function validate() {
    
    if(userName.value === '') {
        name.innerHTML = 'Fill in name!';
        return false;
    } else {
        name.innerHTML = '';
    }

    if(password.value === '') {
        psw.innerHTML = 'Fill password';
        return false;
    } else {
        psw.innerHTML = '';
    }
    
    let userNameFormat = /^[0-9a-zA-Z_.-]/;
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    if(!userNameFormat.test(userName.value)) {
        special.innerHTML = 'No special characters allowed!'
        return false;
    } else {
        special.innerHTML = '';
    }

    if(!passwordFormat.test(password.value)) {
        invalidPsw.innerHTML = 'Invalid password!';
        return false;
    } else {
        invalidPsw.innerHTML = '';
    }

    // if(under18 = checkRadio(user_age)) {
    //     alert(`You selected ${under18}`)
    //     return true;
    // } else {
    //     alert('Error: No value was selected');
    //     return false;
    // }

    var over18 = document.getElementById('over_18').checked;
    var under18 = document.getElementById('under_18').checked;

    if((under18 == '')&&(over18 == '')) {
        age.innerHTML = 'Select your age!'
        return false;
    } else {
        age.innerHTML = '';
    }

    var biography = document.getElementById('biographyText');

    if($.trim(biography.value.length) < 50) {
        bio.innerHTML = 'Fill you biography with at least 50 characters';
        return false;
    } else {
        bio.innerHTML = '';
    }

    let developerJob = document.getElementById('job').value;

    if(developerJob == 'select') {
        select.innerHTML = 'Select a job!';
        return false;
    } else {
        select.innerHTML = '';
    }

    if(vaildateChecks() == false) {
        checkbox.innerHTML = 'Select checkbox!'
        return false;
    } else {
        checkbox.innerHTML = '';
    }

    return true;
}

function vaildateChecks() {
    var checks = document.getElementsByName('user_interest');
    var checkCount = 0;
    for(var i = 0; i < checks.length; i++) {
        if(checks[i].checked) {
            checkCount++;
        }
    }
    if (checkCount < 1) {
        return false;
    }
    return true;
}

$('#myForm').on('submit', function(e) {
    //förhindra att den skickar datat och laddar om sidan

    e.preventDefault();
    validate();

    if(validate()){
        window.location.replace('welcomeUser.html');
    }
});


// function checkRadio() 
// {
//     for(var i = 0; i < user_age.length; i++) {
//         if (user_age[i].checked) return user_age[i].value;
//     }
//     return false;
// }

// function display() {
//     var checkRadio = document.querySelector('input[name="user_age"]:checked');

//     if(checkRadio != null) {
//         alert(`${checkRadio.value} button checked`);
//         return true;
//     }
//     else {
//         alert('You must select your age');
//         return false;
//     }
// }