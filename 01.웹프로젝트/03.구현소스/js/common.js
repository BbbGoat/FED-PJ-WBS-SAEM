function loadFn() {
    console.log("로딩완료!");

    /************************************************ 
        함수명 : langBtn
        기능 : .main_lang > a 클릭시 .list_lang 박스 노출
                .btn_icon / .btn_icon_close 클래스의
                display 속성 변경
    ************************************************/
    function langBtn(){

        // 1. 대상수집
        const mainLang = document.querySelector(".main_lang > a");
        const listLang = document.querySelector(".list_lang");
        const btnIcon = document.querySelector(".btn_icon");
        const btnIconClose = document.querySelector(".btn_icon_close");
    
        console.log(mainLang, listLang,btnIcon,btnIconClose);
    
        // 2. 클릭 이벤트 설정
        mainLang.onclick = () => {
            console.log("클릭이벤트");
            

        }
        
        

    }

    // 함수호출
    langBtn();
    
} ////////////////  loadFn 함수 //////////////////

window.addEventListener("DOMContentLoaded", loadFn);
