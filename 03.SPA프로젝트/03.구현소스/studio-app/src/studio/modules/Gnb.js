// Gnb 기능 - Gnb.js
/**************************************** 
    gnb 기능 구현 js
****************************************/
import $ from "jquery";

$(()=>{

    // 대상선정
    const button = $(".top > button");
    const menu = $(".menu");
    const menu_second = $(".menu_secondary li");

    // 클릭 이벤트
    button.click(function(e){
        e.preventDefault();
        // 클래스 추가/제거
        $(this).toggleClass("switch");

        // 확인변수
        let isB = $(this).is(".switch");
        // 조건문에 따라 menu에 클래스 open 넣기
        if (isB) {
            // 클래스추가
            menu.addClass("open");
            // 스크롤고정
            $('html, body').css({'overflow-y': 'hidden', 'height': '100%'});
            // 외부링크 등장
            menu_second.each((idx,ele)=>{
                setTimeout(()=>{
                    setTimeout(function(e) {
                        $(ele).animate({
                            opacity:1
                        },200)
                    }, 50*idx);
                },400)
            }); ///////// each ///////////

            }
        else {
            // 클래스제거
            menu.removeClass("open");
            // 스크롤고정 해제
            $('html, body').css({'overflow-y': 'auto', 'height': 'auto'});
            // 외부링크 사라짐
            menu_second.each((idx,ele)=>{
                $(ele).animate({
                    opacity:0
                },0)
            }); ///////// each ///////////
        }
    });
    
    // 리사이즈 이벤트
    let maxWidth;
    window.onresize = function(e){
        maxWidth = window.innerWidth;
        if (maxWidth > 480) {
            let isB = button.is(".switch");
            if(isB) {
                button.trigger("click");
            }
        }
    }

}); /////////////// jQB ////////////////////