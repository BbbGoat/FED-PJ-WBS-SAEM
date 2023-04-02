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

    /************************************************ 
        함수명 : subOpen
        기능 : .main_lang > a 클릭시 .list_lang 박스 노출
                .btn_icon / .btn_icon_close 클래스의
                display 속성 변경
    ************************************************/
    function subOpen(){

        // 1. 대상수집
        // const mainLang = document.querySelector(".main_lang > a");
        // const btnIcon = document.querySelector(".btn_icon");
        // const btnIconClose = document.querySelector(".btn_icon_close");
        const ham = document.querySelector(".ham");
        const sub_close = document.querySelector(".sub_close");
        const nav_subpage = document.querySelector(".nav_subpage");
    
        // 2. 클릭 이벤트 설정
        // 상태 분류 넘버 변수
        ham.onclick = () => {
            event.preventDefault();
            console.log("햄")
            nav_subpage.style.transform = "translateX(0)"
        }
        sub_close.onclick = () => {
            event.preventDefault();
            console.log("형님")
            nav_subpage.style.transform = "translateX(100%)";
        }

    } /////////////// subOpen 함수 /////////////////////
            
    subOpen();

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
    const mnav = document.querySelector(".mtop");
    const secLivecj = document.querySelector(".livenewcj");
    const logoW = document.querySelector(".logo a:first-child");
    const logoB = document.querySelector(".logo a:last-child");
    // console.log(secLivecj);
    
    // 2. 스크롤 이벤트 설정
    window.addEventListener("scroll", () => {

        // 브라우저 top을 기준으로한, 전달변수의 위치값 나타내는 함수 retVal
        const retVal = (ele) => ele.getBoundingClientRect().top;
        let secTop = retVal(secLivecj);
        let mtop = retVal(mnav);
        // console.log(secTop);

        if (secTop < 0 || mtop < 0) {
            // 로고 클래스 on
            nav.classList.add("on");
            mnav.classList.add("on");
            // 로고 크기변환
            logoB.style.width = "42px";
            logoB.style.opacity = 1;
            logoW.style.width = "45px";
            logoW.style.opacity = 0;
        }
        else if (secTop > 0 || mtop > 0) {
            // 로고 클래스 on
            nav.classList.remove("on");
            mnav.classList.remove("on");
            // 로고 크기변환
            logoB.style.width = "100%";
            logoB.style.opacity = 0;
            logoW.style.width = "60px";
            logoW.style.opacity = 1;
        }
        
    }); //////////// scroll 이벤트 ///////////////


    /********************************************* 
        함수명: snsLink
        기능: SNS 이동 링크
    *********************************************/
    function snsLink() {
        const sns = document.querySelectorAll(".sns a");

        sns.forEach((ele) => {

            // console.log(ele.title);

            switch(ele.title) {
                case "페이스북" : golink = "https://www.facebook.com/enjoyCJ/"; break;
                case "유투브" : golink = "https://www.youtube.com/user/enjoyCJ"; break;
                case "뉴스룸" : golink = "https://cjnews.cj.net/"; break;
                case "네이버 포스트" : golink = "https://post.naver.com/channelcj/"; break;
                case "링크드인" : golink = "https://kr.linkedin.com/company/cj-corporation"; break;
            }
            ele.href = golink;

            
        }); ////// forEach //////////
    } /////////// snsLink 함수 ////////////////

    snsLink();
    
        
    /********************************************* 
        함수명: mFooter
        기능: btn_m_footer 클릭시 서브메뉴 height 조절
    *********************************************/

    function mFooter() {

        // 대상선정
        const showBtn = document.querySelectorAll(".btn_m_footer");
        const chgBtn = document.querySelectorAll(".btn_m_footer span");
        const submenu = document.querySelectorAll(".submenu");
        const dd = document.querySelector("dd");

        // 지우기
        chgBtn[0].style.display = "none";
        chgBtn[1].style.display = "none";
        
        showBtn.forEach((ele,idx) => {

            // 서브메뉴 열림/닫힘 상태 식별 변수
            let toggle = 0;
            
            // 클릭이벤트 설정
            ele.onclick = function() {
                // 서브메뉴 할당
                let showmenu = submenu[idx];
                
                // dd높이 * 전체dd갯수 = 각 smenu 순수 offsetHeight값
                let ddLength = this.parentElement.nextElementSibling.childElementCount;
                let ddHeight = dd.offsetHeight;
                
                // 닫혔을때
                if (toggle === 0 ) {
                    showmenu.style.height = ddHeight * ddLength + "px";
                    this.firstElementChild.style.backgroundPosition = "center bottom";
                    this.setAttribute("alt","하위메뉴 열기");
                    // console.log(this)
                    toggle = 1;
                }
                // 열렸을때
                else if (toggle === 1) {
                    showmenu.style.height = "0"
                    this.firstElementChild.style.backgroundPosition = "center top";
                    this.setAttribute("alt","하위메뉴 닫기");
                    toggle = 0;
                }
                
            }; //////// click //////////
        }); ////////// forEach /////////////////

    } ////////////// mFooter 함수 /////////////////

    // 호출!
    mFooter();

} ////////////////  loadFn 함수 //////////////////

window.addEventListener("DOMContentLoaded", loadFn);
