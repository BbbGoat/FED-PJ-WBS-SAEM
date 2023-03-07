// 서브페이지 브랜드 JS - brand.js

// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", linkFn);

function linkFn() {

    console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 :
    const gnb = document.querySelectorAll(".tab_brand ul li");
    // console.log(gnb);
    const logo = document.querySelector(".logo a");
    // console.log(logo)
    
    // 2. 클릭이벤트 설정
    for (let x of gnb) {
        x.onclick = (e) => {
            e.preventDefault();

            let atxt = x.innerText;
            console.log(atxt);

            // 링크 get방식 변환
            location.href = "brand.html?ban=" + encodeURIComponent(atxt);
            
        }; ///////// click ///////////
    } ///////// for문 //////////////////////
    
    logo.onclick = (e) => {
        e.preventDefault();
        location.href = "main_page.html";
    }; //////// click ////////////
    
} //////////////////// linkFn ///////////////////