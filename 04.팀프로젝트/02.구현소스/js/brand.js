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
    const main = document.querySelector("#main");
    // console.log(tab);
    
    // 순번 변수
    let idx = 0;

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

    
    
}); //////////////////// 로드구역 //////////////////////