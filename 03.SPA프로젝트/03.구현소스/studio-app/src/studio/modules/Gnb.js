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
    const gnb = $(".gnb a");

    // 클릭 이벤트
    button.click(function(e){
        // 버튼 클릭시 최상단 이동
        window.scrollTo(0, 0);
        
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

    // PC버전 Gnb 클릭 이벤트
    gnb.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // gnb 메인 바로가기 버튼
    $(".logo").click(function(){
        gnb.removeClass("active");
    });

    // 푸터 위로가기 버튼
    $(".back-to-top").click(function(){
        window.scrollTo(0,0);
        $(this).css({cursor:"pointer"})
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