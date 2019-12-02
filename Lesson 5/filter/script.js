$(function() {
    $('ul > li').filter('#2').css('color', 'red');
    $('ul > li').filter('#3').remove();
    // $('ul > li').filter('#3').html('Changed');
    $('ul > li').filter(':even').css('background', 'yellow');

    let nameArray = ['Adrian', 'Rebecca', 'Gabriella'];
    console.log(nameArray);

});