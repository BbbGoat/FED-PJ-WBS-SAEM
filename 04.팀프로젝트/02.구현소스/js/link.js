// 서브페이지 브랜드 JS - brand.js

// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", linkFn);

function linkFn() {

    console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 :
    const lnb = document.querySelectorAll(".tab_brand ul li");
    const logo = document.querySelectorAll(".logo a");
    // logo -> 모바일, pc버전 a요소 2개
    // console.log(logo)
    
    // 2-1. lnb 클릭이벤트 설정
    for (let x of lnb) {
        x.onclick = (e) => {
            e.preventDefault();

            let atxt = x.innerText;
            console.log(atxt);

            // 링크 get방식 변환
            location.href = "brand.html?ban=" + encodeURIComponent(atxt);

            
        }; ///////// click ///////////
    } ///////// for문 //////////////////////
    tab.forEach((x, idx) => {
        x.onclick = () => {
            // 초기화함수
            resetToggle(idx);
            
            // 1. on 클래스 넣기 / 빼기
            x.classList.toggle("on");
            
            // 2. 이미지 변경
            const atxt = x.innerText;
            console.log(atxt);

            // 주소할당변수
            let chgurl;

            switch (atxt) {
                case "브랜드 소개" : chgurl = "url(images/brand_intro.jpg)"; break;
                case "히스토리" : chgurl = "url(images/brand_history.jpg)"; break;
            } /////// switch case ////////

            main.style.backgroundImage = chgurl;
            
        }; ///// click //////
    }); /////// for of /////////

    function resetToggle(seq = 1000) {
        tab.forEach((ele,idx) => {
            // 호출한 순번과 같으면 넘어가!
            // if (idx === seq) return;
            // console.log("li순번: ", idx);

            // 클래스 on 빼기
            ele.classList.remove("on");
          }); //////// forEach //////////
    } ///////////// resetToggle //////////

    // 2-2. 로고 클릭시 메인페이지 이동
    for (let x of logo) {
        x.onclick = (e) => {
            e.preventDefault();
            location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////

    
} //////////////////// linkFn ///////////////////