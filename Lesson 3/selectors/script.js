$(document).ready(function() {

});

$(function() {

    $("");
    // $('#btnClick1').click(function(){
    //     console.log('click');
    // })

    // $('#btnClick1').click(() => {
    //     console.log('click');
    // })

    // $('#btnClick1').click(() => console.log('click'));

    // let text = 'click';
    // $('#btnClick1').click(() => console.log(text));

    /*
    $('#btnClick1').click(() => {
        // $('*').hide();
        // $('#content').toggle();
        $(this).hide();
    });
    */

    $('p').click(function() {
        // $('*').hide();
        // $('#content').toggle();
        $(this).css('cursor', 'pointer');
        $(this).hide();
    });

});