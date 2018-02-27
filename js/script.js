$(function(){
    $('.article-categories').click(function(){
        $('.article-categories').removeClass('active-category');
        $(this).addClass('active-category');

        var qwe = $('.article-categories').eq(this);
       console.log(qwe);
    })
})




