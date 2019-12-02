$(function() {

    $.get('sv-se.json', data => {
        console.log(data);
        $('#headline').html(data.welcome);
        $('registerButton').html(data.register);
    })


    $.ajax({
        method: 'GET',
        url: 'sv-se.json',
        dataType: 'json',
        statusCode: {
            200:function(res) {
                $('#headline').html(res.welcome);
                $('#registerButton').html(res.register);
            },
            404:function() {
                console.log(`Doesn't work`);
            } 
        }});
});