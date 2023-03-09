// 서브페이지 브랜드 JS - brand.js

// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

    // console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 :
    const lnb = document.querySelectorAll(".tab_brand ul li");
    const logo = document.querySelectorAll(".logo a");
    // console.log(logo)
    // logo -> 모바일, pc버전 a요소 2개
    const chgBg = document.querySelector(".intro");
    console.log(chgBg) 

    
    // 2-1. 브랜드/히스토리 페이지 연결
    lnb.forEach((ele,idx) => {
        ele.onclick = (e) => {
            chgBg.innerHTML = "";
            
            if (idx === 0) {
                location.href = "brand.html";
                // chgBg.innerHTML += `<img src="./images/images-brand/b_intro.jpg" alt="브랜드소개배너">`;
            } //////// if
            else if (idx === 1) {
                location.href = "history.html";
                // chgBg.innerHTML += `<img src="./images/images-brand/b_history.jpg" alt="히스토리배너">`;
            } //////// else if 

        }; /////// click ///////////
    }); /////////// forEach //////////////

    // 2-2. 로고 클릭시 메인페이지 이동
    for (let x of logo) {
        x.onclick = (e) => {
            e.preventDefault();
            location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////

    
} //////////////////// loadFn ///////////////////