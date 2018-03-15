$(document).ready(function(){
<<<<<<< HEAD
        $(".data-categories").not(":eq(1)").hide();
    
        $('.article-categories').click(function(){
            $('.article-categories').removeClass('active-category').eq($(this).index()).addClass("active-category");
            $('.data-categories').hide().eq($(this).index()).fadeIn();

        //Скрываем - расскрываем меню

        $('.button-mob-menu').click(function(){
            $('.adaptive-menu').animate({"right" : "0"}, 200);
            setTimeout(showButton, 1000);
        })

        $('.button-close-menu').click(function(){
            $('.adaptive-menu').animate({"right" : "-370px"}, 200);
            setTimeout(hideButton, 1000);
        })

        function showButton(){
            $('.button-close-menu').animate({"left": "30px"}, 200);
        }

        function hideButton(){
            $('.button-close-menu').animate({"left": "-60px"}, 200);
        }
=======
    $(function(){
    $(".data-categories").not(":eq(1)").hide();

    $('.article-categories').click(function(){
        $('.article-categories').removeClass('active-category').eq($(this).index()).addClass("active-category");



       var qwe = $(this).index();
       console.log(qwe);
       
       $('.data-categories').hide().eq($(this).index()).fadeIn();
>>>>>>> bab19293663a65121c50679dd46703169aa6498a
    })
})
})


