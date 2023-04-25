// 웹&앱 PJ 메인페이지 JS -main.js

window.addEventListener("DOMContentLoaded",()=>{


    console.log("로딩완료!");
    
    
    /********************************************** 
        [ 터치 배너 기능구현하기 ]
        1. 원리 : 제이쿼리 UI를 이용하여 x축으로만
        드래그가 되도록 설정 후 위치값을 체크하여
        드래그가 끝난 시점에 자동 위치이동 애니메이션
        처리해준다!
    
        2. 대상 : .slide
    
        3. 기준
        (1) 왼쪽방향이동 : 기준값(-100%) 보다 -10% 작은경우(-110%)
        (2) 오른쪽방향이동 : 기준값(-100%) 보다 10% 큰경우(-90%)
        (3) 제자리이동 : 양쪽기준값 사이일때(-110% ~ -90%)
    
        4. 구현시 주의사항
        -> %단위는 모두 px단위로 변환하여 구현한다!
        -> 배너크기가 윈도우가로크기와 같다! 이것을 활용함!
        
    **********************************************/
    // 슬라이드 대상수집
    const slide = $(".vidslide");
    
    // 드래그설정
    slide.draggable({
        axis: "x" // x축고정
    }); ///// 드래그설정 /////

    // 윈도우크기 리턴함수
    const retWin = () => {
        return $(window).width();
    }
    // 윈도우 가로크기 : left 기준위치 px변환!
    let winW = retWin();
    // 리사이즈시 윈도우크기 업데이트
    $(window).resize(()=>{
        winW = retWin();
        // console.log(winW)
    });

    // 광드래그 방지 커버
    const cover = $(".cover");

    // 드래그 종료후 발생하는 이벤트 함수
    slide.on("dragstop",function(){
        console.log("드래그멈춤");

        // 광드래그 방지 커버 보이기
        cover.show();

        // 슬라이드 left위치값
        let sleft = $(this).offset().left;
        console.log(sleft);

        // 분기점 : -110%보다 작을때
        if (sleft < -winW*1.1) {
            slide.animate({
                left: -winW*2 + "px"
            },1000,"easeOutQuint",()=>{
                // 이동후 첫번째 li 이동
                slide.append(slide.find("li").first()).css({left:"-100%"});
                // 커버제거하기
                cover.hide();
            }); // animate

            // 블릿 변경함수 호출!
            // 영상 재생함수 호출!
            
        } ///// if : 왼쪽이동 /////
        
        // 분기점 : -90%보다 클때
        else if (sleft > -winW*0.9) {
            slide.animate({
                left: "0px",
            },1000,"easeOutQuint",()=>{
                // 이동후 맨뒤 li 맨앞으로 이동하기
                slide.prepend(slide.find("li").last()).css({left:"-100%"});
                // 커버제거하기
                cover.hide();
            });
            
            // 블릿 변경함수 호출!
            // 영상 재생함수 호출!

        } ///// else if : 오른쪽이동 /////
        
        // 분기점 : 제자리일경우
        else {
            slide.animate({
                left: -winW + "px"
            }, 200, "easeOutQuint", ()=>{
                cover.hide();
            });
        } ///// else : 제자리 /////
        
    }); ////////////////// slide dragstop 이벤트 //////////////////




    


}); ///////////////////// 로드구역 ///////////////////////