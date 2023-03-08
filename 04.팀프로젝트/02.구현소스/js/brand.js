// 서브페이지 브랜드 JS - brand.js

let pm = location.href;

pm = pm.split("?")[1].split("=")[1];
// pm값 특수문자 복원하기
pm = decodeURIComponent(pm);
console.log("받아온 링크:", pm);

// 로드구역 ////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료");

    // 1. 링크 대상 선정 :
    const gnb = document.querySelectorAll(".tab_brand ul li");
    // console.log(gnb);
    const logo = document.querySelector(".logo a");
    // console.log(logo)
    const chgimg = document.querySelector(".intro > img")
    console.log(chgimg);

    // if (pm === "히스토리") {
    //     chgimg.style.backgroundImage = "url(../images/brand_intro.jpg)";
    // }

}); //////////////////// 로드구역 //////////////////////