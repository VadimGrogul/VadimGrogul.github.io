$(document).ready(function(){
    //вкладки
    $(".data-categories").not(":eq(1)").hide();
    
        $('.article-categories').click(function(){
            $('.article-categories').removeClass('active-category').eq($(this).index()).addClass("active-category");
            $('.data-categories').hide().eq($(this).index()).fadeIn();
        })

})