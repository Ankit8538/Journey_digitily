$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"#bts",function(){
        var moreLessButtom=$(".invisible-content").is(":visible")?'Read more':'Read Less';
        $(this).text(moreLessButtom);
        $(this).parent(".box").find(".invisible-content").toggle();
        $(this).parent(".box").find(".visible-content").toggle();
    });
});

$(document).ready(function(){
    $(".invisible-content1").hide();
    $(document).on('click',"#bts1",function(){
        var moreLessButtom=$(".invisible-content1").is(":visible")?'Read more':'Read Less';
        $(this).text(moreLessButtom);
        $(this).parent(".box1").find(".invisible-content1").toggle();
        $(this).parent(".box1").find(".visible-content1").toggle();
    });
});
