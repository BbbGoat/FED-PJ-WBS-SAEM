// Gnb 기능 - Gnb.js
/**************************************** 
    gnb 기능 구현 js
****************************************/
import $ from "jquery";

$(()=>{

    console.log("Gnb.js");
    
    // 대상선정
    const button = $(".top > button");
    const menu = $(".menu");

    // 클릭이벤트
    button.click(function(e){
        e.preventDefault();
        console.log("클릭확인!");
        // 클래스 추가/제거
        $(this).toggleClass("switch");

        // 확인변수
        let isB = $(this).is(".switch");
        // 조건문에 따라 menu에 클래스 open 넣기
        if (isB) {
            menu.addClass("open");
            $('html, body').css({'overflow': 'hidden', 'height': '100%'});
            // $('#element').on('scroll touchmove mousewheel', function(event) {
            // event.preventDefault();
            // event.stopPropagation();
            // return false;
            // });
            }
        else {
            menu.removeClass("open");
            $('html, body').css({'overflow': 'visible', 'height': 'auto'});
            // $('#element').off('scroll touchmove mousewheel');
        }
    });

}); /////////////// jQB ////////////////////