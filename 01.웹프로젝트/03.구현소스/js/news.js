// CJ now 페이지 모듈화 작업
import { newsData, csvData } from "./newsData.js";
// console.log(newsData);

// 데스크탑 대상수집
const newsList = document.querySelectorAll(".news_text ul li");
const newsImg = document.querySelector(".news_img a");
// 모바일 수집
// const newsListM = document.querySelectorAll("#mob .news_text ul li");
// const mobileImg = document.querySelectorAll(".set");

/**************************************** 
    함수명: chgNews
    기능:
    - 마우스엔터이벤트
    - 마우스오버시 타겟박스 내부 이미지 변경
****************************************/
function chgNews() {
    
    newsList.forEach((ele,idx) => {
        const txtDate = newsData["news"+idx]["txtData"];
        const imgData = newsData["news"+idx]["imgData"];
        const altData = newsData["news"+idx]["altData"];
        
        // 1. 데스크탑 텍스트 셋팅
        ele.innerHTML = `<a href="#">${txtDate}</a>`;

        // 2. 데스크탑 이미지 셋팅
        // 마우스엔터 이벤트
        ele.onmouseenter = function() {
            event.preventDefault();

            // 변경할 이미지 주소 변수
            // 마우스엔터시 이미지 변경
            let src = `<img src="${imgData}" alt="${altData}">`

            // 이미지 출력
            newsImg.innerHTML = src;

            // 3. 마우스 엔터시 클래스 on 넣기/빼기
            // 클래스 on 초기화함수 호출
            initMenu();
            this.classList.add("on");
            
        }; //// mouseenter 이벤트 ////
        
    }); ////////// forEach ////////////


    
    // 1. 모바일버전 텍스트 셋팅
    // 클릭이벤트 클래스 on 막기
    
    for (let x of newsListM) {
        x.onclick = () => {
            initMenu();
        };
    }
    
    // 2. 모바일버전 이미지 셋팅
    setImg(mobileImg);
    
    
} /////////////// chgNews 함수 ////////////

function setText(obj) {
    // 모바일버전 텍스트 셋팅
    obj.forEach((ele,idx)=>{
        // 변경할 텍스트 변수
        let txt = "";
    //     switch (idx) {
    //        case 0 : txt = `<a href="#">${newsData.news1.txtData}</a>`; break;
    //        case 1 : txt = `<a href="#">${newsData.news2.txtData}</a>`; break;
    //        case 2 : txt = `<a href="#">${newsData.news3.txtData}</a>`; break;
    //        case 3 : txt = `<a href="#">${newsData.news4.txtData}</a>`; break;
    //        case 4 : txt = `<a href="#">${newsData.news5.txtData}</a>`; break;
    //    }        
       
       // 텍스트 출력
       ele.innerHTML = txt;

   });
} /////////////// setText 함수 //////////////////

function setImg(obj) {
    obj.forEach((ele,idx)=>{
        
        // 변경할 이미지 주소 변수
        let src = "";

        // 마우스엔터시 이미지 변경
        // switch (idx) {
        //     case 0 : src = `<img src="${newsData.news1.imgData}" alt="${newsData.news1.altData}">`; break;
        //     case 1 : src = `<img src="${newsData.news2.imgData}" alt="${newsData.news2.altData}">`; break;
        //     case 2 : src = `<img src="${newsData.news3.imgData}" alt="${newsData.news3.altData}">`; break;
        //     case 3 : src = `<img src="${newsData.news4.imgData}" alt="${newsData.news4.altData}">`; break;
        //     case 4 : src = `<img src="${newsData.news5.imgData}" alt="${newsData.news5.altData}">`; break;
        // }
    
        // 이미지 출력
        ele.innerHTML = src;
    });
}

// 함수 최초호출!
chgNews();



/************************************** 
 클래스 초기화 함수 : 처음상태로 돌림
 **************************************/

function initMenu() { 
    // 각 li요소마다 클래스 remove 해주기
    newsList.forEach((ele) => {
        // 클래스 on 빼기
        ele.classList.remove("on");
        // console.log(ele)
    }); //////// forEach //////////
} /////////// initMenu함수 ///////////
    

/**************************************** 
    함수명: chgCsv
    기능: 이미지, 텍스트 배열대로 할당
****************************************/

// 대상수집
const slide = document.querySelector("#slide ul");


function chgCsv() {
    
    // console.log(csv1["imgData"]);
    // console.log(Object.keys(csvData).length)
    let maxlength = Object.keys(csvData).length;
    
    for (let i = 0; i < maxlength; i++) {
        let num = i+1;
        let csv = csvData["csv"+num];
        slide.innerHTML += `
            <li>
                <img src="${csv.imgData}" alt="${csv.altData}">
                <h3>${csv["mt"+num]}</h3>
                <p>${csv["st"+num]}</p>
            </li>
        `;
    }
}

// 최초호출
chgCsv();