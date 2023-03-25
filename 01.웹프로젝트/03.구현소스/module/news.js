// CJ now 페이지 모듈화 작업
import { newsData } from "./newsData.js";
console.log(newsData);

// 대상수집
const newsList = document.querySelectorAll(".news_text ul li");

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
            console.log(this,idx);
            // 이미지 변경
            switch (idx) {
                case 0 : imgsrc = "a"; break
                case 1 : imgsrc = "b"; break
                case 2 : imgsrc = "c"; break
                case 3 : imgsrc = "d"; break
            }
            
        }; //// mouseenter 이벤트 ////
        
    }); ////////// forEach ////////////
    
} /////////////// chgImg 함수 ////////////

// 3. 트리거 이벤트 발생시키기 -> 인터벌로 시간지나며 하나씩 슬라이드되게
// 첫 로드시 첫번째 영역 활성화되도록 오버이벤트 트리거 시켜놓기

// 최초호출!
chgImg();
