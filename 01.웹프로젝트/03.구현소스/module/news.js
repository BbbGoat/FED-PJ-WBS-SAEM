// CJ now 페이지 모듈화 작업
import { newsData } from "./newsData.js";
console.log(newsData);

// 대상수집
const newsList = document.querySelectorAll(".news_text ul li");
const newsImg = document.querySelector(".news_img a");

// 0. CJNow 기본틀 셋팅
// 각 텍스트 배열 순서대로 삽입
// 이미지 배열 순서대로 삽입

/**************************************** 
    함수명: chgImg
    기능:
    - 마우스엔터이벤트
    - 마우스오버시 타겟박스 내부 이미지 변경
****************************************/

function chgImg() {
    // console.log("chgImg 로딩완료!");
    newsList.forEach((ele,idx) => {
        // console.log(ele,idx);

        
        // 마우스엔터 이벤트설정
        ele.onmouseenter = function() {
            event.preventDefault();
            // console.log(this,idx);

            // 이미지 변경
            // 변경할 주소 변수
            let src = "";
            // console.log(newsData);
            switch (idx) {
                case 0 : src = `<img src="${newsData.news1.imgData}" alt="${newsData.news1.altData}">`; break
                case 1 : src = `<img src="${newsData.news2.imgData}" alt="${newsData.news2.altData}">`; break
                case 2 : src = `<img src="${newsData.news3.imgData}" alt="${newsData.news3.altData}">`; break
                case 3 : src = `<img src="${newsData.news4.imgData}" alt="${newsData.news4.altData}">`; break
                case 4 : src = `<img src="${newsData.news5.imgData}" alt="${newsData.news5.altData}">`; break
            }

            // 클래스 on 초기화함수 호출
            initMenu();
            // 마우스엔터시 클래스 on 넣기
            this.classList.add("on");
            
            
            // 출력
            newsImg.innerHTML = src;
            
        }; //// mouseenter 이벤트 ////
        
    }); ////////// forEach ////////////
    
} /////////////// chgImg 함수 ////////////


// 3. 트리거 이벤트 발생시키기 -> 인터벌로 시간지나며 하나씩 슬라이드되게
// 첫 로드시 첫번째 영역 활성화되도록 오버이벤트 트리거 시켜놓기

// 최초호출!
chgImg();


/************************************** 
    메뉴 초기화 함수 : 처음상태로 돌림
**************************************/

function initMenu() { 
    
    // 각 li요소마다 클래스 remove 해주기
    newsList.forEach((ele) => {
        // 클래스 on 빼기
        ele.classList.remove("on");
        // console.log(ele)
    }); //////// forEach //////////
} /////////// initMenu함수 ///////////
    