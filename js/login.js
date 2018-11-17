/**
 * Created by asus-pc on 2018/7/16.
 */
$(function(){
    $(".loginbtn").hover(function(){
        $(".choosebox").css("display","block").mouseleave(function(){
            $(".choosebox").css("display","none")
            });
    });

});