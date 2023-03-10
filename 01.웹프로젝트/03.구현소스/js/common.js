function loadFn() {
    console.log("로딩완료!");

    /************************************************ 
        함수명 : langBtn
        기능 : .main_lang > a 클릭시 .list_lang 박스 노출
                .btn_icon / .btn_icon_close 클래스의
                display 속성 변경
    ************************************************/
    function langBtn(){

        // 1. 대상수집
        const mainLang = document.querySelector(".main_lang > a");
        const listLang = document.querySelector(".list_lang");
        const btnIcon = document.querySelector(".btn_icon");
        const btnIconClose = document.querySelector(".btn_icon_close");
    
        // 2. 클릭 이벤트 설정
        // 상태 분류 넘버 변수
        let btnNum = 0;
        mainLang.onclick = () => {
            event.preventDefault();
            
            if (btnNum === 0) {
                // 열기
                listLang.style.display = "block";
                btnIcon.style.display = "none";
                btnIconClose.style.display = "inline-block"
                
                // 재할당
                btnNum = 1;
            }
            else if (btnNum === 1) {
                // 닫기
                listLang.style.display = "none";
                btnIcon.style.display = "inline-block";
                btnIconClose.style.display = "none";
                // 재할당
                btnNum = 0;
            }
        }; /////////// click 함수 ////////////

    } /////////////// langBtn 함수 /////////////////////

    // 함수호출
    langBtn();

    /********************************************
        함수명: scrollFade
        기능: .fadeout 요소 스크롤에 따라 투명도 조절
    ********************************************/
    // 1. 대상수집
    const fadeOut = document.querySelector(".fadeout");
    let scrollTop = 0;

    fadeOut.style.opacity = 0;

    window.addEventListener("scroll", (e) => {
        scrollTop = document.documentElement.scrollTop;
        fadeOut.style.opacity = 0 + scrollTop / 1000 ;
    });


    
} ////////////////  loadFn 함수 //////////////////

window.addEventListener("DOMContentLoaded", loadFn);
