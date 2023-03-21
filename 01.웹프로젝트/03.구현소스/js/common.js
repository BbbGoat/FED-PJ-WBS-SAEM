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
        이벤트 : scroll
        기능: .fadeout 요소 스크롤에 따라 투명도 조절
    ********************************************/
    // 1. 대상수집
    const fadeOut = document.querySelector(".fadeout");
    let scrollTop = 0;

    fadeOut.style.opacity = 0;

    window.addEventListener("scroll", (e) => {
        scrollTop = document.documentElement.scrollTop;
        fadeOut.style.opacity = 0 + scrollTop / 700 ;
    });

    /********************************************* 
        함수명: scrollnav
        기능: scroll이벤트로 section livenewcj 박스
            위치 -값이 될때 최상단 네비게이션 CSS 전환
    *********************************************/
    // 1. 대상수집
    const nav = document.querySelector(".top");
    const secLivecj = document.querySelector(".livenewcj");
    const logoW = document.querySelector(".logo a:first-child");
    const logoB = document.querySelector(".logo a:last-child");
    // console.log(secLivecj);
    
    // 2. 스크롤 이벤트 설정
    window.addEventListener("scroll", () => {

        // 브라우저 top을 기준으로한, 전달변수의 위치값 나타내는 함수 retVal
        const retVal = (ele) => ele.getBoundingClientRect().top;
        let secTop = retVal(secLivecj);
        // console.log(secTop);

        if (secTop < 0) {
            // 로고 클래스 on
            nav.classList.add("on");
            // 로고 크기변환
            logoB.style.width = "42px";
            logoB.style.opacity = 1;
            logoW.style.width = "45px";
            logoW.style.opacity = 0;
        }
        else if (secTop > 0) {
            // 로고 클래스 on
            nav.classList.remove("on");
            // 로고 크기변환
            logoB.style.width = "100%";
            logoB.style.opacity = 0;
            logoW.style.width = "60px";
            logoW.style.opacity = 1;
        }
        
    }); //////////// scroll 이벤트 ///////////////

} ////////////////  loadFn 함수 //////////////////

window.addEventListener("DOMContentLoaded", loadFn);
