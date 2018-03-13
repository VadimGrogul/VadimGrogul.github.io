$(document).ready(function(){
    $(function(){
    $(".data-categories").not(":eq(1)").hide();

    $('.article-categories').click(function(){
        $('.article-categories').removeClass('active-category').eq($(this).index()).addClass("active-category");



       var qwe = $(this).index();
       console.log(qwe);
       
       $('.data-categories').hide().eq($(this).index()).fadeIn();
    })
})
})


