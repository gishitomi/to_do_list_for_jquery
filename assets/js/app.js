$(function() {

    $('.add-btn').click(function() {
        $('.lists').append('<li class="center">' + $('#add-area').val() + '</li>');
        // addボタンを押した時、デリートボタンも表示させる
        $('.none1').addClass('up1');
        $('.none2').addClass('up2');
    });
    $('.oneDelete').click(function() {
        $('.lists li:last').remove();
        // もしこれ以上liタグがなかった場合、デリートボタンも消す
        if (!$('.lists li').length) {
            $('.none1').removeClass('up1');
            $('.none2').removeClass('up2');
        }
    });
    $('.allDelete').click(function() {
        $('.lists').remove();
        $('.none1').removeClass('up1');
        $('.none2').removeClass('up2');
    });

});