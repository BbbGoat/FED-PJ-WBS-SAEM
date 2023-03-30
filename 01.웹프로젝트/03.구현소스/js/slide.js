// CJ now 페이지 모듈화 작업
import { csvData } from "./setData.js";


// 슬라이드배너 대상수집
const slide = document.querySelector("#slide ul");


/**************************************** 
    함수명: chgCsv
    기능: 이미지, 텍스트 배열대로 세팅
****************************************/

function chgCsv() {
    
    let maxlength = Object.keys(csvData).length;
    
    for (let i = 0; i < maxlength; i++) {
        let num = i;
        let csv = csvData["csv"+num];
        slide.innerHTML += `
            <li>
                <img src="${csv.imgData}" alt="${csv.altData}">
                <h3>${csv["mt"+num]}</h3>
                <p>${csv["st"+num]}</p>
            </li>
        `;
    }
} /////////// chgCsv 함수 /////////////////

chgCsv();