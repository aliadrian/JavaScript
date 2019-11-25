$(function() {

    $('#regForm').submit((e) => {
        e.preventDefault();
        // console.log(e);

        if (!(e.currentTarget[4].checked)) {
            alert('You must accept the terms of condition!');
            return false;
        }

        // Option 1
        let firstName = $('firstName').val();
        let lastName = $('lastName').val();

        // Option 2
        let adress = e.currentTarget[2].value;
        
        // Option 3
        for (item of currentTarget) {
            user;
        };

        // Option 4
        let user = {
            firstName: firstName,
            lastName: lastName,
            adress: adress,
            role: e.currentTarget[3].value()
        }
    });

    // console.log(window);
});