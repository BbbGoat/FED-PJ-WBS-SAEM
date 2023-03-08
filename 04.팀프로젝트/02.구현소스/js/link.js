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
            x[0].location.href = "brand.html?ban=" + encodeURIComponent(atxt);
            x[1].location.href = "history.html?ban=" + encodeURIComponent(atxt);

            
        }; ///////// click ///////////
    } ///////// for문 //////////////////////

    // 2-2. 로고 클릭시 메인페이지 이동
    for (let x of logo) {
        x.onclick = (e) => {
            e.preventDefault();
            location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////

    
} //////////////////// linkFn ///////////////////