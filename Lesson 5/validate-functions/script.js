$(function() {

    function validateField(input) {
        let value = $(input).val();
        let fieldName = $(input).attr('data-fieldName');

        if(value.length < 1) {
            $('#error_messages').append(`<li>Enter your ${fieldName}</li>`);
        }
    }

    $('#oneForm').on('submit', function(e) {
        e.preventDefault();

        validateField(First)

        validateField('#firstName');
        validateField('#lastName');
    });
});