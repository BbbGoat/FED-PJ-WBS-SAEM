// 서브페이지 브랜드 JS - brand.js


// 로드구역 ////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료");

    /********************************** 
        tab_brand 클릭이벤트
        클래스 "on" 적용
        각 항목에 맞게 이미지 변경
    **********************************/
    // 대상선정
    const tab = document.querySelectorAll(".tab_brand ul > li");
    // console.log(tab);
    
    for (let x of tab) {
        x.onclick = () => {
            console.log(x);
            
        }; ///// click //////
    } /////// for of /////////
    
}); //////////////////// 로드구역 //////////////////////