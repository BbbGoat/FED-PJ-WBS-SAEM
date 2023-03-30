// CJ now 페이지 모듈화 작업
import { newsData } from "./setData.js";

// 뉴스 데스크탑 대상수집
const newsList = document.querySelectorAll(".news_text ul li");
const newsImg = document.querySelector(".news_img a");
// 뉴스 모바일 대상수집
const mobileList = document.querySelectorAll(".news_text2 ul li");
const mobileImg = document.querySelectorAll(".set");


/**************************************** 
    함수명: chgNews
    기능:
    - 마우스엔터이벤트 사용
    - 마우스오버시 타겟박스 내부 이미지 변경
****************************************/
function chgNews() {
    
    // 텍스트 세팅
    setNewsTxt(newsList);
    setNewsTxt(mobileList);
    
    newsList.forEach((ele,idx) => {

        // 2. 데스크탑 이미지 세팅
        // 마우스엔터 이벤트
        let imgData = newsData["news"+idx]["imgData"];
        let altData = newsData["news"+idx]["altData"];
        ele.onmouseenter = function() {
            
            event.preventDefault();

            // 이미지 출력
            newsImg.innerHTML = `<img src="${imgData}" alt="${altData}">`;

            // 3. 마우스 엔터시 클래스 on 넣기/빼기
            // 클래스 on 초기화함수 호출
            initMenu();
            this.classList.add("on");
            
        }; //// mouseenter 이벤트 //// 
    }); ////////// forEach ////////////
    
    mobileImg.forEach((ele,idx) => {
        let imgData = newsData["news"+idx]["imgData"];
        let altData = newsData["news"+idx]["altData"];
        ele.innerHTML = `<img src="${imgData}" alt="${altData}">`;
    });
    
} /////////////// chgNews 함수 ////////////

/************************************** 
    함수명: setNewTxt
    기능: cjnow 텍스트란 배열값으로 자동세팅
**************************************/

function setNewsTxt(obj) {
    obj.forEach((ele,idx) => {
        const txtDate = newsData["news"+idx]["txtData"];
        // 1. 데스크탑 텍스트 세팅
        ele.innerHTML = `<a href="#">${txtDate}</a>`;
    });
} ////////// setNewsTxt 함수 /////////////



/************************************** 
    함수명: initMenu
    클래스 초기화 함수 - 처음상태로 돌림
**************************************/

function initMenu() { 
    // 각 li요소마다 클래스 remove 해주기
    newsList.forEach((ele) => {
        // 클래스 on 빼기
        ele.classList.remove("on");
        // console.log(ele)
    }); //////// forEach //////////
} /////////// initMenu함수 ///////////
    

// 함수 최초호출!
chgNews();
